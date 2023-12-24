import { createRouter, createWebHashHistory } from 'vue-router'
import RecipesView from '../views/RecipesView.vue'

const routes = [
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView
  },
  {
    path: '/add_recipes',
    name: 'add_recipes',
    // разделение кода на уровне маршрута
    // это генерирует отдельный фрагмент (about.[hash].js) для этого маршрута
    // который загружается в режиме ожидания при посещении маршрута.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddRecipesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
