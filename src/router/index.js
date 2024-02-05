import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RecipesView from '../views/RecipesView.vue'
import RecipeView from '../views/RecipeView.vue'
import CookingView from '../views/CookingView.vue'
import EditRecipeView from "@/views/EditRecipeView.vue";

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: ProfileView
    //this.$route.params.id
  },
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
    //this.$route.params.id
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
  },
  {
    path: '/edit_recipes/:id',
    name: 'edit_recipes',
    component: EditRecipeView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
