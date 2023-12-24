<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/chef.png">
    <h1>Мои рецепты</h1>
    <Recipe msg="Передаем пропс в компонент"/>
  </div>
</template>

<script>
// @ является псевдонимом для /src
import Recipe from '@/components/Recipe.vue'
export default {
  name: 'RecipesView',
  components: {
    Recipe
  }
}
</script>