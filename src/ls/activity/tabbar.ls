(->
  ldc.register \tabbar, <[]>, ->
    group = {}
    view = new ldView do
      root: document.body
      action: click: do
        "tabbar": ({node, evt}) ->
          if !evt.target.getAttribute(\ld) => return
          tab = evt.target.getAttribute(\data-name)
          nav = node.getAttribute(\data-name)
          group[nav] = tab
          view.render!
      handler: do
        "tabbar-tab": ({node}) ->
          tabbar = node.getAttribute(\data-tabbar)
          name = node.getAttribute(\data-name)
          node.classList.toggle \active, (
            group[tabbar] == name or
            !group[tabbar] and /default/.exec(node.getAttribute(\ld))
          )
        "tabbar-panel": ({node}) ->
          tabbar = node.getAttribute(\data-tabbar)
          node.classList.toggle \d-none, (
            (group[tabbar] and group[tabbar] != node.getAttribute(\data-name)) or
            (!group[tabbar] and !/default/.exec(node.getAttribute(\ld)))
          )
  ldc.run \tabbar
)!
