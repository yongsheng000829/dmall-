import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import "./style/index.css";//公共样式

import "./config/element.config";//element组件按需载入
import 'element-ui/lib/theme-chalk/index.css';//element样式
import "./api/index";//api组件引入
import "./components/index";//公共 组件的引用

// window.$aaa=Vue

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
