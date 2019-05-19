// 入口文件
import Vue from 'vue';
// 引入header
import {Header} from 'mint-ui'

//导入App.vue
import app from './App.vue'
//导入Mui CSS文件
import './lib/mui/css/mui.css'


Vue.component(Header.name,Header);

var vm = new Vue({
  el:'#app',
  render:c=>c(app)
})