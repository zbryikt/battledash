(->
  ldc.register \period, <[]>, ->
    lc = do
      period: <[ 預設 提案期 審查期 決選發表]>
      selected: 0
      config: {}

    update-history = -> history.update lc.config
    history = new ctrlz {obj: JSON.parse(JSON.stringify(lc.config))}

    view = new ldView do
      root: document
      action: do
        input: do
          time: ({node, evt}) ->
            cfg = lc.config{}[lc.selected]
            cfg[node.getAttribute(\ld)] = node.value
            update-history!
          name: ({node, evt}) ->
            lc.period[lc.selected] = node.value
            view.render \period
            update-history!

        click: do
          nav: ({node, evt}) ->
            name = evt.target.getAttribute \data-name
            if !name =>
              lc.period.push (name = "未命名#{lc.period.length}")
              view.render \period
              return
            ld$.find(view.get(\nav), '.nav-link.active',0).classList.remove \active
            evt.target.classList.add \active
            lc.selected = lc.period.indexOf(name)
            cfg = lc.config{}[lc.selected]
            view.getAll(\switch).map -> it.classList.toggle \on, (cfg[it.getAttribute(\data-name)]?)
            view.get(\default).classList.toggle \d-none, lc.selected != 0
            view.getAll(\custom).map(->it.classList.toggle \d-none, lc.selected == 0)
            view.getAll(\time).map -> it.value = cfg[it.getAttribute(\ld)] or ''
            view.get(\name).value = name
          switch: ({node,evt}) ->
            node.classList.toggle \on
            cfg = lc.config{}[lc.selected]
            cfg[node.getAttribute(\data-name)] = node.classList.contains(\on)
            update-history!
          delete: ->
            if !lc.selected => return
            delete lc.period[lc.period[lc.selected]]
            lc.period.splice(lc.selected, 1)
            lc.selected <?= lc.period.length - 1
            view.render \period

      init: do
        time: ({node}) -> flatpickr node, {enableTime: true, dateFormat: "Y-m-d H:i" }
      handler: do
        default: (->), custom: (->)
        switch: ({node}) ->
          node.classList.toggle \on, !!lc.config{}[lc.selected][node.getAttribute(\data-name)]

        period: do
          list: -> lc.period
          handle: ({node, data, idx}) ->
            node.childNodes.0
              ..innerText = data
              ..classList.toggle \active, (idx == lc.selected)
              ..setAttribute \data-name, data

    document.addEventListener \keydown, (e) ->
      if e.keyCode == 90 and (e.metaKey or e.ctrlKey) =>
        if e.shiftKey => history.redo!
        else history.undo!
        payload = JSON.parse(JSON.stringify(history.get!))
        lc.config = payload
        view.render!

  ldc.app \period

)!
