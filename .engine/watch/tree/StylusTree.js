// Generated by LiveScript 1.3.0
(function(){
  var DocTree, styl;
  DocTree = require('./DocTree');
  styl = new DocTree({
    parser: function(c){
      var ret;
      ret = c.split('\n').map(function(it){
        return /\s*(@import)\s+(.+)$/.exec(it);
      }).filter(function(it){
        return it;
      }).map(function(it){
        return it[2].replace(/'/g, '').replace(/(\.styl)?$/, '.styl');
      }).map(function(it){
        return it;
      });
      return ret;
    }
  });
  module.exports = styl;
}).call(this);
