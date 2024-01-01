<template>
    <div class="recipes">
        <h3 class="recipes__header">Жареная куропатка</h3>
        <Recipe/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import Recipe from '@/components/Recipe.vue'
export default {
    name: 'RecipeView',
    components: {
        Recipe
    },
}
</script>

<style scoped lang="scss">
.recipes{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
}
.recipes__header{
    text-transform: uppercase;
    padding: 12px;
    text-align: center;
}
.recipes__list{
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
}

</style>