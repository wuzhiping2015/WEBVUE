import Vue from 'vue'
import App from './App'
/* import App from './App' */
import router from './router' // 引入路由配置

import store from './store' // vuex的使用 

/* import $ from "./jquery"

import './src/assets/css/AdminLTE.min.css' */


/* import API from '@/assets/bootstrap.css'
Vue.prototype.$API = API; */




//全局样式strtr
import API from '@/assets/base.css'
Vue.prototype.$API = API;


Vue.config.productionTip = false;


/* import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root="www.baidu.com" */


// 简单配置 进度条  start
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
// 简单配置 进度条  end




/*

//用户权限登录
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('access_token')) { //判断本地是否存在access_token
      next();
    } else {
      if (to.path === '/Main') {
        next();
      } else {
        next({
          path: '/Main'
        })
      }
    }
  } else {
    next();
  }

  if (to.fullPath == "/Main") {
    if (localStorage.getItem('access_token')) {
      next({
        path: from.fullPath
      });
    } else {
      next();
    }
  }
});
 */

//404 处理
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //匹配前往的路由不存在
    from.name ? next({
      name: from.name
    }) : next('/Error'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else {
    next(); //如果匹配到正确跳转
  }
});
//  end





//引入i18n国际化插件

import VueI18N from 'vue-i18n'
Vue.use(VueI18N)

const i18n = new VueI18N({
  // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('@/assets/lang/zh'),
    'en': require('@/assets/lang/en')
  }
});


import ElementUI from 'element-ui' // 引入ElementUI 组件
import 'element-ui/lib/theme-chalk/index.css' // 手动变红 ElementUI 组件 */
Vue.use(ElementUI)







/* Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
}) */



import axios from 'axios' // npm 安装axios，数据请求
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);


new Vue({
  el: '#app',
  router, //等价于 router: router
  i18n,
  store,  //VUEx 控制器
  render: h => h(App), //重定义
  components: { App, },
  template: '<App/>'
})

//定义全局过去器
Vue.filter('dCurrency', function (value) {
  return '￥' + value
})

Vue.filter('dTofixed', function (value) {
  var isNum = parseFloat(value);
  if (!isNum) {
    alert("请输入数字")
    return "请输入数字";
  } else {
    var value = Math.round(isNum * 100) / 100;
    var item = value.toString().split(".");
    if (item.length == 1) {
      value = value.toString() + ".00";
      return value;
    }
    if (item.length > 1) {
      if (item[1].length < 2) {
        value = value.toString() + "0";
      }
      return value;
    }
  }
})




export const ceshiyige = "main.js 外部事件导入";
export const ceshi1 = "main.js ";

