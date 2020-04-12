// Generated by LiveScript 1.3.0
(function(){
  return getfa('sample').then(function(fs){
    var ed, view;
    fs.writeFileSync('blank', 'hello index.html!');
    ed = new Editor({
      node: {
        edit: '[ld=editor]',
        view: '[ld=viewer]'
      },
      editlet: {},
      renderer: function(arg$){
        var fs, payload, k, v, ret;
        fs = arg$.fs;
        if (!fs) {
          return;
        }
        payload = {
          html: fs.readFileSync(ed.fs.openedFile).toString()
        };
        for (k in payload) {
          v = payload[k];
          ret = transpiler.detect(v);
          if (ret.mod && ret.mod.transform) {
            payload[k] = ret.mod.transform(v);
          }
        }
        return payload;
      }
    });
    ed.setFiles(fs);
    ed.open('blank');
    return view = new ldView({
      root: "[ld-scope=editor]",
      action: {
        click: {
          file: function(arg$){
            var node, fn, e;
            node = arg$.node;
            fn = node.getAttribute('data-name');
            try {
              fs.readFileSync(fn);
            } catch (e$) {
              e = e$;
              fs.writeFileSync(fn, '');
            }
            ed.open(fn);
            return ed.render();
          }
        }
      }
    });
  });
})();