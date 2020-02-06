import Vue from 'vue'
import App from './App.vue'

// router package
import VueRouter from 'vue-router'

// components
import Home from '@/views/Home'
import Contact from '@/views/Contact'
import ProductPage from '@/views/ProductPage'
import Cart from '@/views/Cart'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home
  },{
    path: '/contact',
    component: Contact
  },{
    path: '/products/:id',
    component: ProductPage
  },{
    path: '/cart',
    component: Cart
  }]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
