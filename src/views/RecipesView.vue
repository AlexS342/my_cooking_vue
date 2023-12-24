<template>
    <div class="recipes">
        <h3 class="recipes__header">Мои рецепты</h3>
        <div class="recipes__list">
            <BrieflyRecipe/>
            <BrieflyRecipe/>
            <BrieflyRecipe/>
            <BrieflyRecipe/>
            <BrieflyRecipe/>
            <BrieflyRecipe/>
            <BrieflyRecipe/>
            <BrieflyRecipe/>
        </div>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import BrieflyRecipe from '@/components/BrieflyRecipe.vue'
export default {
  name: 'RecipesView',
  components: {
      BrieflyRecipe
  }
}
</script>

<style lang="scss">
    .recipes{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
    }
    .recipes__header{
        text-transform: uppercase;
        padding: 12px;
    }
    .recipes__list{
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
    }

</style>