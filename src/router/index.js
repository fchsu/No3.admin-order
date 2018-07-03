import Vue from 'vue'
import Router from 'vue-router'
import HOME from '@/components/HOME'
import ORDERS from '@/components/ORDERS'
import PRODUCT from '@/components/PRODUCT'
import AddProduct from '@/components/AddProduct'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
  	{
      path: '/',
      redirect: '/HOME'
    },
    {
      path: '/HOME',
      name: 'HOME',
      component: HOME
    },
    {
      path: '/ORDERS',
      name: 'ORDERS',
      component: ORDERS
    },
    {
      path: '/PRODUCT',
      name: 'PRODUCT',
      component: PRODUCT
    },
    {
      path: '/PRODUCT/AddProduct',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})
