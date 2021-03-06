// Generated by LiveScript 1.3.0
(function(){
  var fs, fsExtra, LiveScript, path, colors, uglifyJs, aux, cwd, main;
  fs = require('fs');
  fsExtra = require('fs-extra');
  LiveScript = require('LiveScript');
  path = require('path');
  colors = require('colors');
  uglifyJs = require('uglify-js');
  aux = require('./aux');
  cwd = path.resolve(process.cwd());
  main = {
    map: function(list){
      return list.filter(function(it){
        return /^src\/ls/.exec(it);
      }).map(function(src){
        var des, desMin;
        des = path.normalize(src.replace(/^src\/ls/, "static/js/").replace(/\.ls/, ".js"));
        desMin = des.replace(/\.js$/, '.min.js');
        return {
          src: src,
          des: des,
          desMin: desMin
        };
      });
    },
    build: function(list){
      var i$, len$, ref$, src, des, desMin, t1, code, desdir, codeMin, t2, e;
      list = this.map(list);
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        ref$ = list[i$], src = ref$.src, des = ref$.des, desMin = ref$.desMin;
        if (!fs.existsSync(src) || aux.newer(des, src)) {
          continue;
        }
        try {
          t1 = Date.now();
          code = fs.readFileSync(src).toString();
          desdir = path.dirname(des);
          fsExtra.ensureDirSync(desdir);
          code = LiveScript.compile(fs.readFileSync(src).toString(), {
            bare: true
          });
          codeMin = uglifyJs.minify(code).code;
          fs.writeFileSync(des, code);
          fs.writeFileSync(desMin, codeMin);
          t2 = Date.now();
          console.log("[BUILD] " + src + " --> " + des + " / " + desMin + " ( " + (t2 - t1) + "ms )");
        } catch (e$) {
          e = e$;
          console.log(("[BUILD] " + src + " failed: ").red);
          console.log(e.message.toString().red);
        }
      }
    },
    unlink: function(list){
      var i$, len$, ref$, src, des, desMin, results$ = [];
      list = this.map(list);
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        ref$ = list[i$], src = ref$.src, des = ref$.des, desMin = ref$.desMin;
        if (fs.existsSync(des)) {
          fs.unlinkSync(des);
          console.log(("[BUILD] " + src + " --> " + des + " deleted.").yellow);
        }
        if (fs.existsSync(desMin)) {
          fs.unlinkSync(desMin);
          results$.push(console.log(("[BUILD] " + src + " --> " + desMin + " deleted.").yellow));
        }
      }
      return results$;
    }
  };
  module.exports = main;
}).call(this);
