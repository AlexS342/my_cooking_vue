import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RecipesView from '../views/RecipesView.vue'
import RecipeView from '../views/RecipeView.vue'
import CookingView from '../views/CookingView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeView
  },
  {
    path: '/cooking/:id',
    name: 'cooking',
    component: CookingView
  },
  {
    path: '/add_recipes',
    name: 'add_recipes',
    // разделение кода на уровне маршрута
    // это генерирует отдельный фрагмент (about.[hash].js) для этого маршрута
    // который загружается в режиме ожидания при посещении маршрута.
    component: () => import('../views/AddRecipeView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
