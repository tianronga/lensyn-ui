webpackJsonplensyn_ui([0],{515:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(535),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var o=i(576),l=i(11)(a.a,o.a,!1,null,null,null);l.options.__file="devPkg\\components\\home\\Index.vue",s.default=l.exports},535:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=r(i(561)),a=r(i(568)),n=r(i(570)),o=r(i(572)),l=r(i(574));function r(t){return t&&t.__esModule?t:{default:t}}s.default={components:{first:e.default,second:a.default,third:n.default,fourth:o.default,fifth:l.default},data:function(){return{isScroll:!1,scrollCount:0,objProps:{val:0,direct:"down"}}},methods:{scrollEvt:function(t){var s=this;s.scrollCount=t>0?++s.scrollCount:--s.scrollCount,s.scrollCount=s.scrollCount<0?0:s.scrollCount>4?4:s.scrollCount;var i=document.body.offsetHeight;s.$refs.homePage.setAttribute("style","top: -"+i*s.scrollCount+"px;"),setTimeout(function(){s.isScroll=!1,s.objProps={val:s.scrollCount,direct:t>0?"down":"up"}},200)}},mounted:function(){var t=this;t.$nextTick(function(){var s=t.$refs.homePage,i=document.body.offsetHeight;s.setAttribute("style","height: "+5*i+"px;");for(var e=s.querySelectorAll(".home-box-item"),a=0;a<e.length;a++){e[a].setAttribute("style","height: "+i+"px;")}var n=navigator.userAgent.includes("Firefox")?"DOMMouseScroll":"mousewheel";s.addEventListener(n,function(s){t.isScroll||(t.isScroll=!0,t.scrollEvt(navigator.userAgent.includes("Firefox")?s.detail:s.deltaY))})})},created:function(){}}},536:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e,a=i(562),n=(e=a)&&e.__esModule?e:{default:e};s.default={data:function(){return{videoWidth:"",listHeight:"",menuList:[{name:"指南",path:"/guide"},{name:"组件",path:"/component"},{name:"M组件",path:"/mcomponent"},{name:"资源",path:"/resource"}],menuPath:"",menuStrokeWidth:"140",testPath:"M380,0 L0,0 v300 h380 V270 H60 V240 H380 V210 H60 V180 H380 V150 H60 V120 H380 V90 H60 V60 H380 V30 H60",logPath:"M150 400 L150 110 S100 10 50 110 L50 700 S50 850 850 850 L850 150 S600 10 300 10 300 260 550 460 750 850 150 560",descList:[{id:"ID001",icon:"icon",title:"指南",desc:"LensynUI 组件库的运行环境及组件库运用规则",path:"guide"},{id:"ID002",icon:"icon0",title:"组件",desc:"为前端开发者提供简单易用的Vue组件，减少开发者重复工作量",path:"component"},{id:"ID003",icon:"icon2",title:"M组件",desc:"为移动前端开发者提供简单易用的Vue组件，减少开发者重复工作量",path:"mcomponent"},{id:"ID004",icon:"icon1",title:"资源",desc:"提供开发所需要的前端资源以及简单模板源码",path:"resource"}],menuShow:!1}},methods:{toggleMenu:function(){this.menuShow=!this.menuShow}},created:function(){var t=(0,n.default)(this.menuStrokeWidth);this.listHeight=document.body.offsetHeight+"px";for(var s="M380,0 L0,0 v"+(0,n.default)(this.listHeight)+" h380",i=(0,n.default)((0,n.default)(this.listHeight)/t),e=(0,n.default)(this.listHeight),a=0;a<=i;a++){if(e-=t,a%2==0)s+=" "+("V"+e+" H60");else s+=" "+("V"+e+" H380")}this.menuPath=s},mounted:function(){var t=this;t.$nextTick(function(){videojs(t.$refs.videoNode,{autoplay:!0,loop:!0,isFullscreen:!0})})}}},537:function(t,s){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},538:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["objProps"],data:function(){return{svgPath:"M490 0 L490 150 0 150 0 900 1000 900 1000 1200",clipPos:{x:480,y:-1200,xx:-1030,yy:-490},step:10}},watch:{objProps:function(t){1===t.val&&("down"===t.direct&&(this.clipPos={x:480,y:-1200,xx:-1030,yy:-290},this.runPath()),"up"===t.direct&&(this.clipPos={x:-1010,y:910,xx:990,yy:1200},this.runPathUp()))}},methods:{runPathUp:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<310?(i+=t.step,t.clipPos.yy-=t.step):i>=310&&i<1310?(i+=t.step,t.clipPos.xx-=t.step):i>=1310&&i<2080?(i+=t.step,t.clipPos.y-=t.step):i>=2080&&i<2570?(i+=t.step,t.clipPos.x+=t.step):i>=2570&&i<s+10?(i+=t.step,t.clipPos.y-=t.step):(clearInterval(e),e=null)})},runPath:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<160?(i+=t.step,t.clipPos.y+=t.step):i>=160&&i<650?(i+=t.step,t.clipPos.x-=t.step):i>=650&&i<1380?(i+=t.step,t.clipPos.y+=t.step):i>=1380&&i<2400?(i+=t.step,t.clipPos.xx+=t.step):i>=2400&&i<s?(i+=t.step,t.clipPos.yy+=t.step):(clearInterval(e),e=null)})}}}},539:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["objProps"],data:function(){return{svgPath:"M1000 0 L1000 900 0 900 0 1200",clipPos:{x:990,y:-1200},step:10}},watch:{objProps:function(t){2===t.val&&("down"===t.direct&&(this.clipPos={x:990,y:-1200},this.runPath()),"up"===t.direct&&(this.clipPos={x:-1e3,y:1200},this.runPathUp()))}},methods:{runPathUp:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<310?(i+=t.step,t.clipPos.y-=t.step):i>=310&&i<1300?(i+=t.step,t.clipPos.x+=t.step):i>=1300&&i<s-20?(i+=t.step,t.clipPos.y-=t.step):(clearInterval(e),e=null)})},runPath:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<910?(i+=t.step,t.clipPos.y+=t.step):i>=910&&i<1910?(i+=t.step,t.clipPos.x-=t.step):i>=1910&&i<s-10?(i+=t.step,t.clipPos.y+=t.step):(clearInterval(e),e=null)})}}}},540:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["objProps"],data:function(){return{svgPath:"M0 0 L0 900 1000 900 1000 1200",clipPos:{x:990,y:-1200},step:10}},watch:{objProps:function(t){3===t.val&&("down"===t.direct&&(this.clipPos={x:-1010,y:-1200},this.runPath()),"up"===t.direct&&(this.clipPos={x:990,y:1200},this.runPathUp()))}},methods:{runPathUp:function(){var t=this,s=(t.$refs.backSvgPath.getTotalLength(),0),i=setInterval(function(){s<310?(s+=t.step,t.clipPos.y-=t.step):s>=310&&s<1310?(s+=t.step,t.clipPos.x-=t.step):s>=1310&&s<2200?(s+=t.step,t.clipPos.y-=t.step):(clearInterval(i),i=null)})},runPath:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<910?(i+=t.step,t.clipPos.y+=t.step):i>=910&&i<1910?(i+=t.step,t.clipPos.x+=t.step):i>=1910&&i<s-10?(i+=t.step,t.clipPos.y+=t.step):(clearInterval(e),e=null)})}}}},541:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["objProps"],data:function(){return{svgPath:"M1000 0 L1000 900 0 900 0 1200",clipPos:{x:990,y:-1200},step:10}},watch:{objProps:function(t){4===t.val&&("down"===t.direct&&(this.clipPos={x:990,y:-1200},this.runPath()),"up"===t.direct&&(this.clipPos={x:-1e3,y:1200},this.runPathUp()))}},methods:{runPathUp:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<310?(i+=t.step,t.clipPos.y-=t.step):i>=310&&i<1300?(i+=t.step,t.clipPos.x+=t.step):i>=1300&&i<s-20?(i+=t.step,t.clipPos.y-=t.step):(clearInterval(e),e=null)})},runPath:function(){var t=this,s=t.$refs.backSvgPath.getTotalLength()+10,i=0,e=setInterval(function(){i<910?(i+=t.step,t.clipPos.y+=t.step):i>=910&&i<1910?(i+=t.step,t.clipPos.x-=t.step):i>=1910&&i<s-10?(i+=t.step,t.clipPos.y+=t.step):(clearInterval(e),e=null)})}}}},561:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(536),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var o=i(567),l=i(11)(a.a,o.a,!1,null,null,null);l.options.__file="devPkg\\components\\home\\index\\first.vue",s.default=l.exports},562:function(t,s,i){t.exports={default:i(563),__esModule:!0}},563:function(t,s,i){i(564),t.exports=parseInt},564:function(t,s,i){var e=i(35),a=i(565);e(e.S+e.F*(Number.parseInt!=a),"Number",{parseInt:a})},565:function(t,s,i){var e=i(32).parseInt,a=i(566).trim,n=i(537),o=/^[-+]?0[xX]/;t.exports=8!==e(n+"08")||22!==e(n+"0x16")?function(t,s){var i=a(String(t),3);return e(i,s>>>0||(o.test(i)?16:10))}:e},566:function(t,s,i){var e=i(35),a=i(86),n=i(50),o=i(537),l="["+o+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),h=function(t,s,i){var a={},l=n(function(){return!!o[t]()||"​"!="​"[t]()}),r=a[t]=l?s(v):o[t];i&&(a[i]=r),e(e.P+e.F*l,"String",a)},v=h.trim=function(t,s){return t=String(a(t)),1&s&&(t=t.replace(r,"")),2&s&&(t=t.replace(c,"")),t};t.exports=h},567:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home-first-container"},[i("video",{ref:"videoNode",staticClass:"video-js",staticStyle:{"object-fit":"fill",width:"100%"},attrs:{loop:"",preload:"auto"}},[i("source",{attrs:{src:"/static/video/login.mp4",type:"video/mp4"}})]),t._v(" "),i("div",{staticClass:"logo"},[i("div",{staticClass:"brand"},[i("div",{staticClass:"icon"},[i("svg",{attrs:{viewBox:"0 0 1000 1000",width:"100%",height:"100%"}},[i("path",{staticClass:"path1",staticStyle:{fill:"none",stroke:"#1296db","stroke-width":"20"},attrs:{d:t.logPath}})])]),t._v(" "),i("span",{staticClass:"title"},[t._v("LensynUI")]),t._v(" "),i("span",{staticClass:"desc"},[t._v("一款基于Vue2.0的简洁组件库")])])]),t._v(" "),i("div",{staticClass:"first-menu"},[i("div",{staticClass:"menu-box",class:[{active:t.menuShow}],on:{click:t.toggleMenu}},[i("span"),t._v(" "),i("span"),t._v(" "),i("span")]),t._v(" "),t.menuShow?i("div",{staticClass:"menu-list",style:{height:t.listHeight}},[i("svg",{attrs:{width:"100%",height:"100%"}},[i("g",{staticStyle:{fill:"none",stroke:"rgba(53, 195, 230, 0.432)"},style:[{strokeWidth:t.menuStrokeWidth}]},[i("path",{ref:"mPath",staticClass:"menu-path",class:[{active:t.menuShow}],staticStyle:{strokeDasharray:"5000",strokeDashoffset:"0"},attrs:{d:t.menuPath}})])]),t._v(" "),i("div",{staticClass:"menu-span"},t._l(t.menuList,function(s,e){return i("router-link",{key:"key"+e,attrs:{to:s.path}},[t._v(t._s(s.name))])}))]):t._e()])])};e._withStripped=!0;var a={render:e,staticRenderFns:[]};s.a=a},568:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(538),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var o=i(569),l=i(11)(a.a,o.a,!1,null,null,null);l.options.__file="devPkg\\components\\home\\index\\second.vue",s.default=l.exports},569:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"second-screen"},[s("div",{staticClass:"path-box"},[s("svg",{attrs:{viewBox:"0 0 1000 1200",width:"100%",height:"100%"}},[s("clipPath",{attrs:{id:"landingClipTop"}},[s("rect",{ref:"svgPath",attrs:{x:this.clipPos.x,y:this.clipPos.y,width:"1020",height:"1200"}}),this._v(" "),s("rect",{ref:"svgPath",attrs:{x:this.clipPos.xx,y:this.clipPos.yy,width:"1020",height:"1200"}})]),this._v(" "),s("path",{ref:"backSvgPath",attrs:{fill:"none",stroke:"#dcdcdc","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}}),this._v(" "),s("g",{staticStyle:{"clip-path":"url(#landingClipTop)"}},[s("path",{attrs:{fill:"none",stroke:"#1296db","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}})])])]),this._v(" "),this._m(0),this._v(" "),s("div",{staticClass:"txt-box"},[s("div",{staticClass:"box"},[s("span",{staticClass:"title"},[this._v("lensyn-ui 指南")]),this._v(" "),s("span",{staticClass:"desc"},[this._v("LensynUI 组件库的运行环境及组件库运用规则")]),this._v(" "),s("router-link",{staticClass:"view-btn",attrs:{to:"/guide"}},[this._v("查看详情"),s("i",{staticClass:"icon"})])],1)])])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-box"},[s("div",{staticClass:"img-box"},[s("div",{staticClass:"box2"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"box1"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"box0"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"home-guide-icon-box"},[s("div",{staticClass:"container"},[s("div",{staticClass:"face0"}),this._v(" "),s("div",{staticClass:"face1"}),this._v(" "),s("div",{staticClass:"face2"}),this._v(" "),s("div",{staticClass:"face3"}),this._v(" "),s("div",{staticClass:"face4"}),this._v(" "),s("div",{staticClass:"face5"})])])])])}]};s.a=a},570:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(539),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var o=i(571),l=i(11)(a.a,o.a,!1,null,null,null);l.options.__file="devPkg\\components\\home\\index\\third.vue",s.default=l.exports},571:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"second-screen"},[s("div",{staticClass:"path-box"},[s("svg",{attrs:{viewBox:"0 0 1000 1200",width:"100%",height:"100%"}},[s("clipPath",{attrs:{id:"landingClipTop0"}},[s("rect",{ref:"svgPath",attrs:{x:this.clipPos.x,y:this.clipPos.y,width:"1020",height:"1200"}})]),this._v(" "),s("path",{ref:"backSvgPath",attrs:{fill:"none",stroke:"#dcdcdc","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}}),this._v(" "),s("g",{staticStyle:{"clip-path":"url(#landingClipTop0)"}},[s("path",{attrs:{fill:"none",stroke:"#1296db","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}})])])]),this._v(" "),s("div",{staticClass:"txt-box"},[s("div",{staticClass:"box left"},[s("span",{staticClass:"title"},[this._v("组件 DEMO")]),this._v(" "),s("span",{staticClass:"desc"},[this._v("为前端开发者提供简单易用的Vue组件，减少开发者重复工作量")]),this._v(" "),s("router-link",{staticClass:"view-btn",attrs:{to:"/component"}},[this._v("查看详情"),s("i",{staticClass:"icon"})])],1)]),this._v(" "),this._m(0)])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-box"},[s("div",{staticClass:"img-box right"},[s("div",{staticClass:"box2"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"box1"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"home-demo-info"},[s("div",{staticClass:"box"},[s("div",{staticClass:"layer0"},[s("div")]),this._v(" "),s("div",{staticClass:"layer1"},[s("div",[s("span"),this._v(" "),s("span"),this._v(" "),s("span"),this._v(" "),s("span"),this._v(" "),s("span")])]),this._v(" "),s("div",{staticClass:"layer2"},[s("div",[s("span")]),this._v(" "),s("div",[s("span")]),this._v(" "),s("div",[s("span")]),this._v(" "),s("div",[s("span")])])])])])])}]};s.a=a},572:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(540),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var o=i(573),l=i(11)(a.a,o.a,!1,null,null,null);l.options.__file="devPkg\\components\\home\\index\\fourth.vue",s.default=l.exports},573:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"second-screen"},[s("div",{staticClass:"path-box"},[s("svg",{attrs:{viewBox:"0 0 1000 1200",width:"100%",height:"100%"}},[s("clipPath",{attrs:{id:"landingClipTop1"}},[s("rect",{ref:"svgPath",attrs:{x:this.clipPos.x,y:this.clipPos.y,width:"1020",height:"1200"}})]),this._v(" "),s("path",{ref:"backSvgPath",attrs:{fill:"none",stroke:"#dcdcdc","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}}),this._v(" "),s("g",{staticStyle:{"clip-path":"url(#landingClipTop1)"}},[s("path",{attrs:{fill:"none",stroke:"#1296db","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}})])])]),this._v(" "),this._m(0),this._v(" "),s("div",{staticClass:"txt-box"},[s("div",{staticClass:"box"},[s("span",{staticClass:"title"},[this._v("Mobile 组件")]),this._v(" "),s("span",{staticClass:"desc"},[this._v("为移动前端开发者提供简单易用的Vue组件，减少开发者重复工作量")]),this._v(" "),s("router-link",{staticClass:"view-btn",attrs:{to:"/mcomponent"}},[this._v("查看详情"),s("i",{staticClass:"icon"})])],1)])])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-box"},[s("div",{staticClass:"img-box"},[s("div",{staticClass:"box2"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"box1"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"box0"},[s("div",{staticClass:"layer"})]),this._v(" "),s("div",{staticClass:"home-mobile-demo"},[s("span",[this._v("<ls-selection")]),this._v(" "),s("span",{staticClass:"f22"},[this._v("<ls-datagrid")]),this._v(" "),s("span",{staticClass:"f16"},[this._v("<ls-input")]),this._v(" "),s("span",[this._v("<ls-message")]),this._v(" "),s("span",[this._v("<ls-button")]),this._v(" "),s("span",{staticClass:"f18"},[this._v("<ls-XXXXX")]),this._v(" "),s("span",{staticClass:"f22"},[this._v("<...")])])])])}]};s.a=a},574:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(541),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);var o=i(575),l=i(11)(a.a,o.a,!1,null,null,null);l.options.__file="devPkg\\components\\home\\index\\fifth.vue",s.default=l.exports},575:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"second-screen"},[s("div",{staticClass:"path-box"},[s("svg",{attrs:{viewBox:"0 0 1000 1200",width:"100%",height:"100%"}},[s("clipPath",{attrs:{id:"landingClipTop2"}},[s("rect",{ref:"svgPath",attrs:{x:this.clipPos.x,y:this.clipPos.y,width:"1020",height:"1200"}})]),this._v(" "),s("path",{ref:"backSvgPath",attrs:{fill:"none",stroke:"#dcdcdc","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}}),this._v(" "),s("g",{staticStyle:{"clip-path":"url(#landingClipTop2)"}},[s("path",{attrs:{fill:"none",stroke:"#1296db","stroke-width":"20","stroke-miterlimit":"10",d:this.svgPath}})])])]),this._v(" "),s("div",{staticClass:"txt-box"},[s("div",{staticClass:"box"},[s("span",{staticClass:"title"},[this._v("开发库资源")]),this._v(" "),s("span",{staticClass:"desc"},[this._v("提供开发所需要的前端资源以及简单模板源码")]),this._v(" "),s("router-link",{staticClass:"view-btn",attrs:{to:"/resource"}},[this._v("查看详情"),s("i",{staticClass:"icon"})])],1)]),this._v(" "),this._m(0),this._v(" "),this._m(1)])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-box"},[s("div",{staticClass:"img-box",staticStyle:{left:"0",margin:"0"}},[s("div",{staticClass:"home-source-icon"},[s("div",{staticClass:"box"},[s("div",{staticClass:"web"}),this._v(" "),s("div",{staticClass:"mobile"}),this._v(" "),s("div",{staticClass:"bs"}),this._v(" "),s("div",{staticClass:"desk"}),this._v(" "),s("div",{staticClass:"other"})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"footer-info"},[s("span",{staticClass:"title"},[this._v("Licence")]),this._v(" "),s("span",{staticClass:"title sub"},[this._v("Licence under the MIT License.")]),this._v(" "),s("span",{staticClass:"title sub center"},[this._v("@2015-2017 四川能信科技股份有限公司 版权所有 公司地址：四川省成都市高新区天晖中街56号曙光国际1栋11层1127号")]),this._v(" "),s("span",{staticClass:"title sub center"},[this._v("蜀ICP备009002102|技术支持：四川能信科技股份有限公司")])])}]};s.a=a},576:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-container home-container-box"},[s("div",{ref:"homePage",staticClass:"home-page full"},[s("div",{staticClass:"home-box-item"},[s("first",{attrs:{objProps:this.objProps}})],1),this._v(" "),s("div",{staticClass:"home-box home-box-item"},[s("second",{attrs:{objProps:this.objProps}})],1),this._v(" "),s("div",{staticClass:"home-box home-box-item"},[s("third",{attrs:{objProps:this.objProps}})],1),this._v(" "),s("div",{staticClass:"home-box home-box-item"},[s("fourth",{attrs:{objProps:this.objProps}})],1),this._v(" "),s("div",{staticClass:"home-box home-box-item"},[s("fifth",{attrs:{objProps:this.objProps}})],1)])])};e._withStripped=!0;var a={render:e,staticRenderFns:[]};s.a=a}});