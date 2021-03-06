(->
  ldc.register \perm2, <[]>, ->
    lc2 = {}
    lc = {idx: -1, name: "n/a", type: \all}

    lc.cfg = do
      roles: [
        {
          name: "管理員",
          desc: "擁有管理此活動的所有權限，包含設定權限、更改任何設定等。",
          list: [
            {name: "Kirby Wu"}
            {name: "David Jones"}
            {name: "Beetle Juice"}
          ]
        },
        {
          name: "評審",
          desc: "活動的提案評審，擁有個人的評審頁面，其評分表並會匯入評選大表中。",
          config: {}
          list: [
            {name: "clkao"},
            {name: "ipa chiu"}
          ]
        }
      ]

    lc.picked = lc.cfg.roles.0
    czmgr = new ctrlz {obj: JSON.parse(JSON.stringify(lc))}
    update = (deb) ->
      update.ret = ret = update-debounced!
      if !deb =>
        ret.now!
        update.ret = null
    update-debounced = debounce ->
      console.log "update"
      czmgr.update lc

    view = new ldView do
      root: document.body
      action: do
        keyup: do
          "role-name": ({node}) -> if lc2.role =>
            name = node.value
            if ~lc.cfg.roles.map(->it.name).indexOf(name) and lc2.role and lc2.role.name != name =>
              return node.classList.add \is-invalid
            else node.classList.remove \is-invalid
            if lc2.role.name == lc.name => lc.name = node.value
            lc2.role.name = node.value
            console.log \here
            update true
            view.render!
        click: do

          "new-role": ->
            names = lc.cfg.roles.map -> it.name
            for i from 1 til 100 => if !~names.indexOf("角色#i") => break
            name = "角色#{if i < 100 => i else Math.round(Math.random! * 100) + 100}"
            lc.cfg.roles.push {
              name: name
              desc: "自訂角色"
              list: []
            }
            view.render!
            update!
          "delete-role": ->
            if lc.cfg.roles.length <= 1 => alert "最少要有一個角色"
            else if ~lc.idx =>
              lc.cfg.roles.splice(lc.idx,1)
              lc <<< {idx: 0, name: '', type: 'all'}
              delete lc2.role
              update!
              view.render!
          "toggle-newuser": ({node}) -> view.getAll(\newuser).map -> it.classList.toggle \d-none

          switch: ({node,evt}) ->
            node.classList.toggle \on
            c = lc.cfg.roles[lc.idx].{}cfg
            if !c => return
            c[node.getAttribute(\data-name)] = node.classList.contains(\on)
            update!

          roles: ({node, evt}) ->
            if !(type = evt.target.getAttribute \data-type) => return
            lc.type = type
            lc.name = name = evt.target.getAttribute(\data-name) or ""
            lc.idx = idx = lc.cfg.roles.map(-> it.name).indexOf(lc.name)
            lc2.role = lc.cfg.roles[idx]
            tabs = ld$.find(node, '.nav-link')
            tabs.map -> it.classList.remove \active
            evt.target.classList.add \active
            update!
            view.render!

          "new": ({node, evt}) ->
            role = (if lc.type == \all => lc.picked else lc2.role) or lc.cfg.roles.0 or {name: ''}
            user = view.get(\new-name).value
            idx = lc.cfg.roles
              .map -> it.list
              .reduce(((a,b) -> a ++ b), [])
              .map -> it.name
              .indexOf(user)
            if ~idx => return alert("user already exist")
            role.list.push {name: user, perm: lc.name}
            update!
            view.render!

      handler: do
        newuser: ->
        list: (->), all: (->), "new-name": (->), "new-type": (->)
        role: do
          list: -> lc.cfg.roles
          handler: ({node, data}) ->
            n = ld$.find(node, '.nav-link', 0)
            n.classList.toggle \active, (data.name == lc.name)
            n.setAttribute \data-name, data.name
            n.setAttribute \data-type, \custom
            n.innerText = data.name
        "picked-role": ({node}) -> node.innerText = (lc.picked or lc.cfg.roles.0 or {name: ''}).name
        "role-name": ({node}) ->
          node.classList.toggle \d-none, !(lc2.role)
          if lc2.role => node.value = lc2.role.name
          name = node.value
          if ~lc.cfg.roles.map(->it.name).indexOf(name) and lc2.role and lc2.role.name != name =>
            return node.classList.add \is-invalid
          else node.classList.remove \is-invalid
        "role-option": do
          list: -> lc.cfg.roles
          action: click: ({node, data}) -> lc.picked = data; view.render \picked-role
          handler: ({node, data}) ->
            node.setAttribute(\value, data.name)
            node.innerText = data.name
        "role-desc": do
          list: -> lc.cfg.roles
          action: keyup: ({node, data}) ->
            data.desc = node.innerText
            update true
          handler: ({node, data}) ->
            node.innerText = data.desc or ''
            node.setAttribute \data-name, data.name
            node.classList.toggle \d-none, data.name != lc.name
        "role-all": ({node}) -> node.classList.toggle \active, lc.type == \all
        "role-desc-all": ({node}) -> node.classList.toggle \d-none, lc.type != \all
        "roles-desc": ({node}) ->
          ld$.find(node, '[data-name]').map ->
            it.classList.toggle \d-none, (lc.name != it.getAttribute(\data-name))
        "all-list": ({node}) -> node.classList.toggle \d-none, lc.type != \all
        "custom-list": ({node}) -> node.classList.toggle \d-none, lc.type != \custom
        switch: ({node}) ->
          if !lc2.role => return
          node.classList.toggle \on, !!lc2.role.{}cfg[node.getAttribute(\data-name)]

        user: do
          list: ->
            if !lc2.role =>
              return lc.cfg.roles
                .map (r) -> r.list.map(-> it <<< {perm: r.name})
                .reduce(((a,b) -> a ++ b), [])
            else (lc2.role.list or []).map -> it <<< {perm: lc2.role.name}
          handler: ({node, data}) ->
            ld$.find(node, 'b', 0).innerText = data.name
            if ld$.find(node, '.text-muted', 0) => that.innerText = data.perm
          action: click: ({node, data, evt}) ->
            if !evt.target.classList.contains(\i-close) => return
            idx = lc.cfg.roles.map(-> it.name).indexOf(data.perm)
            if !~idx => return
            list = lc.cfg.roles[idx].list
            if !~list.indexOf(data) => return
            list.splice list.indexOf(data), 1
            view.render \user
            update!

        nav: ->
      document.addEventListener \keydown, (e) ->
        if e.keyCode == 90 and (e.metaKey or e.ctrlKey) =>
          promise = if update.ret =>
            p = update.ret
            update.ret.now!
            update.ret = null
            p.then -> czmgr.update lc
          else Promise.resolve!
          promise.then ->
            console.log 1
            czmgr.undo!
            lc <<< JSON.parse(JSON.stringify(czmgr.get!))
            lc2.role = lc.cfg.roles[lc.idx]
            view.render!

  ldc.app \perm    
)!
