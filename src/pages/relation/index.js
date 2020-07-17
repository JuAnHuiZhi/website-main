import Vue from 'vue'
import Router from 'vue-router'
import relation from 'pages/relation/index'
// import relation from 'pages/relation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/relation',
      name: 'relation',
      component: relation
    }
  ]
})