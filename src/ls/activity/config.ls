(->
  ldc.register \period, <[]>, ->
    lc = {idx: 0}
    obj = do
      idx: 0
      cfg: do
        periods: [
          {
            name: "預設"
            config: {}
            start: ""
            end: ""
          },
          {
            name: "提案期"
            config: {}
            start: ""
            end: ""
          }
        ]
    
    update-history = -> history.update obj
    history = new ctrlz {obj: JSON.parse(JSON.stringify(obj))}

    view-config = {root: document.body, init: {}, handler: {}, action: {click: {}, input: {}}}

    view-config.action.input <<< do
      "period-name": ({node}) ->
        name = (node.value or '').trim!
        invalid = !name or (~obj.cfg.periods.map(->it.name).indexOf(name) and obj.cfg.periods[obj.idx].name != name)
        node.classList.toggle \is-invalid, invalid
        if invalid => return
        obj.cfg.periods[obj.idx].name = node.value
        update-history!
        view.render!
    view-config.action.click <<< do
      periods: ({node, evt}) ->
        n = evt.target
        if !(type = n.getAttribute(\data-type)) => return
        names = obj.cfg.periods.map(-> it.name)
        if type == \new-period =>
          for i from 1 til 100 => if !~names.indexOf("時段#i") => break
          name = "時段#{if i < 100 => i else Math.round(Math.random! * 100) + 100}"
          obj.cfg.periods.push { name: name, desc: "自訂時段", config: {} }
        else
          name = n.getAttribute(\data-name)
          obj.idx = names.indexOf(name)
        update-history!
        view.render!
      "delete-period": ({node, evt}) ->
        console.log obj.idx
        if obj.cfg.periods.length <= 1 => alert "最少要有一個階段"
        else if ~obj.idx =>
          obj.cfg.periods.splice(obj.idx,1)
          obj.idx = 0
          update-history!
          view.render!

    view-config.handler <<< do
      "default-view": ({node}) -> node.classList.toggle \d-none, obj.idx != 0
      "custom-view": ({node}) -> node.classList.toggle \d-none, obj.idx == 0
      "period-name": ({node}) ->
        node.value = obj.cfg.periods[obj.idx].name
        name = (node.value or '').trim!
        invalid = !name or (~obj.cfg.periods.map(->it.name).indexOf(name) and obj.cfg.periods[obj.idx].name != name)
        node.classList.toggle \is-invalid, invalid
      period: do
        list: -> obj.cfg.periods
        handle: ({node, data, idx}) ->
          n = ld$.find(node, 'a',0)
            ..innerText = data.name
            ..classList.toggle \active, (idx == obj.idx)
            ..setAttribute \data-name, data.name
            ..setAttribute \data-type, \tab

    view-config.action.input <<< do
      time: ({node}) ->
        obj.cfg.periods[obj.idx][node.getAttribute(\data-name)] = node.value
        update-history!
    view-config.init <<< do
      time: ({node}) -> flatpickr node, {enableTime: true, dateFormat: "Y-m-d H:i" }
    view-config.handler <<< do
      time: ({node}) -> node.value = obj.cfg.periods[obj.idx][node.getAttribute(\data-name)] or ''

    view-config.action.click <<< do
      switch: ({node}) ->
        node.classList.toggle \on
        c = obj.cfg.periods[obj.idx].{}config
        if !c => return
        c[node.getAttribute(\data-name)] = node.classList.contains(\on)
        update-history!
    view-config.handler <<< do
      switch: ({node}) ->
        node.classList.toggle \on, !!obj.cfg.periods[obj.idx].{}config[node.getAttribute(\data-name)]

    view = new ldView view-config
   
    document.addEventListener \keydown, (e) ->
      if e.keyCode == 90 and (e.metaKey or e.ctrlKey) =>
        if e.shiftKey => history.redo!
        else history.undo!
        payload = JSON.parse(JSON.stringify(history.get!))
        obj <<< payload
        view.render!



  ldc.app \period 

)!
