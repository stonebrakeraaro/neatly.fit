!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){t.exports=l,l.Minimatch=f;var r={sep:"/"};try{r=n(1)}catch(t){}var i=l.GLOBSTAR=f.GLOBSTAR={},o=n(3),s={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},a="().*{}+?[]^$\\!".split("").reduce((function(t,e){return t[e]=!0,t}),{});var c=/\/+/;function u(t,e){t=t||{},e=e||{};var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function l(t,e,n){if("string"!=typeof e)throw new TypeError("glob pattern string required");return n||(n={}),!(!n.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new f(e,n).match(t))}function f(t,e){if(!(this instanceof f))return new f(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==r.sep&&(t=t.split(r.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function h(t,e){if(e||(e=this instanceof f?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:o(t)}l.filter=function(t,e){return e=e||{},function(n,r,i){return l(n,t,e)}},l.defaults=function(t){if(!t||!Object.keys(t).length)return l;var e=l,n=function(n,r,i){return e.minimatch(n,r,u(t,i))};return n.Minimatch=function(n,r){return new e.Minimatch(n,u(t,r))},n},f.defaults=function(t){return t&&Object.keys(t).length?l.defaults(t).Minimatch:f},f.prototype.debug=function(){},f.prototype.make=function(){if(this._made)return;var t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();var n=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error);this.debug(this.pattern,n),n=this.globParts=n.map((function(t){return t.split(c)})),this.debug(this.pattern,n),n=n.map((function(t,e,n){return t.map(this.parse,this)}),this),this.debug(this.pattern,n),n=n.filter((function(t){return-1===t.indexOf(!1)})),this.debug(this.pattern,n),this.set=n},f.prototype.parseNegate=function(){var t=this.pattern,e=!1,n=this.options,r=0;if(n.nonegate)return;for(var i=0,o=t.length;i<o&&"!"===t.charAt(i);i++)e=!e,r++;r&&(this.pattern=t.substr(r));this.negate=e},l.braceExpand=function(t,e){return h(t,e)},f.prototype.braceExpand=h,f.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var n=this.options;if(!n.noglobstar&&"**"===t)return i;if(""===t)return"";var r,o="",c=!!n.nocase,u=!1,l=[],f=[],h=!1,g=-1,d=-1,m="."===t.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",y=this;function v(){if(r){switch(r){case"*":o+="[^/]*?",c=!0;break;case"?":o+="[^/]",c=!0;break;default:o+="\\"+r}y.debug("clearStateChar %j %j",r,o),r=!1}}for(var b,_=0,w=t.length;_<w&&(b=t.charAt(_));_++)if(this.debug("%s\t%s %s %j",t,_,o,b),u&&a[b])o+="\\"+b,u=!1;else switch(b){case"/":return!1;case"\\":v(),u=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,_,o,b),h){this.debug("  in class"),"!"===b&&_===d+1&&(b="^"),o+=b;continue}y.debug("call clearStateChar %j",r),v(),r=b,n.noext&&v();continue;case"(":if(h){o+="(";continue}if(!r){o+="\\(";continue}l.push({type:r,start:_-1,reStart:o.length,open:s[r].open,close:s[r].close}),o+="!"===r?"(?:(?!(?:":"(?:",this.debug("plType %j %j",r,o),r=!1;continue;case")":if(h||!l.length){o+="\\)";continue}v(),c=!0;var j=l.pop();o+=j.close,"!"===j.type&&f.push(j),j.reEnd=o.length;continue;case"|":if(h||!l.length||u){o+="\\|",u=!1;continue}v(),o+="|";continue;case"[":if(v(),h){o+="\\"+b;continue}h=!0,d=_,g=o.length,o+=b;continue;case"]":if(_===d+1||!h){o+="\\"+b,u=!1;continue}if(h){var A=t.substring(d+1,_);try{RegExp("["+A+"]")}catch(t){var E=this.parse(A,p);o=o.substr(0,g)+"\\["+E[0]+"\\]",c=c||E[1],h=!1;continue}}c=!0,h=!1,o+=b;continue;default:v(),u?u=!1:!a[b]||"^"===b&&h||(o+="\\"),o+=b}h&&(A=t.substr(d+1),E=this.parse(A,p),o=o.substr(0,g)+"\\["+E[0],c=c||E[1]);for(j=l.pop();j;j=l.pop()){var x=o.slice(j.reStart+j.open.length);this.debug("setting tail",o,j),x=x.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,n){return n||(n="\\"),e+e+n+"|"})),this.debug("tail=%j\n   %s",x,x,j,o);var O="*"===j.type?"[^/]*?":"?"===j.type?"[^/]":"\\"+j.type;c=!0,o=o.slice(0,j.reStart)+O+"\\("+x}v(),u&&(o+="\\\\");var T=!1;switch(o.charAt(0)){case".":case"[":case"(":T=!0}for(var k=f.length-1;k>-1;k--){var S=f[k],M=o.slice(0,S.reStart),L=o.slice(S.reStart,S.reEnd-8),R=o.slice(S.reEnd-8,S.reEnd),C=o.slice(S.reEnd);R+=C;var $=M.split("(").length-1,q=C;for(_=0;_<$;_++)q=q.replace(/\)[+*?]?/,"");var P="";""===(C=q)&&e!==p&&(P="$"),o=M+L+C+P+R}""!==o&&c&&(o="(?=.)"+o);T&&(o=m+o);if(e===p)return[o,c];if(!c)return function(t){return t.replace(/\\(.)/g,"$1")}(t);var N=n.nocase?"i":"";try{var I=new RegExp("^"+o+"$",N)}catch(t){return new RegExp("$.")}return I._glob=t,I._src=o,I};var p={};l.makeRe=function(t,e){return new f(t,e||{}).makeRe()},f.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,n=e.noglobstar?"[^/]*?":e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",r=e.nocase?"i":"",o=t.map((function(t){return t.map((function(t){return t===i?n:"string"==typeof t?function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}(t):t._src})).join("\\/")})).join("|");o="^(?:"+o+")$",this.negate&&(o="^(?!"+o+").*$");try{this.regexp=new RegExp(o,r)}catch(t){this.regexp=!1}return this.regexp},l.match=function(t,e,n){var r=new f(e,n=n||{});return t=t.filter((function(t){return r.match(t)})),r.options.nonull&&!t.length&&t.push(e),t},f.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var n=this.options;"/"!==r.sep&&(t=t.split(r.sep).join("/"));t=t.split(c),this.debug(this.pattern,"split",t);var i,o,s=this.set;for(this.debug(this.pattern,"set",s),o=t.length-1;o>=0&&!(i=t[o]);o--);for(o=0;o<s.length;o++){var a=s[o],u=t;if(n.matchBase&&1===a.length&&(u=[i]),this.matchOne(u,a,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate},f.prototype.matchOne=function(t,e,n){var r=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var o=0,s=0,a=t.length,c=e.length;o<a&&s<c;o++,s++){this.debug("matchOne loop");var u,l=e[s],f=t[o];if(this.debug(e,l,f),!1===l)return!1;if(l===i){this.debug("GLOBSTAR",[e,l,f]);var h=o,p=s+1;if(p===c){for(this.debug("** at the end");o<a;o++)if("."===t[o]||".."===t[o]||!r.dot&&"."===t[o].charAt(0))return!1;return!0}for(;h<a;){var g=t[h];if(this.debug("\nglobstar while",t,h,e,p,g),this.matchOne(t.slice(h),e.slice(p),n))return this.debug("globstar found match!",h,a,g),!0;if("."===g||".."===g||!r.dot&&"."===g.charAt(0)){this.debug("dot detected!",t,h,e,p);break}this.debug("globstar swallow a segment, and continue"),h++}return!(!n||(this.debug("\n>>> no match, partial?",t,h,e,p),h!==a))}if("string"==typeof l?(u=r.nocase?f.toLowerCase()===l.toLowerCase():f===l,this.debug("string match",l,f,u)):(u=f.match(l),this.debug("pattern match",l,f,u)),!u)return!1}if(o===a&&s===c)return!0;if(o===a)return n;if(s===c)return o===a-1&&""===t[o];throw new Error("wtf?")}},function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,i="/"===s.charAt(0))}return(i?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!i).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),s="/"===i(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&s&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(2))},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],l=!1,f=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var t=a(h);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new g(t,e)),1!==u.length||l||a(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){var r=n(4),i=n(5);t.exports=function(t){if(!t)return[];"{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2));return function t(e,n){var o=[],s=i("{","}",e);if(!s||/\$$/.test(s.pre))return[e];var c,u=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),f=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),m=u||f,y=s.body.indexOf(",")>=0;if(!m&&!y)return s.post.match(/,.*\}/)?(e=s.pre+"{"+s.body+a+s.post,t(e)):[e];if(m)c=s.body.split(/\.\./);else{if(1===(c=function t(e){if(!e)return[""];var n=[],r=i("{","}",e);if(!r)return e.split(",");var o=r.pre,s=r.body,a=r.post,c=o.split(",");c[c.length-1]+="{"+s+"}";var u=t(a);a.length&&(c[c.length-1]+=u.shift(),c.push.apply(c,u));return n.push.apply(n,c),n}(s.body)).length)if(1===(c=t(c[0],!1).map(h)).length)return(_=s.post.length?t(s.post,!1):[""]).map((function(t){return s.pre+c[0]+t}))}var v,b=s.pre,_=s.post.length?t(s.post,!1):[""];if(m){var w=l(c[0]),j=l(c[1]),A=Math.max(c[0].length,c[1].length),E=3==c.length?Math.abs(l(c[2])):1,x=g;j<w&&(E*=-1,x=d);var O=c.some(p);v=[];for(var T=w;x(T,j);T+=E){var k;if(f)"\\"===(k=String.fromCharCode(T))&&(k="");else if(k=String(T),O){var S=A-k.length;if(S>0){var M=new Array(S+1).join("0");k=T<0?"-"+M+k.slice(1):M+k}}v.push(k)}}else v=r(c,(function(e){return t(e,!1)}));for(var L=0;L<v.length;L++)for(var R=0;R<_.length;R++){var C=b+v[L]+_[R];(!n||m||C)&&o.push(C)}return o}(function(t){return t.split("\\\\").join(o).split("\\{").join(s).split("\\}").join(a).split("\\,").join(c).split("\\.").join(u)}(t),!0).map(f)};var o="\0SLASH"+Math.random()+"\0",s="\0OPEN"+Math.random()+"\0",a="\0CLOSE"+Math.random()+"\0",c="\0COMMA"+Math.random()+"\0",u="\0PERIOD"+Math.random()+"\0";function l(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function f(t){return t.split(o).join("\\").split(s).join("{").split(a).join("}").split(c).join(",").split(u).join(".")}function h(t){return"{"+t+"}"}function p(t){return/^-?0\d/.test(t)}function g(t,e){return t<=e}function d(t,e){return t>=e}},function(t,e){t.exports=function(t,e){for(var r=[],i=0;i<t.length;i++){var o=e(t[i],i);n(o)?r.push.apply(r,o):r.push(o)}return r};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";function r(t,e,n){t instanceof RegExp&&(t=i(t,n)),e instanceof RegExp&&(e=i(e,n));var r=o(t,e,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+t.length,r[1]),post:n.slice(r[1]+e.length)}}function i(t,e){var n=e.match(t);return n?n[0]:null}function o(t,e,n){var r,i,o,s,a,c=n.indexOf(t),u=n.indexOf(e,c+1),l=c;if(c>=0&&u>0){for(r=[],o=n.length;l>=0&&!a;)l==c?(r.push(l),c=n.indexOf(t,l+1)):1==r.length?a=[r.pop(),u]:((i=r.pop())<o&&(o=i,s=u),u=n.indexOf(e,l+1)),l=c<u&&c>=0?c:u;r.length&&(a=[o,s])}return a}t.exports=r,r.range=o},function(t,e,n){"use strict";n.r(e);var r=function(t){return"function"==typeof t},i=function(t){return r(t)||t&&"[object function]"==={}.toString.call(t)},o=function(t){return Array.isArray(t)},s=function(t){return arguments.length&&(void 0===t||void 0===t)},a=function(t){return!function(t){return t instanceof String||"string"==typeof t&&null!==t}(t)&&!s(t.length)},c=function(t){return function(t){return null===t||""===t}(t)||s(t)||!1===t||0===t||function(t){return Array.isArray(t)||"object"==typeof t&&t||r(t)}(t)&&!Object.keys(t).length},u=function(t){return!Array.isArray(t)&&"object"==typeof t&&t};class l{constructor(t,e){this.path=o(t)?t:(t+"").split("/").filter(t=>t),this.params=e}async route(t,e,n){e=function(t,e=!0){return o(t)?t:!e&&u(t)?[t]:!1!==t&&0!==t&&c(t)?[]:a(t)?Array.prototype.slice.call(t):u(t)?Object.values(t):[t]}(e);var r=this.path,s=this.params.ROUTES;const l=async function(o,a){var c;if(0===o)c=s["/"];else if(r[o-1]){var u="/"+r.slice(0,o).join("/"),f=r.slice(0,o-1).concat("_").join("/");c=s[u]||s[f]}if(c){var h=i(c)&&e.includes("default")?c:e.reduce((t,e)=>t||c[e],null);if(h){var p=(...t)=>l(o+1,...t);p.pathname=r.slice(o).join("/");var g={};return g.pathname="/"+r.slice(0,o).join("/"),await h.bind(g)(...t.concat([a,p]))}}return n?await(2===arguments.length?n(a):n()):a};return l(0)}}var f=n(0),h=n.n(f),p=function(t,e,n=!1){if(""==e)return t;var r=n?t.lastIndexOf(e):t.indexOf(e);return-1===r?"":t.substr(r+e.length)};const g=(t,e)=>"/"+p(p(t.url,"//"),"/")===e;(function(t){t={...t},self.addEventListener("install",e=>{t.skip_waiting&&self.skipWaiting(),t.cache_name&&"static"===t.caching_strategy&&t.caching_list&&e.waitUntil(self.caches.open(t.cache_name).then(e=>(t.lifecycle_logs&&console.log("[ServiceWorker] Pre-caching resources."),e.addAll(t.caching_list))))}),self.addEventListener("activate",e=>{e.waitUntil(new Promise(async e=>{t.skip_waiting&&await self.clients.claim(),t.cache_name&&await self.caches.keys().then(e=>Promise.all(e.map(e=>{if(e!==t.cache_name&&e!==t.cache_name+"_json")return t.lifecycle_logs&&console.log("[ServiceWorker] Removing old cache:",e),self.caches.delete(e)}))),e()}))}),self.addEventListener("fetch",async t=>{t.respondWith(e(t))});const e=async e=>{const n=new l(e.request.url,t),o={params:t,request:e.request,scope:e};return await n.route([o],"default",(async function(n){if(arguments.length)return n;switch(t.fetching_strategy){case"cache_first":return r(e);case"network_first":default:return i(e)}}))},n=e=>"application/json"===e.headers.get("Accept")?t.cache_name+"_json":t.cache_name,r=t=>self.caches.open(n(t.request)).then(e=>e.match(t.request).then(e=>e||self.fetch(t.request).then(e=>o(t.request,e)))),i=t=>self.fetch(t.request).then(e=>o(t.request,e)).catch(()=>self.caches.open(n(t.request)).then(e=>e.match(t.request))),o=(e,r)=>{if("static"===t.caching_strategy||!r||200!==r.status||"basic"!==r.type||(t.caching_list||[]).filter(t=>t.trim()).length&&!t.caching_list.reduce((t,n)=>t||h()(e.url,n,{dot:!0}),!1))return r;var i=r.clone();return self.caches.open(n(e)).then(n=>{t.lifecycle_logs&&console.log("[ServiceWorker] Caching new resource:",e.url),n.put(e,i)}),r};t.support_messaging&&self.addEventListener("message",e=>{var n="/";t.message_routing_url_property&&e.data[t.message_routing_url_property]&&(n=e.data[t.message_routing_url_property]);const r=new l(n,t),i={params:t,evt:e,scope:self};e.waitUntil(r.route([i],"message",(async function(t){return arguments.length?t:e.data.json()})).then(n=>{if(n&&t.message_relay_flag_property&&n[t.message_relay_flag_property])return self.clients.matchAll().then(t=>{t.forEach(t=>{t.id!==e.source.id&&t.postMessage({isMessageRelay:!0,sourceId:e.source.id,message:n})})})}))}),t.support_notification&&(self.addEventListener("push",e=>{var n="/";t.notification_routing_url_property&&e.data[t.notification_routing_url_property]&&(n=e.data[t.notification_routing_url_property]);const r=new l(n,t),i={params:t,evt:e,scope:self};e.waitUntil(r.route([i],"notice",(async function(t){if(arguments.length)return t;try{return e.data.json()}catch(t){return e.data.text()}})).then(e=>{if(e)return self.registration.showNotification(t.NOTIFICATION_TITLE||"",e)}))}),self.addEventListener("notificationclick",e=>{var n="/";t.notification_target_url_property&&e.notification[t.notification_target_url_property]&&(n=e.notification[t.notification_target_url_property]);const r=new l(n,t),i={params:t,evt:e,scope:self};e.waitUntil(r.route([i],"target",(async function(t){return arguments.length?t:self.clients.matchAll().then(t=>t.reduce((t,e)=>t||g(e,n)?e:null,null))})).then(t=>t?t.focus():self.clients.openWindow(n)).then(t=>t.postMessage({isNotificationTargetEvent:!0,notification:e.notification.data})))}),self.addEventListener("notificationclose",e=>{var n="/";t.notification_target_url_property&&e.notification[t.notification_target_url_property]&&(n=e.notification[t.notification_target_url_property]);const r=new l(n,t),i={params:t,evt:e,scope:self};e.waitUntil(r.route([i],"untarget",(async function(t){return arguments.length?t:self.clients.matchAll().then(t=>t.reduce((t,e)=>t||g(e,n)?e:null,null))})).then(t=>{if(t)return t.postMessage({isNotificationUntargetEvent:!0,notification:e.notification.data})}))}))}).call(null,{lifecycle_logs:!0,scope:"/",cache_name:"cache_v0",fetching_strategy:"cache_first",caching_strategy:"dynamic",caching_list:"",skip_waiting:!1,support_messaging:!0,message_routing_url_property:"",message_relay_flag_property:"",support_notification:!1,push_registration_url:"",push_deregistration_url:"",push_public_key:"",notification_routing_url_property:"",notification_target_url_property:"",ROUTES:{}})}]);