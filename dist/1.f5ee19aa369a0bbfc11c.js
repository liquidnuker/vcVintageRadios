webpackJsonp([1],{42:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(64),r=a(68),n=a(2),i=n(s.a,r.a,null,null,null);e.default=i.exports},48:function(t,e,a){"use strict";function s(t){this.data=t.data,this.perPage=t.perPage,this.currentPage=1}e.a=s,s.prototype={getTotalPages:function(){return Math.ceil(this.data.length/this.perPage)},getCurrentOffset:function(){return(this.currentPage-1)*this.perPage},page:function(t){if(this.isValidPage(t)){this.currentPage=t;var e=this.getCurrentOffset(),a=e+Number(this.perPage);return this.data.slice(e,a)}return this.currentPage=1,this.data.slice(0,this.perPage)},hasNext:function(){return this.currentPage<this.getTotalPages()},hasPrev:function(){return 1!==this.currentPage},prev:function(){return this.hasPrev()?this.currentPage=this.currentPage-1:this.currentPage=this.getTotalPages(),this.currentPage},next:function(){return this.hasNext()?this.currentPage++:this.currentPage=1,this.currentPage},isValidPage:function(t){return t>0&&t<=this.getTotalPages()}}},49:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s=function(t,e){var a,s=[],r=[];if(s.push(1),e<=1)return s;for(var n=t-2;n<=t+2;n++)n<e&&n>1&&s.push(n);s.push(e);var i=!0,o=!1,l=void 0;try{for(var c,g=s[Symbol.iterator]();!(i=(c=g.next()).done);i=!0){var u=c.value;a&&(u-a==2?r.push(a+1):u-a!=1&&r.push("...")),r.push(u),a=u}}catch(t){o=!0,l=t}finally{try{!i&&g.return&&g.return()}finally{if(o)throw l}}return r}},64:function(t,e,a){"use strict";var s=a(9),r=a.n(s),n=a(11),i=a(12),o=a(48),l=a(49),c=a(10),g=function(){return a.e(6).then(a.bind(null,65))};e.a={data:function(){return{API_DIR:c.a,categoryName:"",randomCategory:"",itemList:"",pg:"",perPage:10,perPageItems:[10,20,50,100],totalPages:"",currentPage:"",temp:"",buttonSet:""}},components:{vcRadiosTopCarousel:g},watch:{$route:function(){this.loadRandomCategory()}},mounted:function(){this.loadRandomCategory()},methods:{loadRandomCategory:function(){var t=this,e=Object(i.a)(n.a),a=e[0],s=this.API_DIR+a+".json";r.a.get(s).then(function(e){t.categoryName=a,t.randomCategory=e.data[a]}).then(function(){t.activatePager()}).catch(function(t){console.log(t)})},activatePager:function(){this.pg=null,this.pg=new o.a({perPage:this.perPage,data:this.randomCategory}),this.totalPages=this.pg.getTotalPages(),this.setPageBtns(),this.showItems(1)},showItems:function(t){this.itemList=this.pg.page(t),this.currentPage=this.pg.currentPage,this.changePageBtns()},changePerPage:function(t){console.log(t),this.perPage=t,this.activatePager()},flip:function(t){"next"===t?this.showItems(this.pg.next()):this.showItems(this.pg.prev())},setPageBtns:function(){this.temp=[];for(var t=0,e=this.pg.getTotalPages();t<e;t++)this.temp.push(Object(l.a)(t,e))},changePageBtns:function(){this.buttonSet=this.temp[this.pg.currentPage-1]},pageJump:function(t){this.showItems(Number(t))}}}},68:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"col-sm-9"},[a("div",{staticClass:"row carousel_box"},[a("vcRadiosTopCarousel")],1),t._v(" "),t._m(0),t._v(" "),a("main",{staticClass:"row content_box"},[a("div",{staticClass:"row col-sm-12"},[a("div",{staticClass:"breadcrumb"},[a("a",{attrs:{href:"index.html#/"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}})])]),t._v(" \r\n        "),a("a",{attrs:{href:"index.html#/"}},[t._v("Home")]),t._v(" >\r\n        "),a("p",[t._v("Radios")])])]),t._v(" "),a("div",{staticClass:"row col-sm-12"},[a("div",{staticClass:"jspager1_holder"},[a("nav",{staticClass:"jspager1"},[a("aside",{staticClass:"jspager1_totalpagesholder"},[a("label",{attrs:{for:"jspager1_select"}},[t._v("Page:")]),t._v(" "),a("p",{attrs:{id:"jspager1_currentpage"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPage,expression:"currentPage"}],staticClass:"jspager1_select",attrs:{id:"jspager1_select",name:"jspager1_select",tabindex:"0"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentPage=e.target.multiple?a:a[0]},function(e){t.pageJump(e.target.value)}]}},t._l(t.totalPages,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})),t._v(" "),a("p",{attrs:{id:"jspager1_totalpages"}},[t._v("of "+t._s(t.totalPages))])]),t._v(" "),a("aside",{staticClass:"jspager1_prevnextholder"},[a("button",{staticClass:"btn btn_first",attrs:{id:"jspager1_first",tabindex:"0"},on:{click:function(e){t.showItems(1)}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v(" "),a("span",[t._v("First")])]),t._v(" "),a("button",{staticClass:"btn btn_prev",attrs:{id:"jspager1_prev",tabindex:"0"},on:{click:function(e){t.flip()}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v(" "),a("span",[t._v("Prev")])]),t._v(" "),a("button",{staticClass:"btn btn_next",attrs:{id:"jspager1_next",tabindex:"0"},on:{click:function(e){t.flip("next")}}},[a("span",[t._v("Next")]),t._v(" "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])]),t._v(" "),a("button",{staticClass:"btn btn_last",attrs:{id:"jspager1_last",tabindex:"0"},on:{click:function(e){t.showItems(t.totalPages)}}},[a("span",[t._v("Last")]),t._v(" "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])]),t._v(" "),a("aside",{staticClass:"jspager1_pagebtnholder",attrs:{id:"jspager1_pagebtnholder","aria-atomic":"true","aria-live":"polite","aria-relevant":"additions"}},[t._l(t.buttonSet,function(e,s){return[e===t.currentPage?a("a",{staticClass:"jspager1_pagebtn jspager1_pagebtn--active",attrs:{tabindex:"0","aria-posinset":t.currentPage,"aria-selected":"true"},on:{click:function(a){t.showItems(e)}}},[t._v(t._s(e))]):a("a",{staticClass:"jspager1_pagebtn",attrs:{tabindex:"0","aria-posinset":s+1},on:{click:function(a){t.showItems(e)}}},[t._v("\r\n              "+t._s(e)+"\r\n            ")])]})],2),t._v(" "),a("aside",{staticClass:"jspager1_jumptopageholder"},[a("label",{attrs:{for:"jspager1_jump"}},[t._v("jump to page: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.toPage,expression:"toPage"}],staticClass:" jspager1_jump",attrs:{type:"tel",name:"jspager1_jump",id:"jspager1_jump",placeholder:"",tabindex:"0"},domProps:{value:t.toPage,value:t.toPage},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.pageJump(t.toPage)},input:function(e){e.target.composing||(t.toPage=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn",attrs:{id:"jspager1_jumpbtn",tabindex:"0"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.pageJump(t.toPage)},click:function(e){t.pageJump(t.toPage)}}},[t._v("Go")])]),t._v(" "),a("aside",{staticClass:"jspager1_perpageholder"},[a("label",{attrs:{for:"jspager1_perpage"}},[t._v("perPage: ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"jspager1_perpage",attrs:{id:"jspager1_perpage",name:"jspager1_perpage",tabindex:"0"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.perPage=e.target.multiple?a:a[0]},function(e){t.changePerPage(e.target.value)}]}},t._l(t.perPageItems,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])}))])])])]),t._v(" "),a("section",{staticClass:"col-sm-12",attrs:{id:"gallery-placeholder"}},[a("div",{staticClass:"row",attrs:{id:"galleryContainer"}},t._l(t.itemList,function(e){return a("div",{staticClass:"col-xs-12 col-sm-4 col-md-3 col-lg-3",attrs:{id:"gridder"}},[a("div",{attrs:{id:"ajaxbox"}},[a("div",{staticClass:"ajaxbox-bg-skew"}),t._v(" "),a("a",{attrs:{href:"index.html#/radios/"+t.categoryName+"/"+e.id}},[a("img",{attrs:{src:"img/"+t.categoryName+"/"+e.img+"_thumb.jpg",id:e.id,alt:e.id}})]),t._v(" "),a("div",{staticClass:"ajaxboxText"},[a("h2",{staticClass:"model",attrs:{id:e.id}},[t._v(t._s(e.model))]),a("br"),t._v(" "),a("span",{staticClass:"make"},[t._v(t._s(e.make))])])])])}))]),t._v(" "),t._m(1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row row_subheader"},[a("div",{staticClass:"col-sm-12"},[a("p",{attrs:{id:"details"}},[t._v("details")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"gallery-listing-paginator"},[t._v("\r\n        bottom paginator\r\n      ")])])}],n={render:s,staticRenderFns:r};e.a=n}});