<template>
    <div class="recipes">
        <h3 class="recipes__header">{{this.recipe.title }}</h3>
        <Cooking v-bind:recipe="this.recipe"/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import Cooking from '@/components/Cooking.vue'
import {mapGetters} from "vuex";
export default {
    name: 'CookingView',
    components: {
        Cooking
    },
    data() {
        return {
            //пустой recipe объект для инициализации
            recipe:{},
            //объект recipes заменяет получение данных от backend
            recipes:{}
        }
    },
    created() {
        let data = localStorage.getItem('recipe')
        this.recipe = JSON.parse(data)
    },
    watch: {

    },
    computed: {
        ...mapGetters([
            //перечисляем гетеры из сторе и потом используем как переменные.
            'GET_RECIPE',
            // ...
        ])
    }
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