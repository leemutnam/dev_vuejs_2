import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/test-component'
import Home from '../components/home-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/confirm-page',
    //   name: 'ConfirmPage',
    //   component: ConfirmPage,
    //   props: (route) => ({
    //     name: route.query.name
    //   })
    // }
  ]
})
