webpackJsonplensyn_ui([15],{528:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n(554),o=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);var c=n(605),l=n(11)(o.a,c.a,!1,null,null,null);l.options.__file="devPkg\\components\\common\\pagination\\Pagination.vue",a.default=l.exports},554:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{paginationData:{total:100,rows:20,page:2,pageGroup:7,rowsData:[{value:10,text:"10条/页"},{value:20,text:"20条/页"},{value:30,text:"30条/页"},{value:40,text:"40条/页"},{value:50,text:"50条/页"}],batchButtons:[{id:"batchDelete",text:"批量删除"}],showBatchButtons:!0},showContent:!1,params:[[{name:"参数",cls:"col"},{name:"说明",cls:"col mark"},{name:"类型",cls:"col"}],[{name:"total",cls:"col"},{name:"总条数",cls:"col mark"},{name:"number",cls:"col"}],[{name:"page",cls:"col"},{name:"当前页码",cls:"col mark"},{name:"number",cls:"col"}],[{name:"pageGroup",cls:"col"},{name:"页码按钮列表显示数量",cls:"col mark"},{name:"number(odd)",cls:"col"}],[{name:"rows",cls:"col"},{name:"每页显示条数",cls:"col mark"},{name:"number",cls:"col"}],[{name:"rowsData",cls:"col"},{name:"每页显示条数下拉数据，格式为[{value: 10,text: '10条/页'},t{value: 20,text: '20条/页'}]",cls:"col mark"},{name:"array",cls:"col"}],[{name:"batchButtons",cls:"col"},{name:"批量操作按钮数据，数组中每一个对象为一个按钮渲染数据格式为[{id: 'batchDelete',text: '批量删除',attr: [{'name': 'test'}]}]",cls:"col mark"},{name:"array",cls:"col"}],[{name:"paginationBackground",cls:"col"},{name:"分页背景色",cls:"col mark"},{name:"string",cls:"col"}],[{name:"paginationPosition",cls:"col"},{name:"分页内容显示位置",cls:"col mark"},{name:"string",cls:"col"}],[{name:"pageGroupHoverBackground",cls:"col"},{name:"页码列表数字点击时的背景色",cls:"col mark"},{name:"string",cls:"col"}],[{name:"pageGroupHoverColor",cls:"col"},{name:"页码列表数字点击时的字体颜色",cls:"col mark"},{name:"string",cls:"col"}],[{name:"pageGroupborderColor",cls:"col"},{name:"页码列表边框颜色",cls:"col mark"},{name:"string",cls:"col"}],[{name:"hasPageGroupborder",cls:"col"},{name:"页码列表是否有边框",cls:"col mark"},{name:"boolean",cls:"col"}],[{name:"jumpBeforeContent",cls:"col"},{name:"跳转输入框前面显示内容",cls:"col mark"},{name:"string",cls:"col"}],[{name:"jumpAfterContent",cls:"col"},{name:"跳转输入框后面显示内容",cls:"col mark"},{name:"string",cls:"col"}],[{name:"showJumpPrompt",cls:"col"},{name:"是否显示页码跳转输入框",cls:"col mark"},{name:"boolean",cls:"col"}],[{name:"showBatchButtons",cls:"col"},{name:"是否显示批量操作按钮",cls:"col mark"},{name:"boolean",cls:"col"}]]}},computed:{},watch:{},methods:{paginationChange:function(t){console.log(t)},batchButtonClick:function(t){console.log(t)},footerEvt:function(){this.showContent=!this.showContent}},mounted:function(){var t=this;t.$nextTick(function(){var a=t.$refs.boxFooter,n=t.$refs.containerNode.parentNode;n.addEventListener("scroll",function(){var e=n.scrollTop+n.offsetHeight,o=a.className,s=o.endsWith(" fixedBottom"),c=document.getElementById("basicLayout"),l=c.offsetTop+c.querySelector("div.box-content").offsetHeight-e,i=c.offsetTop+c.offsetHeight-e;t.showContent&&i>=0&&l<=0?s||(a.style.width=a.getBoundingClientRect().width+"px",a.className+=" fixedBottom"):s&&(a.className=o.replace(" fixedBottom",""))})})}}},605:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{ref:"containerNode",staticClass:"component-content"},[n("span",{staticClass:"title"},[t._v("分页")]),t._v(" "),n("span",{staticClass:"desc"},[t._v("列表进行分页展示，根据传入的当前页、每页显示的条数和总条数进行数据展示")]),t._v(" "),n("span",{staticClass:"sub"},[t._v("分页使用方法")]),t._v(" "),n("span",{staticClass:"desc"},[t._v("引入分页组件，传入对应参数")]),t._v(" "),n("div",{staticClass:"box",attrs:{id:"basicLayout"}},[n("div",{staticClass:"box-content"},[n("ls-pagination",{attrs:{paginationData:t.paginationData},on:{paginationChange:t.paginationChange,batchButtonClick:t.batchButtonClick}})],1),t._v(" "),n("div",{ref:"boxTagger",staticClass:"box-tagger",style:[{height:t.showContent?"auto":"0"}]},[t._m(0)]),t._v(" "),n("div",{staticClass:"fixed-footer"},[n("div",{ref:"boxFooter",staticClass:"box-footer",on:{click:t.footerEvt}},[n("i",{staticClass:"box-footer-icon",class:[{active:t.showContent}]}),n("span",[t._v(t._s(t.showContent?"隐藏代码":"显示代码"))]),t._v(" "),n("button",{staticClass:"box-footer-btn",style:[{opacity:t.showContent?1:0}],attrs:{type:"button",tabindex:"0"}})])])]),t._v(" "),n("span",{staticClass:"sub"},[t._v("传入参数类型说明")]),t._v(" "),n("ul",{staticClass:"grid"},t._l(t.params,function(a){return n("li",{staticClass:"row"},t._l(a,function(a,e){return n("div",{class:[a.cls],style:[{flex:0===e?"0 0 20%":1===e?"0 0 70%":"10%"}],domProps:{innerHTML:t._s(a.name)}})}))}))])};e._withStripped=!0;var o={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("pre",[this._v("                    "),a("p",{staticClass:"txt"},[this._v("vue 页面")]),this._v('\n                    <ls-pagination :paginationData="paginationData" @paginationChange="paginationChange" @batchButtonClick="batchButtonClick"></ls-pagination>\n                    '),a("p",{staticClass:"txt"},[this._v("页面数据")]),this._v("\n                    paginationData: {\n\t\t\t\t\t\ttotal: 100,\n\t\t\t\t\t\trows: 20,\n\t\t\t\t\t\tpage: 2,\n\t\t\t\t\t\tpageGroup: 7,\n\t\t\t\t\t\trowsData: [\n\t\t\t\t\t\t\t{value: 10,text: '10条/页'},\n\t\t\t\t\t\t\t{value: 20,text: '20条/页'},\n\t\t\t\t\t\t\t{value: 30,text: '30条/页'},\n\t\t\t\t\t\t\t{value: 40,text: '40条/页'},\n\t\t\t\t\t\t\t{value: 50,text: '50条/页'}\n\t\t\t\t\t\t],\n\t\t\t\t\t\tbatchButtons: [\n\t\t\t\t\t\t\t{id: 'batchDelete',text: '批量删除'}\n\t\t\t\t\t\t],\n\t\t\t\t\t\tshowBatchButtons: true\n\t\t\t\t\t}\n                ")])}]};a.a=o}});