webpackJsonp([2],[,,,,,,,,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(82),o=r(83),i=r(0),s=i(n.a,o.a,null,null,null);e.default=s.exports},,function(t,e,r){"use strict";function n(t){return"[object Array]"===T.call(t)}function o(t){return"[object ArrayBuffer]"===T.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===T.call(t)}function p(t){return"[object File]"===T.call(t)}function d(t){return"[object Blob]"===T.call(t)}function h(t){return"[object Function]"===T.call(t)}function v(t){return f(t)&&h(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function _(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=_(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)w(arguments[r],t);return e}function C(t,e,r){return w(e,function(e,n){t[n]=r&&"function"==typeof e?b(e,r):e}),t}var b=r(14),x=r(23),T=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isBuffer:x,isFormData:i,isArrayBufferView:s,isString:a,isNumber:c,isObject:f,isUndefined:u,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:v,isURLSearchParams:m,isStandardBrowserEnv:y,forEach:w,merge:_,extend:C,trim:g}},function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(12),i=r(26),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(15):void 0!==e&&(t=r(15)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,r(25))},function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";var n=r(12),o=r(27),i=r(29),s=r(30),a=r(31),c=r(16),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(32);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var m=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+u(m+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=r(33),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&n.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(t,e,r){"use strict";var n=r(28);t.exports=function(t,e,r,o,i){var s=new Error(t);return n(s,e,r,o,i)}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,r){t.exports=r(22)},function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n="https://raw.githubusercontent.com/liquidnuker/rvr2/master/src/js/ajax/"},function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=["horntype","crystal","transistor","minitube","woodcase","bakelite","portable","unusual"]},function(t,e,r){"use strict";function n(t){var e=new s(t),r=i(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(12),i=r(14),s=r(24),a=r(13),c=n(a);c.Axios=s,c.create=function(t){return n(o.merge(a,t))},c.Cancel=r(18),c.CancelToken=r(39),c.isCancel=r(17),c.all=function(t){return Promise.all(t)},c.spread=r(40),t.exports=c,t.exports.default=c},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(13),i=r(12),s=r(34),a=r(35),c=r(37),u=r(38);n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){v&&d&&(v=!1,d.length?h=d.concat(h):m=-1,h.length&&a())}function a(){if(!v){var t=o(s);v=!0;for(var e=h.length;e;){for(d=h,h=[];++m<e;)d&&d[m].run();m=-1,e=h.length}d=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var d,h=[],v=!1,m=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new c(t,e)),1!==h.length||v||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(12);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},function(t,e,r){"use strict";var n=r(16);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(12);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},function(t,e,r){"use strict";var n=r(12);t.exports=function(t){var e,r,o,i={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+r:r)}),i):i}},function(t,e,r){"use strict";var n=r(12);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),s="",a=0,c=i;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;e=e<<8|r}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,r){"use strict";var n=r(12);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(12);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(12),i=r(36),s=r(17),a=r(13);t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,r){"use strict";var n=r(12);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(18);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n={currentItems:""}},function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(t,e){return e.indexOf(t)>-1}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";var n=r(19),o=r.n(n),i=r(1),s=(r(53),r(21)),a=r(54),c=r(20),u=function(){return r.e(6).then(r.bind(null,48))},f=function(){return r.e(7).then(r.bind(null,42))},l=function(){return r.e(9).then(r.bind(null,55))},p=function(){return r.e(5).then(r.bind(null,50))};e.a={data:function(){return{API_DIR:c.a,currentCategory:"",filteredId:"",categoryTitle:"",categoryDescription:"",categoryPreview:"",bcVisible:!1,bcCategory:"",bcId:""}},components:{vcCategories:u,vcFeaturedItems:f,vcCatDesc:l,vcFooter:p},mounted:function(){this.checkCategory()},watch:{$route:function(){this.checkCategory()}},methods:{checkCategory:function(){var t=this.$route.params.category;Object(a.a)(t,s.a)?(this.currentCategory=t,this.bcCategory=t,this.showCatDesc(),this.loadItems()):(console.log("radios-id 404"),i.a.push({path:"/"}))},loadItems:function(){var t=this,e="",r=this.API_DIR+this.currentCategory+".json";o.a.get(r).then(function(r){e=r.data[t.currentCategory].filter(function(e){return e.id===t.$route.params.id})}).then(function(){e[0]?(t.filteredId=e,t.bcId=e[0].id,t.bcVisible=!0):(console.log("radios id 404"),i.a.push({path:"/"}))}).catch(function(t){console.log(t)})},showCatDesc:function(){var t=this,e="",r=this.API_DIR+"catdesc.json";o.a.get(r).then(function(r){e=r.data.catdesc.filter(function(e){return e.category===t.currentCategory})}).then(function(){t.categoryTitle=e[0].title,t.categoryDescription=e[0].description,t.categoryPreview=e[0].preview}).catch(function(t){console.log(t)})}}}},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("section",{staticClass:"col-sm-3"},[r("vcCategories"),t._v(" "),r("vcFeaturedItems")],1),t._v(" "),r("section",{staticClass:"col-sm-9"},[r("div",{staticClass:"row category_description",attrs:{id:"category_description"}},[r("vcCatDesc",{attrs:{"pr-category-title":t.categoryTitle,"pr-category-description":t.categoryDescription,"pr-category-preview":t.categoryPreview}})],1),t._v(" "),t._m(1),t._v(" "),r("main",{staticClass:"row content_box"},[r("div",{staticClass:"row col-sm-12"},[t.bcVisible?r("div",{staticClass:"breadcrumb"},[r("a",{attrs:{href:"index.html#/"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}})])]),t._v(" \r\n            "),r("a",{attrs:{href:"index.html#/"}},[t._v("Home")]),t._v(" >\r\n            "),r("a",{attrs:{href:"index.html#/radios"}},[t._v("Radios")]),t._v(" >\r\n            "),r("a",{attrs:{href:"index.html#/radios/"+t.bcCategory}},[t._v(t._s(t.bcCategory))]),t._v(" >\r\n            "),r("p",[t._v(t._s(t.bcId))])]):t._e()]),t._v(" "),r("section",{staticClass:"col-sm-12 radios_id",attrs:{id:"gallery-placeholder"}},t._l(t.filteredId,function(e){return r("div",{staticClass:"item-description"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 radios_id_photo"},[r("a",{attrs:{href:"img/"+t.currentCategory+"/"+e.img+"_full.jpg"}},[r("img",{attrs:{src:"img/"+t.currentCategory+"/"+e.img+"_full.jpg"}})])]),t._v(" "),r("div",{staticClass:"col-sm-6 radios_id_desc"},[r("h2",{staticClass:"item-description_title"},[t._v("\r\n                  "+t._s(e.make)+" "+t._s(e.id)+"\r\n                ")]),t._v(" "),r("p",[t._v(t._s(e.description1))]),t._v(" "),r("p",[t._v(t._s(e.description2))]),t._v(" "),r("br"),t._v(" "),r("h2",{staticClass:"item-description_title"},[t._v("\r\n                  Specifications:\r\n                ")]),t._v(" "),r("p",[t._v("Make: "+t._s(e.make))]),t._v(" "),r("p",[t._v("Model: "+t._s(e.id))]),t._v(" "),r("p",[t._v("Year: "+t._s(e.year))]),t._v(" "),r("p",[t._v("Casing: "+t._s(e.case))]),t._v(" "),r("p",[t._v("Speaker: "+t._s(e.speaker))]),t._v(" "),r("p",[t._v("Tuning type: "+t._s(e.tuning_type))]),t._v(" "),r("p",[t._v("Power requirements: "+t._s(e.power))]),t._v(" "),r("p",[t._v("Frequency: "+t._s(e.frequency))]),t._v(" "),r("p",[t._v("Measurements: "+t._s(e.measurements))])])])])})),t._v(" "),r("div",{staticClass:"col-sm-12"},[t._v("\r\n          reserve\r\n        ")])])])])]),t._v(" "),r("footer",{staticClass:"row footer1"},[r("vcFooter")],1)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row row_subheader"},[r("div",{staticClass:"col-sm-12"},[r("p",{attrs:{id:"details"}},[t._v("details")])])])}],i={render:n,staticRenderFns:o};e.a=i}]);