import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path:"/",
  redirect:"/login"
},
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:"/frist",
    name:"frist",
    meta:{
      title:"一级首页",
      keeplive:true
    },
    component:()=>import("../views/Frist/index.vue"),
    children:[{
      path:"/",
      redirect:"/frist/home"
    },{
      path:"/frist/home",
      name:"home",
      meta:{
        title:"首页",
      keeplive:true
      },
      component:()=>import("../views/Frist/Home/")//首页
    },{
      path:"/frist/fitfiy",
      name:"fitfiy",
      meta:{
        title:"分类",
      keeplive:true
      },
      component:()=>import("../views/Frist/Fitfiy/")//分类
    },{
      path:"/frist/shop",
      name:"shop",
      meta:{
        title:"购物车",
      keeplive:true
      },
      component:()=>import("../views/Frist/Shop/")//购物车
    },{
      path:"/frist/mine",
      name:"mine",
      meta:{
        title:"我的",
        keeplive:true
      },
      component:()=>import("../views/Frist/Mine/")//我的
    }]
  },
  {
    path:"/getcar",
    name:"getcar",
    meta:{
      title:"商品详情",
      keeplive:false
    },
    component:()=>import("../views/GetCar/")//商品详情
  },{
    path:"/addressLoad",
    name:"addressLoad",
    meta:{
      title:"加载定位",
      keeplive:false
    },
    beforeEnter: (to, from, next) => {
      let address=localStorage.getItem("loadaction")&&JSON.parse(localStorage.getItem("loadaction"))
      if(address){
        next("/frist");
        return
      }
      next() 
    },
    component:()=>import("../views/AddressLoad/")//首页定位
  },  {
    path:"/setAddress",
    name:"setAddress",
    meta:{
      title:"设置地址",
      keeplive:false
    },
    component:()=>import("../views/setAddress/")//手动设置地址
  },{
    path:"/login",
    name:"login",
    meta:{
      title:"登录页面",
      keeplive:false
    },
    component:()=>import("../views/Login/")//登录
  },{
    path:"/search",
    name:"search",
    meta:{
      title:"搜索页面",
      keeplive:false
    },
    component:()=>import("../views/Search/")//搜索页面
  },{
    path:"/404",
    name:"404",
    meta:{
      title:"404",
      keeplive:false
    },
    component:()=>import("../views/404.vue")//404页面
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export {routes}
export default router;
