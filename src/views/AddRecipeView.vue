<template>
    <div class="recipes">
        <h3 class="recipes__header">Новый рецепт</h3>
        <AddRecipe/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import AddRecipe from '@/components/AddRecipe.vue'
export default {
    name: 'AddRecipeView',
    components: {
        AddRecipe
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