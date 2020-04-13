import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import {Decrypt} from "../utils/crypto";
import asideData from "../config/asideMenu";

Vue.use(VueRouter);
const beforeEnter= (to, from, next) => {
  const userinfo=window.localStorage.getItem("userinfo");
  // 判断本次存储里面是否存在
  if(userinfo){
    //存在就解密
    let userinfos=Decrypt(userinfo);
    if(userinfos.token&&userinfos.token.split(".").length===3){
      to.path==="/"?next("/home"):next()
    }else{
      next("/login")
    }
  }else{
    next("/login")
  }
}

const routes = [{
  path:"/",
  beforeEnter,
  redirect:"/login"
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/'),//登录
  },{
    path: '/home',
    name: 'home',
    meta:{
      title:"首页"
    },
    beforeEnter,
    component: () => import('../views/Home/'),//首页
    children:[
    {
      path:"/home/showData",
      name:"data",
      meta:{
        title:"今日概要"
      },
      component: () => import('../views/Home/showData/'),//概要
    },{
      path:"/home/bannerlist",
      name:"banner",
      meta:{
        title:"Banner列表"
      },
      component: () => import('../views/Home/Bannerlist/'),//banner列表
    },{
      path:"/home/shoplist",
      name:"shop",
      meta:{
        title:"商品管理"
      },
      component: () => import('../views/Home/shopList/'),//商品列表
    },{
      path:"/home/shopadd",
      name:"shop",
      meta:{
        title:"商品添加"
      },
      component: () => import('../views/Home/shopAdd/'),//商品添加
    },{
      path:"/home/shoptype",
      name:"shop",
      meta:{
        title:"商品分类"
      },
      component: () => import('../views/Home/shopType/'),//商品分类
    }]
    
  },{
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),//404页面
  },
  {
    path:"/welcome",
    name: 'welcome',
    component: () => import('../views/Home/welcome.vue'),//欢迎来带首页
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


const whitePath=["/login","/home"]
router.beforeEach((to,from,next)=>{
  if(whitePath.includes(to.path)){
    next();
  }else{
    const username=window.localStorage.getItem("username")//从本地取出当前登录的身份
    if(username){
      let target=asideData.find(val=>val.name===to.name).children.find(item=>item.to===to.path).authority
      if(target.includes(username)){
        next()
        return 
      }
      next("/login")
    }
  }
})
export default router;
