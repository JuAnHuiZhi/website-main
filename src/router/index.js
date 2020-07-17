import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from 'pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeRouter',
      component: HomeRouter
    }
  ]
})
