import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import "./utils/sendRem";//css适配
import "./style/index.css";//css全局样式
import "./components/index";
import "./static/font/iconfont.css"//font的样式
import "vant/lib/index.css"//vant的样式
import "./config/vant.config";//vantUi组件的引入

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
