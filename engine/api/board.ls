require! <[fs fs-extra path crypto read-chunk sharp express-formidable uploadr lderror]>
require! <[../aux]>
(engine,io) <- (->module.exports = it)  _

api = engine.router.api
app = engine.app

api.post \/board, aux.signed, express-formidable!, (req, res) ->
  lc = {}
  {name,description,slug,starttime,endtime,org} = req.fields
  thumb = (req.files["thumbnail[]"] or {}).path
  io.query "select key from board where slug = $1", [slug]
    .then (r={}) ->
      if r.rows and r.rows.length => return aux.reject new lderror(1011)
      io.query """
      insert into board (name,description,slug,starttime,endtime,org,owner)
      values ($1,$2,$3,$4,$5,$6,$7) returning key
      """, [name,description,slug,starttime or null, endtime or null, org or null, req.user.key]
    .then (r = {}) ->
      lc.ret = (r.[]rows or []).0
      if !thumb => return
      new Promise (res, rej) ->
        root = "static/assets/uploads/board"
        (e) <- fs-extra.ensure-dir root, _
        if e => return rej(e)
        (e,i) <- sharp(thumb).toFile path.join(root, "#slug.png"), _
        if e => rej(e) else res!
    .then -> res.send lc.ret
    .catch aux.error-handler res

api.post \/board/slug-check, (req, res) ->
  io.query "select key from board where slug = $1", [req.body.slug]
    .then (r = {}) -> res.send {result: if (r.rows or []).length => 'used' else 'free'}
    .catch ->
      console.log it
      aux.error-handler(res)(it)

