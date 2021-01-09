import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Restaurants.vue'),
    },
    {
      path: '/restaurant/:name',
      component: () => import('./views/Restaurant.vue'),
    },
    {
      path: '/cart',
      component: () => import('./views/Cart.vue'),
    },
  ],
})
export default router
