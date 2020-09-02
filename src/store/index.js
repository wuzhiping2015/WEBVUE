/*VUEX 使用测试*/

import Vue from 'vue'  //引入VUE
import Vuex from 'vuex' //引入VUEX
// 使用VUEX
Vue.use(Vuex);
//创建VUE 实例
/*  const store=new Vuex.Store({
    state:{
      count:"我是一个VUEX 的例子 ",
      arr:[1,2,23,4,5],
      abc:function(){
         return "一个数字";
      },
    }
 }); */

//导出store
/* export default store */

export default new Vuex.Store({
  state: {
    count: "我是一个VUEX 的例子 ",
    istabbbar: true,
    comments: [1, 2, 3, 4, 45, 5]
  },

  getters: {
    commentgetdata() {
      return comments.filter((item, index) => index < 3)
    }
  },
 
  mutations: {
    hiddentabbar(state, data) {
      //state 自己本身获取   istabbbar   赋值
      state.istabbbar = data
      console.log("hiddentabbar");
    },
    showentabbar(state, data) {
      state.istabbbar = data
      console.log("hiddentabbar");
    }
  },
  actions: {}
});



