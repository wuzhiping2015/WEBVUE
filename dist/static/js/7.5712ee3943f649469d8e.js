webpackJsonp([7],{FhcZ:function(t,e,l){"use strict";(function(t){var l={};e.a={name:"elemT",data:function(){return l=this,{filtersTitle:"VUE data filter",msg:"",a:["a","b","c"],n:"",n1:"",show:!0,value3:!0,value4:!0,checkList:["选中且禁用","复选框 A"]}},beforeCreate:function(){},created:function(){console.log("创建完成："),console.log(this.$data)},beforeMount:function(){},mounted:function(){t("body").resize(),console.log(this.$data),setTimeout(function(){},500)},beforeUpdate:function(){},updated:function(){console.log("==更新成功=="),console.log(this.$data)},beforeDestory:function(){console.log("销毁前：")},destoryed:function(){console.log("销毁完成：")},methods:{set1:function(){console.log(this),this.$notify.info({title:"消息",message:"这是一条消息的提示消息"})}},filters:{filtersTitleers:function(t){return"this is filter"}},computed:{rescom:function(){return 3*(Number(l.n)+Number(l.n1))}}}}).call(e,l("7t+N"))},G0uF:function(t,e){},cT6J:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l("FhcZ"),n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"elemT"},[l("h1",[t._v("组件通信")]),t._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[l("el-checkbox",{attrs:{label:"复选框 A"}}),t._v(" "),l("el-checkbox",{attrs:{label:"复选框 B"}}),t._v(" "),l("el-checkbox",{attrs:{label:"复选框 C"}}),t._v(" "),l("el-checkbox",{attrs:{label:"禁用",disabled:""}}),t._v(" "),l("el-checkbox",{attrs:{label:"选中且禁用"}})],1),t._v("\n\n      "+t._s(t.checkList)+"\n      "),l("el-time-select",{attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:"选择时间"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),t._v("\n\n      "+t._s(t.msg)+"\n    ")],1),t._v(" "),l("el-col",{attrs:{span:8}},[l("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:8}},[l("el-badge",{staticClass:"item",attrs:{value:200,max:99}},[l("el-button",{attrs:{size:"small"}},[t._v("点击按钮")])],1),t._v(" "),l("el-badge",{staticClass:"item",attrs:{value:100,max:10}},[l("el-button",{attrs:{size:"small"}},[t._v("回复")])],1),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.set1}},[t._v("一个点击事件")])],1),t._v(" "),l("el-col",{attrs:{span:8}},[l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v("\n      "+t._s(t.n)+"\n      "),l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.n1,callback:function(e){t.n1=e},expression:"n1"}}),t._v("\n\n      "+t._s(t.n1)+"\n    ")],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),l("el-col",{attrs:{span:16}},[l("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),l("el-switch",{attrs:{"active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),t._v("\n  "+t._s(t.value3)+"\n  "),l("el-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}}),t._v("\n\n  "+t._s(t.value4)+"\n")],1)},staticRenderFns:[]};var a=function(t){l("G0uF")},c=l("VU/8")(s.a,n,!1,a,null,null);e.default=c.exports}});
//# sourceMappingURL=7.5712ee3943f649469d8e.js.map