webpackJsonp([10],{"0NxS":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{fullname:111111111,selected:"a",m:"a",options:[{text:"111",value:"a"}],seen:!0,num:0,vm:this,isH5Plus:!0,q:"你看到了",red:!1,msg:"Welcome to you vue.js app",pri:{fir:"ddi",last:"fe",age:4},users:[{tag:"aa"}]}},onLoad:function(){},methods:{abc:function(e){console.log(e)},acon:function(e){this.num=e},json:function(){this.msg=122222}},computed:{classobj:function(){}},mounted:function(){},filters:{canpitalize:function(e){return e?111:3333}},watch:{}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"JD"}},[n("h1",[e._v("\n    "+e._s(e.msg)+"\n  ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.m,expression:"m"}],attrs:{type:"text",placeholder:"测试输入看看"},domProps:{value:e.m},on:{input:function(t){t.target.composing||(e.m=t.target.value)}}}),e._v(" "),n("div",{staticStyle:{padding:"20px",border:"1px solid red"}},[n("h3",[e._v(" TAB 切换")]),e._v(" "),e.red?n("p",{staticStyle:{color:"red"}},[e._v(e._s(e.red))]):n("p",[e._v(e._s(e.red))]),e._v(" "),n("div",{staticClass:"slide"},e._l(e.users,function(t,s){return n("b",{class:{active:e.num==s},on:{click:function(t){return e.acon(s)}}},[e._v(e._s(s))])}),0),e._v(" "),n("ul",e._l(e.users,function(t,s){return n("li",{directives:[{name:"show",rawName:"v-show",value:s==e.num,expression:"index==num"}]},[e._v(e._s(s)+":"+e._s(t.tag))])}),0)]),e._v(" "),e.seen?n("h1",[e._v("\n    这是一个测试: "+e._s(e.msg)+"\n  ")]):n("h1",[e._v(" "+e._s(e.q))]),e._v(" "),n("ul",{staticStyle:{"font-size":"20px",width:"60px"}},e._l(e.pri,function(t,s){return n("li",[e._v(e._s(t))])}),0),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.json}},[e._v("测试join() "+e._s(e.msg))])],1)},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(e){n("3O8L")},"data-v-bdbbedbe",null);t.default=o.exports},"3O8L":function(e,t){}});
//# sourceMappingURL=10.fc37efc0db97e72592d0.js.map