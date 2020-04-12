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
            try
              fs.read-file-sync fn
            catch e
              fs.write-file-sync fn, ''
            ed.open fn
            ed.render!
)!
