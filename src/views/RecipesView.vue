<template>
    <div class="recipes">
        <h3 class="recipes__header">Мои рецепты</h3>
        <BrieflyRecipe/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import BrieflyRecipe from '@/components/BrieflyRecipe.vue'
export default {
    name: 'RecipesView',
    components: {
        BrieflyRecipe
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
        margin-top: 12px;
        text-transform: uppercase;
        padding: 12px;
        text-align: center;
    }

</style>