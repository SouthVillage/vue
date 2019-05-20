// 入口文件
import Vue from 'vue';
// 引入header
import {Header} from 'mint-ui'

//导入App.vue
import app from './App.vue'
//导入Mui CSS文件
import './lib/mui/css/mui.css'

//导入 mui  css扩展图标文件
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name,Header);

//引入路由
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './router.js'

//轮播图
import { Swipe, SwipeItem } from 'mint-ui';


//vue-resource
import Vueresource from 'vue-resource'
Vue.use(Vueresource)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})