import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from 'pages/home'
import AboutRouter from 'pages/about'
import CaseRouter from 'pages/case'
import ProductRouter from 'pages/product'
import TalentRouter from 'pages/talent'
// import ContackRouter from 'pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //首页路由
      path: '/',
      name: 'HomeRouter',
      component: HomeRouter
    },
    {
      //关于我们
      path: '/about',
      name: 'AboutRouter',
      component: AboutRouter
    },
    {
      //工程案例
      path: '/case',
      name: 'CaseRouter',
      component: CaseRouter
    },
    {
       //产品展示
      path: '/product',
      name: 'ProductRouter',
      component: ProductRouter
    },
    // {
    //    //联系我们
    //   path: '/contact',
    //   name: 'ContactRouter',
    //   component: ContactRouter
    // },
    {
      //人才招聘
      path: '/talent',
      name: 'TalentRouter',
      component: TalentRouter
    }
  ]
})
