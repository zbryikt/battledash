(->
  ldc.register \perm, <[]>, ->
    lc = {type: \all}
    obj = do
      idx: -1
      cfg: do
        roles: [
          {
            name: "管理員",
            desc: "擁有管理此活動的所有權限，包含設定權限、更改任何設定等。",
            list: [ {name: "Kirby Wu"}, {name: "David Jones"}, {name: "Beetle Juice"}]
          }, {
            name: "評審",
            desc: "活動的提案評審，擁有個人的評審頁面，其評分表並會匯入評選大表中。",
            list: [ {name: "clkao"}, {name: "ipa chiu"} ]
          }
        ]

    toggle-role = ->
      role = obj.cfg.roles[idx = obj.idx]
      name = if role => role.name else ''
      type = if ~idx => \role else \all
      lc <<< {idx, role, name, type}

    update-view = ->
      toggle-role!
      view.render!

    update-history = (do-debounce) ->
      if do-debounce => update-history-debounced!
      else history.update obj
    update-history-debounced = debounce ->
      history.update obj

    history = new ctrlz {obj: JSON.parse(JSON.stringify(obj))}
    view-config = { root: document.body, action: {click: {}, keyup: {}}, handler: {}}
    view-config.action.click <<< do
      roles: ({node, evt}) ->
        obj.idx = obj.cfg.roles.map(->it.name).indexOf(evt.target.getAttribute(\data-name))
        update-history!
        update-view!

      "new-role": ({node, evt}) ->
        names = obj.cfg.roles.map -> it.name
        for i from 1 til 100 => if !~names.indexOf("角色#i") => break
        name = "角色#{if i < 100 => i else Math.round(Math.random! * 100) + 100}"
        obj.cfg.roles.push { name: name, desc: "自訂角色", list: [] }
        obj.idx = obj.cfg.roles.length - 1
        update-history!
        update-view!
        evt.stopPropagation!

      "delete-role": ->
        if obj.cfg.roles.length <= 1 => alert "最少要有一個角色"
        else if ~obj.idx =>
          obj.cfg.roles.splice(obj.idx,1)
          obj.idx = -1
          update-history!
          update-view!
    view-config.action.keyup <<< do
      "role-name": ({node}) -> if lc.role =>
        name = node.value
        invalid = (~obj.cfg.roles.map(->it.name).indexOf(name) and lc.name != name)
        node.classList.toggle \is-invalid, invalid
        if invalid => return
        lc.role.name = node.value
        update-history!
        update-view!

    view-config.handler <<< do
      "role-view": ({node}) -> node.classList.toggle \d-none, lc.type != \role
      role: do
        list: -> obj.cfg.roles
        handler: ({node, data}) ->
          n = ld$.find(node, '.nav-link', 0)
          n.classList.toggle \active, (data.name == lc.name)
          n.setAttribute \data-name, data.name
          n.setAttribute \data-type, \role
          n.innerText = data.name
      "role-name": ({node}) ->
        node.classList.toggle \d-none, !~(obj.idx)
        if lc.role => node.value = lc.name
        name = node.value
        node.classList.toggle \is-invalid, (~obj.cfg.roles.map(->it.name).indexOf(name) and lc.name != name)

      "role-desc": do
        list: -> obj.cfg.roles
        action: keyup: ({node, data}) ->
          data.desc = node.innerText
          update-history true
        handler: ({node, data}) ->
          node.innerText = data.desc or ''
          node.setAttribute \data-name, data.name
          node.classList.toggle \d-none, data.name != lc.name

      "role-all": ({node}) -> node.classList.toggle \active, lc.type == \all
      "role-desc-all": ({node}) -> node.classList.toggle \d-none, lc.type != \all

    view = new ldView view-config

    document.addEventListener \keydown, (e) ->
      if e.keyCode == 90 and (e.metaKey or e.ctrlKey) =>
        if e.shiftKey => history.redo!
        else history.undo!
        payload = JSON.parse(JSON.stringify(history.get!))
        obj.idx = payload.idx
        obj.cfg = payload.cfg
        update-view!

  ldc.app \perm    

)!
