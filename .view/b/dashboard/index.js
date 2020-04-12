 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Array, JSON, blockLoader, board, cssLoader, data, decache, escape, parentName, prefix, scriptLoader, version) {;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fldui.pug";
if(!ctrl) var ctrl = {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Fchevron-down.pug";





;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Fspinner.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";









;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.url[url] = true;
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";










;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";













;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";















































;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["ldPaletteEditor"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldp\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"colors\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldColorPicker no-border no-palette\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mb-2\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control form-control-local-sm\" value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "RGB\u003C\u002Foption\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hsl\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HSL\u003C\u002Foption\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hcl\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HCL\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 pl-0\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-local-sm value\" placeholder=\"Hex Value\" data-tag=\"hex\" style=\"margin:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var configs = [["Red", "Green", "Blue", "rgb", "active"], ["Hue", "Saturation", "Luminance", "hsl",""], ["Hue", "Chroma", "Luminance", "hcl",""]];
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
// iterate configs
;(function(){
  var $$obj = configs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





























































































































;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var anikit = {"groupName":["No Animation","Popular Animation","Repeat Animation","Transition"],"members":[[["static","static"]],[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]],"group":{"static":[["static","static"]],"popular":[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],"repeat":[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],"transition":[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]}};
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";























































































;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";














































;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var prentName = prefix.currentName;
;pug_debug_line = 120;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix.currentName = name;
;pug_debug_line = 121;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
if (attributes.class && /naked-scope/.exec(attributes.class)) {
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
block && block();
}
else {
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix.currentName = parentName;
};
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
var ctrl = {
  cover: {authpanel: true},
  navtop: {placeholder: true, shown: true},
  foot: {shown: true},
  carbon: {}
}
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
var vars = {root: ""}
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
ctrl.navtop.placeholder = true;
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
ctrl.navtop.shown = true;
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
ctrl.navtop.className = "navbar-light text-dark bg-white"
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fdata\u002Fsample.pug";
data = {}
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fdata\u002Fsample.pug";
data.prj = {
  id: 123,
  name: "台灣神手計畫",
  owner: 123,
  ownerName: "神手健",
  description: "台灣神手致力發展適合台灣人的開源義肢，並將程式碼、3D檔案、電路佈局開源於”台灣神手開源義肢“網站"
}
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fdata\u002Fsample.pug";
data.schema = [
  {
    title: "專案名稱",
    name: "name",
    description: "請填入您的提案名稱 ( 20 字以內 )",
    type: "short-answer",
    value: "台灣神手計畫"
  },
  {
    title: "專案簡介",
    name: "brief",
    description: "請以簡短且非專業人士也能理解的方式介紹此專案。 ( 200 ~ 500 字 )",
    type: "long-answer",
    value: "台灣神手致力發展適合台灣人的開源義肢，並將程式碼、3D檔案、電路佈局開源於”台灣神手開源義肢“網站 "
  },
  {
    title: "你需要多少錢？",
    name: "money",
    description: "( 30 ~ 50 萬之間 )",
    type: "short-answer",
    value: "30 萬"
  },
  {
    title: "提案者簡介",
    name: "owner",
    description: "請簡短的介紹提案成員 ( 80 ~ 120 字 )",
    type: "long-answer",
    value: "張淑貞，參與農地污染和違章工廠資料開放推動及應用。劉哲瑋，參與 g0v 公有地相關議題專案。"
  },
  {
    title: "團隊成員簡介",
    name: "team",
    description: "請簡述提案者在專案中的角色（例如：專案經理、全端工程師、顧問等）、專案成員與團隊背景介紹。（團隊現在有什麼人才？還需要什麼人才？）",
    type: "long-answer",
    value: "需要人才 : 1.資料工程師，建置資料申請關鍵字工具及資訊呈現。 2.使用者介面設計者，規劃便於目標對象使用的介面。"
  },
  {
    title: "個人動機",
    name: "motivation",
    description: "你為什麼要做這個計劃（個人動機）？",
    type: "long-answer",
    value: "開放資料，是政府公平透明治理的第一步。目前中央的政府資料開放平台 (data.gov.tw) 公開民眾申請資料及政府機關回覆內容，這點其實已很進步，但還有進步空間，例如民眾申請常被駁回，平台本身也沒有進一步統整民眾申請資料的結果，導致前人經驗很難提供後面申請者參考。另外，民眾收到政府駁回開放資料的原因後，也不知該如何處理或進一步要求，可能就此打住。"
  },
  {
    title: "相關文件",
    name: "document",
    description: "若有專案介紹的投影片，請提供",
    type: "upload-file"
  },
  {
    title: "主題分類",
    name: "category",
    description: "依獎助金的主題方向畫分的話，本計畫屬於哪個分類？",
    values: ["開放政府","新媒體","公共服務","開放資料","社會參與","基礎建設"],
    type: "radio",
    value: "開放資料"
  }
]
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fmixin.pug";































;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fuser\u002Fmixin.pug";









;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fproject\u002Fmixin.pug";

































;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fproject\u002Fmixin.pug";

































;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fproject\u002Fmixin.pug";





;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fproject\u002Fmixin.pug";





























;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fproject\u002Fmixin.pug";





























;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";

























;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";

























;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";



























;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";



























;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_mixins["act-list-ctrl"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100 justify-content-between py-2\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-group\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "許願池\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "得獎提案\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary active\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "全部提案 ";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Ci class=\"i-check\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" placeholder=\"搜尋提案...\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group-append\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "搜尋 ";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003Ci class=\"i-search\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixin.pug";































































;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";












;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";










;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";


























;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";




























;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";


























;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";





























































;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";











;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";











;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";













































;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";











;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";












;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";
pug_mixins["css"].call({
block: function(){
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";
pug_html = pug_html + " ";
}
}, "https://cdn.jsdelivr.net/npm/@yaireo/tagify@2.31.6/dist/tagify.css");
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";
pug_mixins["script"]("https://cdnjs.cloudflare.com/ajax/libs/marked/0.7.0/marked.min.js");
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";
pug_mixins["script"]("https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.0.3/purify.min.js");
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fedit\u002Findex.pug";
pug_mixins["script"]("https://cdn.jsdelivr.net/npm/@yaireo/tagify@2.31.6/dist/tagify.min.js");
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Noto+Sans+TC:300,400,500,700|Roboto:300,500&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/flatpickr/flatpickr.min.css");
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/bootstrap/4.3.1/css/bootstrap.min.css");
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/ldui/ldui.min.css");
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/css/index.css");
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "h1,\nh2,\nh3 {\n  font-family: 'Noto Sans TC', serif !important;\n}\nh4,\nh5,\nh6 {\n  font-family: Roboto, 'Noto Sans TC', sans-serif !important;\n  font-weight: 500;\n}\n.typeset h4,\n.typeset h5,\n.typeset h6 {\n  font-family: Roboto, 'Noto Sans TC', sans-serif !important;\n  font-weight: 500;\n}\nbody .typeset,\nbody,\np {\n  font-family: Roboto, 'Noto Sans TC', sans-serif !important;\n}\n\u003C\u002Fstyle\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["css"]("https://cdn.jsdelivr.net/npm/tail.datetime@0.4.13/css/tail.datetime-harx-light.min.css");
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "var board = ";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = escjson(board || null)) ? "" : pug_interp);
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + ";\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody" + (" class=\"ld-over-full-inverse\""+pug_attr("data-spy", (ctrl.scrollspy ? "scroll" : false), true, true)+pug_attr("data-target", (ctrl.scrollspy ? ctrl.scrollspy : false), true, true)) + "\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-spin ld-spinner\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/js/pack/base.min.js");
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
if(!ctrl.navtop) { ctrl.navtop = {placeholder: true, shown: true}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
if(!ctrl.navtop.className) { ctrl.navtop.className = "navbar-light bg-semi-light" };
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
if (ctrl.navtop.shown) {
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv id=\"nav-top\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cnav" + (pug_attr("class", pug_classes(["navbar","navbar-expand-lg","fixed-top",ctrl.navtop.className], [false,false,false,true]), false, true)+pug_attr("data-transition", ctrl.navtop.transition, true, true)+pug_attr("data-transition-target", ctrl.navtop.transitionTarget, true, true)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"navbar-brand text-dark\" href=\"\u002F\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "公民科技獎助金\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cbutton class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-top-content\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cspan class=\"navbar-toggler-icon\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cul class=\"navbar-nav mr-auto\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "活動辦法\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "關於我們\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "常見問題\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "相關報導\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "成果報告\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "歷屆活動\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cul class=\"navbar-nav ml-auto\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item d-none\" ld=\"signup\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" onclick=\"lda.auth.show('signup')\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "註冊\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item d-none\" ld=\"login\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" onclick=\"lda.auth.show('login')\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "登入\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item dropdown\" ld=\"profile\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu dropdown-menu-right\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "個人頁面\u003C\u002Fa\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "我的提案\u003C\u002Fa\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "我的關注\u003C\u002Fa\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "其它動態\u003C\u002Fa\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "管理組織\u003C\u002Fa\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "管理活動\u003C\u002Fa\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002F\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "提案評選\u003C\u002Fa\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "個人設定\u003C\u002Fa\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" onclick=\"lda.auth.logout()\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "登出\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
},
attributes: {"class": "collapse navbar-collapse","id": "nav-top-content"}
}, "nav-top");
pug_html = pug_html + "\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
if (ctrl.navtop.placeholder) {
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv id=\"nav-top-placeholder\"\u003E\u003C\u002Fdiv\u003E";
}
}
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldNotify\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";



















;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_mixins["config"] = pug_interp = function(name,desc){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-2 pt-2 align-items-center border-top border-light\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + "\u003Clabel class=\"mb-0\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm text-muted\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = desc) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + "\u003Cdiv class=\"ml-2\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fswitch.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"switch\""+" ld=\"switch\""+pug_attr("data-name", name, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config-panel"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "階段設定\u003C\u002Fh4\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted text-sm mb-4\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "活動設定讓您針對不同時間設定不同的活動狀態。例如，您可以設定在活動發表的 60 天後才開放提案，同時設定 90 天後進入評審階段。\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs mb-4\" ld=\"periods\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\" ld-each=\"period\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item flex-grow-1\"\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item flex-grow-1 text-right\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link text-muted border-0\" data-type=\"new-period\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "新增 +\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"alert alert-light border\" ld=\"default-view\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "你可以為這個活動建立不同的階段，並為這些階段設定起迄時間；而當時間在任何階段以外的時候，活動將會套用此處的預設值。\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"custom-view\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mt-2 mb-3 pb-1\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "起始時段\u003C\u002Flabel\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"time\" type=\"date\" data-name=\"start\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "結束時段\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"time\" type=\"date\" data-name=\"end\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"row form\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config"]("活動公開", "一般人都可以看到這個活動");
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config"]("提案功能", "註冊使用者可以自由提案");
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config"]("評論功能", "註冊使用者可以針對不同提案進行評論");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config"]("修改提案", "提案人可以修改自己的提案");
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config"]("修改評論", "留言用戶可以修改自己的評論");
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_mixins["config"]("評審功能", "被標註為評審的使用者可以針對提案進行評論");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mt-4\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-danger\" ld=\"delete-period custom-view\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "刪除\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"custom-view\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text mr-2\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "階段名稱\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-0\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"period-name\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "不能用這個名稱\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary disabled\" ld=\"submit\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fconfig.pug";
pug_html = pug_html + "更新資料\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "config-panel");
};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["permission-panel"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "權限設定\u003C\u002Fh4\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted text-sm mb-4\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "權限設定讓您指派特定用戶來協助您管理維護您的組織、活動與用戶提案。我們已經預建了數種不同的角色，您可以依需求指派用戶到這些角色之中。\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs mb-4\" ld=\"roles\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link active\" ld=\"role-all\" data-type=\"all\" data-name=\"\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "清單\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\" ld-each=\"role\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item flex-grow-1\"\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item text-right\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link text-muted border-0\" ld=\"new-role\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "新增 +\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-2\" ld=\"role-view\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"role-name\" placeholder=\"角色名稱\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "不能用這個名稱\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"alert alert-light px-2 mb-4 border\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\" ld=\"role-desc-all\" data-name=\"\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "此列表列出所有出現在權限設定中的用戶，以及他們所擔任角色。\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv ld=\"roles-desc\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted d-none\" ld-each=\"role-desc\" contenteditable=\"true\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-3 px-3\" ld=\"newuser\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-inline-block clickable text-primary\" ld=\"newuser-toggle\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "新增使用者權限 ...\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"card shadow-sm mx-2 d-none\" ld=\"newuser\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-2\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control border-secondary border-right-0\" ld=\"newuser-name\" placeholder=\"搜尋使用者 ... \"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group-appned\" ld=\"newuser-role list-view\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary dropdown-toggle rounded-0\" ld=\"newuser-role-picked\" data-toggle=\"dropdown\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item\" ld-each=\"newuser-role-option\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group-append\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\" ld=\"newuser-add\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "增加\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"ml-4 mr-2 clickable\" ld=\"newuser-toggle\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-0\" ld=\"list-view\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"row no-gutters\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-6\" ld-each=\"user\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"border rounded d-flex p-2 m-2 align-items-center shadow-sm\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-2\" style=\"width:2.75em\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-dark rounded\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cb\u003E\u003C\u002Fb\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm text-muted\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"pr-2\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ci class=\"i-close clickable\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-0 d-none\" ld=\"role-view\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"row no-gutters\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-6\" ld-each=\"user\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"border rounded d-flex p-2 m-2 align-items-center shadow-sm\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-2\" style=\"width:2.25em\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-dark rounded\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cb\u003E\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"pr-2\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ci class=\"i-close clickable\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"mt-4 px-2\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Ch5\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "此名單的權限\u003C\u002Fh5\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("擁有者", "最高權限");
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("管理活動", "設定活動各種資訊");
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("管理權限", "可以修改權限列表");
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("管理提案", "可以編修、刪除、設定提案");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("建立提案", "可以建立新的提案");
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("建立留言", "可以新增或修改留言");
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("管理留言", "可以修改、刪除或設定留言");
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_mixins["config"]("評審", "可以進入評審介面");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-between\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-danger\" ld=\"role-view delete-role\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "刪除角色\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary disabled\" ld=\"submit\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Factivity\u002Fmixins\u002Fperm.pug";
pug_html = pug_html + "更新資料\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "permission-panel");
};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_mixins["brd-local-info"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm text-muted\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
if (opt.starttime) {
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.starttime) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
if (opt.endtime) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "~ ";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.endtime) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
if (!(opt.starttime && opt.endtime)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "時間未定\u003C\u002Fspan\u003E";
}
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
if (opt.location) {
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.location) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_mixins["brd-card-sm"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"class": "card shadow text-dark","href": "#","style": "text-decoration:none;width:250px"},attributes]), true)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"card-img-top bg-dark bg-cover bg-portrait\""+pug_attr("style", pug_style(`height:200px;background-image:url(/assets/uploads/board/${opt.slug}.png)`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Ch5 class=\"mb-0 text-truncate\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.name || '未命名的活動') ? "" : pug_interp)) + "\u003C\u002Fh5\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
if (opt.orgName) {
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm text-muted mb-2\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.orgName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";
pug_mixins["brd-local-info"](opt);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fbrd.pug";























;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-card"] = pug_interp = function(opt = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
if (opt.bare) {
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "mb-4"},attributes]), true)) + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-head"](opt);
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "card shadow-sm mb-4"},attributes]), true)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-2\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-head"](opt);
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-head"] = pug_interp = function(opt = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-2\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-0\" style=\"font-weight:500;font-size:1.25em\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.title || '問題的標題') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\" style=\"font-weight:200\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.description || '關於這個問題的一個簡短的描述') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-short-answer"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-card"].call({
block: function(){
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control rounded-0\" style=\"border-width:0 0 1px 0\" placeholder=\"請在這裡輸入...\"\u003E";
},
attributes: attributes
}, opt);
};
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-long-answer"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-card"].call({
block: function(){
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Ctextarea class=\"form-control\" rows=\"5\"\u003E\u003C\u002Ftextarea\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center mt-2\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center text-sm text-muted mr-4\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cinput class=\"mr-1\" type=\"checkbox\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "啟用 Markdown 語法 ( ";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "語法說明\u003C\u002Fa\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + " )\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center text-sm text-muted mr-4\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cinput class=\"mr-1\" type=\"checkbox\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "預覽\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-danger text-sm mt-2\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Ci class=\"i-close\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + " 輸入的內容不夠長 ( 應介於 200 ~ 500 字之間 )\u003C\u002Fdiv\u003E";
},
attributes: attributes
}, opt);
};
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-upload-file"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-card"].call({
block: function(){
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary btn-upload\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "上傳檔案 ...\u003C\u002Fspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cinput type=\"file\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
},
attributes: attributes
}, opt);
};
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";




































;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-radio"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_mixins["form-card"].call({
block: function(){
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
// iterate (opt.values || ["選項1","選項2","選項3"])
;(function(){
  var $$obj = (opt.values || ["選項1","選項2","選項3"]);
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var item = $$obj[pug_index12];
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center my-1\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"w-100 z-float\""+" type=\"radio\" style=\"height:1.5em;margin-top:-2px\""+pug_attr("name", opt.name, true, true)+pug_attr("value", item, true, true)) + "\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute\" style=\"margin-left:1.5em\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var item = $$obj[pug_index12];
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center my-1\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"w-100 z-float\""+" type=\"radio\" style=\"height:1.5em;margin-top:-2px\""+pug_attr("name", opt.name, true, true)+pug_attr("value", item, true, true)) + "\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute\" style=\"margin-left:1.5em\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

},
attributes: attributes
}, opt);
};
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fform.pug";





















;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Forg.pug";

















;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Forg.pug";

















;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fprj.pug";

































;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fprj.pug";

































;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fprj.pug";





;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fprj.pug";

































;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fprj.pug";

































;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fprj.pug";



















































































;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fuser.pug";







;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"sort-item d-flex align-items-center\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Ci class=\"i-bars mr-4\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"name flex-grow-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = opt.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Ci class=\"i-link ml-4\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Ci class=\"i-plus ml-4\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Ci class=\"i-close ml-4\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-panel"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + ".sort-item {\n  padding: 1em 2em;\n  margin: 1em 0;\n  border: 1px solid #ddd;\n  border-radius: 0.25em;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n.wrap .sort-host .sort-item {\n  margin: 0.5em 0 0.5em 2em;\n}\n.wrap .sort-host .i-plus {\n  display: none;\n}\n\u003C\u002Fstyle\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf d-none\" ld=\"tabbar-panel\" data-name=\"navbar\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "導覽列客製化\u003C\u002Fh4\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted text-sm\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "您可以在這裡調配您所需的導覽列元件\u003C\u002Fp\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"sort-host\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"].call({
block: function(){
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"]({name: "關於我們"});
}
}, {name: "活動辦法"});
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"wrap\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"]({name: "歷屆活動"});
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"sort-host\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"]({name: "2018 春季"});
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"]({name: "2018 秋季"});
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"]({name: "2019 春季"});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["sort-item"]({name: "成果報告"});
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "還原\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "儲存變更\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "activity-navbar");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_mixins["script"]("https://cdn.jsdelivr.net/npm/sortablejs@1.10.2/Sortable.min.js");
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fmixins\u002Fsort.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.0\nld$.find('.sort-host').map(function(it){\n  var sortable;\n  return sortable = new Sortable(it, {\n    group: 'name',\n    sort: true\n  });\n});\u003C\u002Fscript\u003E";
};
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 mx-auto d-flex\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-4 pb-4\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sticky\" style=\"top:55px\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["brd-card-sm"](board);
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted text-sm\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "這裡是您活動的管理後台。\u003C\u002Fp\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text btn-block\" href=\"\u002Forg\u002F\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "所屬組織\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text btn-block\" href=\"\u002Factivity\u002F\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "活動主頁\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text btn-block\" href=\"\u002Fdesign\u002Fb\u002Fprj-list.html\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "提案列表\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text btn-block\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "資訊分析\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text btn-block\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "製作複本\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text btn-block\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "客製頁面\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-4 pb-4 flex-grow-1\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar navbar-expand-lg navbar-light mb-4 border shadow-sm rounded sticky z-fixed bg-white\" style=\"top:55px\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"collapse navbar-collapse\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cul class=\"nav nav-pills mr-auto\" ld=\"tabbar\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link active\" ld=\"tabbar-tab default\" data-name=\"basic\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "基本資訊\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tabbar-tab\" data-name=\"config\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "階段\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tabbar-tab\" data-name=\"perm\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "權限\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tabbar-tab\" data-name=\"form\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "提案表\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tabbar-tab\" data-name=\"judge\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "資格\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tabbar-tab\" data-name=\"navbar\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "導覽\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cul class=\"navbar-nav ml-auto\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Forg\u002Fdashboard.html\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "組織設定\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf d-none\" ld=\"tabbar-panel\" data-name=\"config\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["config-panel"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf d-none\" ld=\"tabbar-panel\" data-name=\"perm\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["permission-panel"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf d-none\" ld=\"tabbar-panel\" data-name=\"form\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "提案表\u003C\u002Fh4\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-sm text-muted\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "您可以在這裡設定提案 \u002F 報名時，提案人所需要提交的表格。\u003C\u002Fp\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Chr class=\"my-4\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
// iterate data.schema
;(function(){
  var $$obj = data.schema;
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var item = $$obj[pug_index14];
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
if (item.type == "short-answer") {
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-short-answer"](item);
}
else
if (item.type == "long-answer") {
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-long-answer"].call({
attributes: {"class": "ok"}
}, item);
}
else
if (item.type == "radio") {
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-radio"](item);
}
else
if (item.type == "upload-file") {
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-upload-file"](item);
}
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var item = $$obj[pug_index14];
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
if (item.type == "short-answer") {
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-short-answer"](item);
}
else
if (item.type == "long-answer") {
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-long-answer"].call({
attributes: {"class": "ok"}
}, item);
}
else
if (item.type == "radio") {
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-radio"](item);
}
else
if (item.type == "upload-file") {
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["form-upload-file"](item);
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ml-4\"\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sticky\" style=\"top:150px\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group shadow-sm mb-4\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item clickable text-nowrap\" ld=\"blocksrc\" draggable=\"true\" data-name=\"short-answer\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + " 短答\u003C\u002Fdiv\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item clickable\" ld=\"blocksrc\" draggable=\"true\" data-name=\"long-answer\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + " 申論\u003C\u002Fdiv\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item clickable\" ld=\"blocksrc\" draggable=\"true\" data-name=\"linear-scale\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + " 給分\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item clickable\" ld=\"blocksrc\" draggable=\"true\" data-name=\"checkbox\"\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + " 單選\u003C\u002Fdiv\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item clickable\" ld=\"blocksrc\" draggable=\"true\" data-name=\"radio\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + " 多選\u003C\u002Fdiv\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list-group-item clickable\" ld=\"blocksrc\" draggable=\"true\" data-name=\"file\"\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + " 傳檔\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary btn-block\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "更新資料\u003C\u002Fdiv\u003E";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary btn-block\"\u003E";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "捨棄變更\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "activity-form");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf\" ld=\"tabbar-panel default\" data-name=\"basic\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "基本資訊\u003C\u002Fh4\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-sm text-muted\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "您可以在這裡為設定整個活動的通用資訊，例如名稱、簡介、主視覺、活動時間等等。\u003C\u002Fp\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Chr class=\"my-4\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-center mb-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "活動名稱\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-0 ld-ext-right\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-spin ld-spinner text-primary\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control border-bottom rounded-0\" name=\"name\" style=\"border:0\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback position-absolute\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "活動必須要有名字\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-center mb-4\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "活動代碼\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted text-sm\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "用於網址的短代碼\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-0 ld-ext-right\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-spin ld-spinner text-primary\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control border-bottom rounded-0\" name=\"slug\" placeholder=\"僅接受英文字母、數字或連字符號\" style=\"border:0\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback position-absolute\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "已經有其它活動使用這個代碼了，請換一個\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-start mb-4\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "活動摘要\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Ctextarea class=\"form-control\" name=\"description\" rows=\"4\" placeholder=\"20個字以上\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-center mb-4\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "開始時間\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control border-bottom rounded-0\" type=\"text\" name=\"starttime\" style=\"border:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-center mb-4\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "結束時間\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control border-bottom rounded-0\" type=\"text\" name=\"endtime\" style=\"border:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-start mb-4\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "活動主圖\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-2by1 bg-secondary rounded overflow-hidden\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center bg-semi-dark bg bg-cover bg-portrait\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 text-center btn-upload\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cinput name=\"thumbnail\" type=\"file\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-light btn-upload\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "上傳 ";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cinput name=\"thumbnail\" type=\"file\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"row align-items-center mb-4\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3 text-right\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "所屬組織\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control\" name=\"org\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Coption value=\"\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "無\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_mixins["script"]("https://cdn.jsdelivr.net/npm/tail.datetime@0.4.13/js/tail.datetime-full.min.js");
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Fbasic.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.0\nvar slugs, that, form, ref$, ldld, view;\nslugs = {};\ntail.DateTime(\"input[name=starttime]\");\ntail.DateTime(\"input[name=endtime]\");\nif (that = ld$.find(\"[ld-scope='brd-basic'] .bg\", 0)) {\n  that.style.backgroundImage = \"url(\u002Fassets\u002Fuploads\u002Fboard\u002F\" + board.slug + \".png)\";\n}\nform = new ldForm({\n  values: {\n    slug: (ref$ = typeof board != 'undefined' && board !== null\n      ? board\n      : {}).slug,\n    name: ref$.name,\n    description: ref$.description,\n    starttime: ref$.starttime,\n    endtime: ref$.endtime\n  },\n  root: \"[ld-scope='brd-basic']\",\n  submit: \"[ld='submit']\",\n  afterCheck: function(s, f){\n    var p;\n    if (f.thumbnail.value) {\n      if (!(p = ld$.parent(f.thumbnail, '.bg'))) {\n        return;\n      }\n      ldFile.fromFile(f.thumbnail.files[0], 'dataurl').then(function(r){\n        return p.style.backgroundImage = \"url(\" + r.result + \")\";\n      });\n    }\n    return s.all = ['name', 'slug', 'description'].reduce(function(a, b){\n      return a && s[b] === 0;\n    }, true) ? 0 : 2;\n  },\n  verify: function(n, v, e){\n    var p;\n    if (in$(n, ['slug'])) {\n      if (slugs[v] != null) {\n        return slugs[v] ? 2 : 0;\n      }\n      p = ld$.parent(this.fields[n], '.form-group');\n      p.classList.add('running');\n      ld$.fetch('\u002Fd\u002Fboard\u002Fslug-check', {\n        method: 'POST'\n      }, {\n        json: {\n          slug: v\n        },\n        type: 'json'\n      })['finally'](function(){\n        return debounce(1000).then(function(){\n          return p.classList.remove('running');\n        });\n      }).then(function(r){\n        r == null && (r = {});\n        return slugs[v] = r.result === 'free' ? false : true;\n      })['catch'](function(){\n        return slugs[v] = true;\n      }).then(function(){\n        return form.check({\n          n: 'slug'\n        });\n      });\n      return 1;\n    }\n    return !!v ? 0 : 2;\n  }\n});\nldld = new ldLoader({\n  root: document.body\n});\nview = new ldView({\n  root: \"[ld-scope='brd-basic']\",\n  action: {\n    click: {\n      submit: function(arg$){\n        var node, fd;\n        node = arg$.node;\n        ldld.on();\n        fd = form.getfd();\n        return ld$.fetch('\u002Fd\u002Fboard\u002F', {\n          method: 'POST',\n          body: fd\n        }, {\n          type: 'json'\n        }).then(function(r){})['catch'](function(){\n          return debounce(1000).then(function(){\n            return ldld.off();\n          });\n        });\n      }\n    }\n  }\n});\nfunction in$(x, xs){\n  var i = -1, l = xs.length \u003E\u003E\u003E 0;\n  while (++i \u003C l) if (x === xs[i]) return true;\n  return false;\n}\u003C\u002Fscript\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Chr class=\"my-4\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary disabled\" ld=\"submit\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "更新資料\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "brd-basic");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf d-none\" ld=\"tabbar-panel\" data-name=\"judge\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "資格審核\u003C\u002Fh4\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted text-sm\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "編輯提案所需具備的資格清單與細節。此列表將運用在評選時的資格審核表中。\u003C\u002Fp\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs mb-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link active\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "開源\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "協作\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "重用\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item flex-grow-1\"\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "新增 ";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Ci class=\"i-plus\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "條件名稱\u003C\u002Flabel\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control border-bottom rounded-0\" style=\"border-width:0\" placeholder=\"條件名稱\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "詳細說明\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Ctextarea class=\"form-control\" placeholder=\"詳細說明 ...\" rows=\"5\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-danger mr-2\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "刪除\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "捨棄\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fdesign\u002Fb\u002Fjudge\u002Fcriteria-form.pug";
pug_html = pug_html + "儲存變更\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "activity-judge");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["sort-panel"]();
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm ld ld-float-btt-in xhalf d-none\" ld=\"tabbar-panel\" data-name=\"analysis\"\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "視覺統計 \u003C\u002Fh4\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-sm text-muted\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "透過圖表與數據概略的了解目前活動進展、完成度與用戶參與的情形。\u003C\u002Fp\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Chr class=\"my-4\"\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100 mb-4\"\u003E";
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control mr-2\" type=\"date\"\u003E";
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" type=\"date\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cimg class=\"w-100\" src=\"\u002Fassets\u002Fimg\u002Fc\u002Fchart\u002Fline.svg\"\u003E";
}
}, "activity-analysis");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-fixed alert alert-warning z-fixed text-sm shadow-sm\" style=\"bottom:1em;left:1em;border-color:#c90\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "您有尚未儲存的變更。";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "點我儲存\u003C\u002Fa\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "，或者 ";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "捨棄變更\u003C\u002Fa\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_html = pug_html + "。\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-2 py-0 bg-dark shadow-sm border\" onclick=\"lda.ldcvmgr.toggle('dev-note')\" style=\"position:fixed;bottom:0;right:10px;border-radius:5px 5px 0 0\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Ca class=\"text-light\" href=\"#\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "Dev Note\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
if (ctrl.cover.authpanel) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fldui.pug";
if(!ctrl) var ctrl = {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Fchevron-down.pug";





;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Fspinner.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";









;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.url[url] = true;
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";










;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";













;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";















































;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["ldPaletteEditor"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldp\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"colors\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldColorPicker no-border no-palette\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mb-2\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control form-control-local-sm\" value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "RGB\u003C\u002Foption\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hsl\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HSL\u003C\u002Foption\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hcl\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HCL\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 pl-0\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-local-sm value\" placeholder=\"Hex Value\" data-tag=\"hex\" style=\"margin:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var configs = [["Red", "Green", "Blue", "rgb", "active"], ["Hue", "Saturation", "Luminance", "hsl",""], ["Hue", "Chroma", "Luminance", "hcl",""]];
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
// iterate configs
;(function(){
  var $$obj = configs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var config = $$obj[pug_index17];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var config = $$obj[pug_index17];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





























































































































;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var anikit = {"groupName":["No Animation","Popular Animation","Repeat Animation","Transition"],"members":[[["static","static"]],[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]],"group":{"static":[["static","static"]],"popular":[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],"repeat":[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],"transition":[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]}};
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";























































































;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";














































;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var prentName = prefix.currentName;
;pug_debug_line = 120;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix.currentName = name;
;pug_debug_line = 121;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
if (attributes.class && /naked-scope/.exec(attributes.class)) {
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
block && block();
}
else {
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix.currentName = parentName;
};
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fstatic\u002Fassets\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_mixins["authpanel"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card p-0 border-0 authpanel signup\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"closebtn\" data-ldcv-set=\"\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center p-4 info position-absolute h-100 w-50 text-light\" style=\"background:url(\u002Fassets\u002Fimg\u002Fdev\u002Flanding.jpg) center center no-repeat;background-size:cover;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute w-100 h-100 bg-semi-dark\" style=\"top:0;left:0\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-left position-relative z-float text-shadow\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" data-info=\"failed\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ch2 class=\"mb-4 font-weight-bold\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "登入失敗。\u003C\u002Fh2\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "您之前可能用的是別組帳號或密碼，或者使用不同的登入方式。您可以試著：\u003C\u002Fp\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "換一組帳號、密碼或登入方式\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "確認您的 email 或密碼沒有打錯\u003C\u002Fli\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fauth\u002Freset\u002F\" style=\"color:#0ff\" target=\"_blank\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "重設密碼\u003C\u002Fa\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"#\" onclick=\"lda.ldcvmgr.toggle('contact');\" style=\"color:#0ff\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "與我們聯絡\u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv data-info=\"default\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
if (block) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
block && block();
}
else {
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ch3 class=\"mb-4 font-weight-bold\" style=\"line-height:1em\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "登入您的";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "Battle Dash 帳號\u003C\u002Fh3\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp class=\"text-sm\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "公民科技獎助金提案系統由 Battle Dash 提供。登入 Battle Dash 以建立提案。\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form bg-white w-50 h-100 d-flex flex-column\" style=\"margin-left:50%\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs pt-2 bg-light\" onclick=\"this.parentNode.classList.toggle('login');this.parentNode.classList.toggle('signup')\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item ml-2\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" data-action=\"signup\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "註冊\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" data-action=\"login\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "登入  \u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-3 pb-4 pt-3 text-left d-flex flex-column h-100\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "電子郵件\u003C\u002Flabel\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-sm\" name=\"email\" placeholder=\"電子郵件即您的帳號名稱\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "無效的電子郵件\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\" data-show=\"signup\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "顯示名稱\u003C\u002Flabel\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-sm\" name=\"displayname\" placeholder=\"例如：王小明\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "不能留白\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "密碼\u003C\u002Flabel\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-sm\" name=\"passwd\" placeholder=\"密碼，至少八個字元\" type=\"password\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "不合格的密碼\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center form-text text-muted small\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "登入即表示您同意我們的 ";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Ftos\u002F\" target=\"_blank\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "用戶條款\u003C\u002Fa\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + " 與 ";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fprivacy\u002F\" target=\"_blank\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "隱私權政策\u003C\u002Fa\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-success btn-block disabled ld-ext-right\" data-action=\"submit\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cspan data-show=\"login\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "登入\u003C\u002Fspan\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cspan data-show=\"signup\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "註冊\u003C\u002Fspan\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ldld bare em-1\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-between mt-1\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"small\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-check\" data-show=\"signup\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-check-input\" name=\"newsletter\" type=\"checkbox\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "訂閱電子報\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"small\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fauth\u002Freset\u002F\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "忘記密碼？»\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-text my-4\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cspan class=\"text-sm\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "或者用下列登入\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary btn-block btn-sm\" onclick=\"lda.auth.fb()\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ci class=\"i-fb\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + " Facebook\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark btn-block btn-sm\" onclick=\"lda.auth.google()\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ci class=\"i-google\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fauthpanel.pug";
pug_html = pug_html + " Google\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv ldcvmgr\" data-name=\"authpanel\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"base\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Fauthpanel.pug";
pug_mixins["authpanel"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
if (ctrl.foot.shown) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"foot p-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto m-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-5\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-bottom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "Battle Dash\u003C\u002Fh2\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-light w-100 ml-0 my-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-2\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-bottom\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ch5\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "關於我們\u003C\u002Fh5\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-light w-100 ml-0 my-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-2\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-bottom\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ch5\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "相關服務\u003C\u002Fh5\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-light w-100 ml-0 my-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-2\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-bottom\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ch5\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "認識 g0v \u003C\u002Fh5\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-light w-100 ml-0 my-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-5\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cp class=\"semi-opaque\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "Battle Dash 協助你迅速建立活動網站，從簡章、提案到評審，一手包辦！\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-2\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "執行團隊\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "合作洽詢\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "常見問題\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "隱私權政策\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "使用條款\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-2\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "建立組織\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "建立活動\u003C\u002Fdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "提案系統源碼\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "問題回報\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-2\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "零時政府宣言\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "臉書後勤中心\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "g0v Slack\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg my-2\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ci class=\"i-fb mr-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ci class=\"i-twt mx-2\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fmodules\u002Ffoot.pug";
pug_html = pug_html + "\u003Ci class=\"i-link mx-2\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/js/pack/vendor.min.js");
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/flatpickr/flatpickr.min.js");
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/xfl/xfl.js");
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/js/pack/core.min.js");
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fbattledash\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 114;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["script"]("/js/edit.js");
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["script"]("/js/modules/board/index.js");
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["script"]("/assets/lib/ctrlz/ctrlz.bundle.min.js");
;pug_debug_line = 117;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["script"]("/js/activity/config.js");
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["script"]("/js/activity/perm.js");
;pug_debug_line = 119;pug_debug_filename = "src\u002Fpug\u002Fb\u002Fdashboard\u002Findex.pug";
pug_mixins["script"]("/js/activity/tabbar.js");
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"board" in locals_for_with?locals_for_with.board:typeof board!=="undefined"?board:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"parentName" in locals_for_with?locals_for_with.parentName:typeof parentName!=="undefined"?parentName:undefined,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 