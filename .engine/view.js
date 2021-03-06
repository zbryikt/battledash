// Generated by LiveScript 1.3.0
(function(){
  var fs, path, pug, reload, pugCached, log, engine;
  fs = require('fs');
  path = require('path');
  pug = require('pug');
  reload = require("require-reload")(require);
  pugCached = {};
  log = function(f, opt, t, type, cache){
    f = f.replace(opt.basedir, '');
    return console.log("[VIEW] " + f + " served in " + t + "ms (" + type + (cache ? ' cached' : '') + ")");
  };
  engine = function(f, opt, cb){
    var lc, viewdir, basedir, pc, t1, ret, that, t2, e;
    lc = {};
    if (opt.settings.env === 'development') {
      lc.dev = true;
    }
    if (opt.settings['view cache']) {
      lc.cache = true;
    }
    viewdir = opt.viewdir, basedir = opt.basedir;
    pc = path.join(viewdir, f.replace(basedir, '').replace(/\.pug$/, '.js'));
    try {
      t1 = Date.now();
      ret = !lc.cache
        ? reload(pc)
        : (that = pugCached[pc])
          ? that
          : pugCached[pc] = require(pc);
      ret = ret(opt);
      t2 = Date.now();
      if (lc.dev) {
        log(f, opt, t2 - t1, 'precompiled', lc.cache);
      }
      return cb(null, ret);
    } catch (e$) {
      e = e$;
      try {
        t1 = Date.now();
        return fs.readFile(f, function(e, b){
          var ret, ref$, t2;
          if (e) {
            throw new Error(e);
          }
          ret = pug.render(b, (ref$ = import$({}, opt), ref$.filename = f, ref$.cache = lc.cache, ref$.basedir = basedir, ref$));
          t2 = Date.now();
          if (lc.dev) {
            log(f, opt, t2 - t1, 'from pug', lc.cache);
          }
          return cb(null, ret);
        });
      } catch (e$) {
        e = e$;
        if (lc.dev) {
          console.log("[VIEW] " + f.replace(opt.basedir, '') + " serve failed.");
        }
        return cb(e, null);
      }
    }
  };
  module.exports = engine;
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
