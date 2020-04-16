(->
  getfa 'sample'
    .then (fs) ->
      fs.write-file-sync 'blank', 'hello index.html!'
      ed = new Editor do
        node: do
          edit: '[ld=editor]'
          view: '[ld=viewer]'
        editlet: {}
        renderer: ({fs}) ->
          if !fs => return
          payload = html: (fs.read-file-sync ed.fs.opened-file .toString!)
          for k,v of payload =>
            ret = transpiler.detect(v)
            if ret.mod and ret.mod.transform => payload[k] = ret.mod.transform v
          return payload
      ed.set-files fs
      ed.open \blank
      view = new ldView do
        root: "[ld-scope=editor]"
        action: click: do
          file: ({node}) ->
            fn = node.getAttribute \data-name
            init fn

  sdb = new sharedb-wrapper url: {scheme: window.location.protocol.replace(':',''), domain: window.location.host}
  #sdb.on \close, -> lda.ldcvmgr.toggle \disconnected


  watch = (ops, self) ->
    if self => return
    cval = ed.ed.cm.getValue!
    rval = (lc.doc.data or {})[lc.name]
    if cval != rval =>
      lc.{}old[lc.name] = lc.{}cur[lc.name] = rval
      cm.setValue(rval or '')
      render!

  lc = {}
  init = (key) ->
    sdb.get {id: key, watch}
      .then (doc) ->
        lc.doc = doc
        lc.old = JSON.parse(JSON.stringify(doc.data))
        lc.cur = JSON.parse(JSON.stringify(doc.data))
        fs.write-file-sync key, lc.cur
        ed.open fn
        ed.render!
      .catch -> console.log 'document open failed: ', it
  update = ->
    val = ed.ed.cm.getValue!
    if lc.{}cur[lc.name] == val => return
    lc.{}cur[lc.name] = val
    lc.doc.submitOp(sdb.json.diff(lc.old, lc.cur))
    lc.{}old[lc.name] = val
    #ed.render!

  ed.ed.cm.on \change, -> update!

)!
