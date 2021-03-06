(->

  ({ldcvmgr,loader,util,error}) <- ldc.register \auth, <[ldcvmgr loader util error]>, _

  #prevent global object been altered accidentally
  global = -> if local.global => JSON.parse(JSON.stringify local.global) else null
  [local,el] = [{}, {}]

  # cookie consent
  consent = do
    dom: ld$.find document, '[ld-scope=cookie-consent]', 0
    val: util.cookie(\legal)
    clear: -> if @dom => ld$.remove(@dom); @dom = null
    check: ->
      ({user}) <~ auth.get!then _
      if user.{}config.legal and @dom => return @clear!
      if !(@val = util.cookie(\legal)) => return
      if ((user.{}config.legal) or !user.key) => return
      ld$.fetch("/d/me/legal", {method: \POST}).then(~> user.{}config.legal = @val).catch(->)
    init: ->
      if !@val and @dom => @dom.classList.remove \d-none else return
      <~ ld$.find(@dom, '[ld=ok]', 0).addEventListener \click, _
      util.cookie \legal, (new Date!getTime!), new Date(Date.now() + 86400000 * 365 * 100).toGMTString()
      @clear!
      @check!
  consent.init!

  if ld$.find(document, '.authpanel', 0) =>

    # typical auth check flow
    form = new ldForm do
      names: -> <[email passwd displayname]>
      after-check: (s, f) ->
        if s.email != 1 and !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,}|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.exec(f.email.value) => s.email = 2
        if s.passwd != 1 =>
          if auth.act == \signup and "#{f.passwd.value}".length < 8 => s.passwd = 2
          else s.passwd = if !f.passwd.value => 1 else 0
        if auth.act == \login => s.displayname = 0
        else s.displayname = if !f.displayname.value => 1 else if !!f.displayname.value => 0 else 2
      root: \.authpanel
    el.submit = ld$.find(document, '.authpanel .btn[data-action=submit]', 0)
    ldld = new ldLoader root: el.submit
    form.on \readystatechange, -> el.submit.classList.toggle \disabled, !it
    form.field('passwd').addEventListener \keyup, (e) ->
      if e.keyCode == 13 => form.check {now: true} .then -> submit!
    el.submit.addEventListener \click, -> submit!
    submit = ->
      if !form.ready! => return
      ldld.on!
      val = form.values!
      body = {} <<< val{email, passwd, displayname} <<< {config: {newsletter: val.newsletter}}
      ld$.fetch (if auth.act == \login => \/u/login else \/u/signup), {
        method: \POST
        body: JSON.stringify(body)
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      }, {type: \text}
        .then -> auth.fetch!
        .then -> auth.get!
        .then (g) ->
          action.info \default
          if g.user => lda.auth.hide \ok
          form.reset!
          ldld.off!
          auth.fire("auth.signin")
        .catch ->
          action.info \failed
          form.fields.passwd.value = null
          form.check {n: \passwd, now: true}
          ldld.off!

  authpanel = ld$.find document, \.authpanel, 0
  if authpanel =>
    acts = ld$.find authpanel, '[data-action]'
    authpanel.addEventListener \click, (e) ->
      if !e or !(n = e.target) or !e.target.getAttribute => return
      act = e.target.getAttribute \data-action
      auth.switch act

  # get global object. put it here so it can't be resolved by user from dev console.
  get = proxise -> if local.global => return Promise.resolve local.global

  # typical auth chek flow
  # get -> auth.show -> authpanel.show -> authpanel resolved -> ldc.auth.fetch -> get.resolved
  auth = do
    evt-handler: {}
    on: (n, cb) -> @evt-handler.[][n].push cb
    fire: (n, ...v) -> for cb in (@evt-handler[n] or []) => cb.apply @, v
    switch: (act) ->
      if !(act in <[signup login]>) => return
      authpanel.classList.remove \signup, \login
      authpanel.classList.add @act = act
      form.check {now: true}
    social: (name) ->
      des = window.open '', 'social-login', 'height=640,width=560'
      div = ld$.create name: \div
      document.body.appendChild div
      @get!
        .then ({csrf-token}) ~>
          div.innerHTML = """
          <form target="social-login" action="/u/auth/#name/" method="post">
            <input type="hidden" name="_csrf" value="#{csrf-token}"/>
          </form>"""
          window.social-login = login = proxise(-> ld$.find(div, 'form', 0).submit!)
          login!
        .then ~> @fetch!
        .then ({user}) -> if !(user and user.key) => Promise.reject new ldError(1000)
        .then ->
          if !ldcvmgr.is-on(\authpanel) => return window.location.reload!
          lda.auth.hide!
          auth.fire("auth.signin")
        .finally -> ld$.remove div
        .catch error {ignore: [999 1000]}

    fb: -> @social \facebook
    google: -> @social \google
    logout: ->
      loader.on!
      ld$.fetch \/u/logout, {method: \post}, {}
        .then -> auth.fetch {renew: true}
        .then -> ldcvmgr.toggle \logout
        .then -> loader.off!
        .catch -> ldcvmgr.toggle \error

    # ensure user is logged in. shorthand and for readbility for auth.get({authed:true})
    ensure: (opt = {}) -> @get(opt <<< {authed: true})
    # get global information.
    #  - authed: global must contains user object with key, else popup a login modal.
    #    reject if somehow error happens or login failed when authed = true
    get: (opt = {authed: false}) ->
      get!then (g) ->
        if opt.authed =>
          p = if !(g and g.{}user.key) => lda.auth.show(opt.tab, opt.info) else Promise.resolve(g)
          p.then (g) ->
            if !(g and g.{}user.key) => return Promise.reject(new ldError(1000))
            lda.auth.hide!
            return g
        else return g

    userinfo: (user) ->
      promise = if user => Promise.resolve that else @get!then ({user}) -> return user
      promise.then (user = {}) ->
        plan = user.plan or {}
        return {} <<< user <<< {
          plan: plan
          authed: user.key > 0
          is-pro: !!/pro/.exec(plan.slug or '')
          is-blocked: !!user.{}config.blocked
        }

    # renew: set to true to force fetch data from server by ajax.
    fetch: (opt = {renew: true}) ->
      # if js/global response later then 1000ms, popup a loader
      loader.on-later 1000

      # if it took too long to respond, just hint user about possibly server issue
      hint-fail = debounce(10000, ->
        loader.off!
        ldcvmgr.get('connection-timeout')
          .then -> loader.on!; debounce 10000
          .then -> auth.fetch!
      )!

      # if we don't force renew and there is a cache in cookie
      # otherwise we fetch data from server
      ret = if !opt.renew and /global=/.exec(document.cookie) =>
        document.cookie
          .split \;
          .map -> /^global=(.+)/.exec(it.trim!)
          .filter -> it
          .0
      else null
      promise = if ret => Promise.resolve JSON.parse(decodeURIComponent(ret.1))
      else ld$.fetch \/js/global, {}, {type: \json}
      promise
        .then ~>
          hint-fail.cancel!
          loader.cancel!
          ld$.fetch.{}headers['X-CSRF-Token'] = it.csrfToken
          local.global = it
          local.global.location = (if ip-from-taiwan? => (if ip-from-taiwan it.ip => \tw else \other) else undefined)
          ret = global!
          get.resolve ret
          try
            ldc.fire \auth.change, ret
            consent.check!
            /* ga code { */
            if gtag? =>
              if !gtag.userid and ret.user and ret.user.key =>
                gtag(\set, {'user_id': gtag.userid = ret.user.key})
                # if set user_id -> either user just logged in, or user just open page.
                # force inited to false so used_id can be sent correctly.
                # this might lead to page view counted twice for each user login action.
                # also, since we put it here - event might not be sent when users browse pages
                # without auth.js. please keep this in mind.
                gtag.inited = false
              if !gtag.inited => gtag(\config, gtag.code, {anonymize_ip: true}); gtag.inited = true
            /* } ga code */
          catch e
            # error after data fetched. prompt, but still return global
            ldcvmgr.toggle("error"); console.log e
          return ret
        .catch ~>
          hint-fail.cancel!
          loader.cancel!
          ldcvmgr.toggle("server-down"); console.log it

  auth.fetch {renew: false}
  action = do
    fb: -> auth.social \facebook
    google: -> auth.social \google
    logout: -> auth.logout!
    is-on: -> ldcvmgr.is-on \authpanel
    show: (n = \signup, info = \default) ->
     Promise.resolve(ldcvmgr.is-on \authpanel)
        .then -> if !it => auth.switch n
        .then -> if info => action.info info
        .then -> ldcvmgr.get \authpanel
        .then -> if it => auth.fetch! # re-fetch only if get return sth.
    hide: (obj = null) -> ldcvmgr.set \authpanel, obj # default hide set with nothing to indicate a cancel.
    info: (name = \default) ->
      infos = ld$.find(authpanel, '*[data-info]')
      hash = {}
      infos.map -> hash[it.getAttribute(\data-info)] = it
      infos.map -> it.classList.add \d-none
      if !hash[name] => name = \default
      hash[name].classList.remove \d-none
  ldc.action action

  auth
)!
