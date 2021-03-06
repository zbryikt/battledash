// Generated by LiveScript 1.3.0
(function(){
  ldc.register('period', [], function(){
    var lc, obj, updateHistory, history, viewConfig, view;
    lc = {
      idx: 0
    };
    obj = {
      idx: 0,
      cfg: {
        periods: [
          {
            name: "預設",
            config: {},
            start: "",
            end: ""
          }, {
            name: "提案期",
            config: {},
            start: "",
            end: ""
          }
        ]
      }
    };
    updateHistory = function(){
      return history.update(obj);
    };
    history = new ctrlz({
      obj: JSON.parse(JSON.stringify(obj))
    });
    viewConfig = {
      root: '[ld-scope=config-panel]',
      init: {},
      handler: {},
      action: {
        click: {},
        input: {}
      }
    };
    import$(viewConfig.action.input, {
      "period-name": function(arg$){
        var node, name, invalid;
        node = arg$.node;
        name = (node.value || '').trim();
        invalid = !name || (~obj.cfg.periods.map(function(it){
          return it.name;
        }).indexOf(name) && obj.cfg.periods[obj.idx].name !== name);
        node.classList.toggle('is-invalid', invalid);
        if (invalid) {
          return;
        }
        obj.cfg.periods[obj.idx].name = node.value;
        updateHistory();
        return view.render();
      }
    });
    import$(viewConfig.action.click, {
      periods: function(arg$){
        var node, evt, n, type, names, i$, i, name;
        node = arg$.node, evt = arg$.evt;
        n = evt.target;
        if (!(type = n.getAttribute('data-type'))) {
          return;
        }
        names = obj.cfg.periods.map(function(it){
          return it.name;
        });
        if (type === 'new-period') {
          for (i$ = 1; i$ < 100; ++i$) {
            i = i$;
            if (!~names.indexOf("時段" + i)) {
              break;
            }
          }
          name = "時段" + (i < 100
            ? i
            : Math.round(Math.random() * 100) + 100);
          obj.cfg.periods.push({
            name: name,
            desc: "自訂時段",
            config: {}
          });
        } else {
          name = n.getAttribute('data-name');
          obj.idx = names.indexOf(name);
        }
        updateHistory();
        return view.render();
      },
      "delete-period": function(arg$){
        var node, evt;
        node = arg$.node, evt = arg$.evt;
        if (obj.cfg.periods.length <= 1) {
          return alert("最少要有一個階段");
        } else if (~obj.idx) {
          obj.cfg.periods.splice(obj.idx, 1);
          obj.idx = 0;
          updateHistory();
          return view.render();
        }
      }
    });
    import$(viewConfig.handler, {
      "default-view": function(arg$){
        var node;
        node = arg$.node;
        return node.classList.toggle('d-none', obj.idx !== 0);
      },
      "custom-view": function(arg$){
        var node;
        node = arg$.node;
        return node.classList.toggle('d-none', obj.idx === 0);
      },
      "period-name": function(arg$){
        var node, name, invalid;
        node = arg$.node;
        node.value = obj.cfg.periods[obj.idx].name;
        name = (node.value || '').trim();
        invalid = !name || (~obj.cfg.periods.map(function(it){
          return it.name;
        }).indexOf(name) && obj.cfg.periods[obj.idx].name !== name);
        return node.classList.toggle('is-invalid', invalid);
      },
      period: {
        list: function(){
          return obj.cfg.periods;
        },
        handle: function(arg$){
          var node, data, idx, x$, n;
          node = arg$.node, data = arg$.data, idx = arg$.idx;
          x$ = n = ld$.find(node, 'a', 0);
          x$.innerText = data.name;
          x$.classList.toggle('active', idx === obj.idx);
          x$.setAttribute('data-name', data.name);
          x$.setAttribute('data-type', 'tab');
          return x$;
        }
      }
    });
    import$(viewConfig.action.input, {
      time: function(arg$){
        var node;
        node = arg$.node;
        obj.cfg.periods[obj.idx][node.getAttribute('data-name')] = node.value;
        return updateHistory();
      }
    });
    import$(viewConfig.init, {
      time: function(arg$){
        var node;
        node = arg$.node;
        return flatpickr(node, {
          enableTime: true,
          dateFormat: "Y-m-d H:i"
        });
      }
    });
    import$(viewConfig.handler, {
      time: function(arg$){
        var node;
        node = arg$.node;
        return node.value = obj.cfg.periods[obj.idx][node.getAttribute('data-name')] || '';
      }
    });
    import$(viewConfig.action.click, {
      'switch': function(arg$){
        var node, c, ref$;
        node = arg$.node;
        node.classList.toggle('on');
        c = (ref$ = obj.cfg.periods[obj.idx]).config || (ref$.config = {});
        if (!c) {
          return;
        }
        c[node.getAttribute('data-name')] = node.classList.contains('on');
        return updateHistory();
      }
    });
    import$(viewConfig.handler, {
      'switch': function(arg$){
        var node, ref$;
        node = arg$.node;
        return node.classList.toggle('on', !!((ref$ = obj.cfg.periods[obj.idx]).config || (ref$.config = {}))[node.getAttribute('data-name')]);
      }
    });
    view = new ldView(viewConfig);
    return document.addEventListener('keydown', function(e){
      var payload;
      if (e.keyCode === 90 && (e.metaKey || e.ctrlKey)) {
        if (e.shiftKey) {
          history.redo();
        } else {
          history.undo();
        }
        payload = JSON.parse(JSON.stringify(history.get()));
        import$(obj, payload);
        return view.render();
      }
    });
  });
  return ldc.app('period');
})();
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}