<template>
    <div class="recipes">
        <h3 class="recipes__header">О приложении</h3>
        <p>Здесь будет отображатся о приложении</p>
        <ul>
            <li>Регистрация:</li>
            <li>Авторизация</li>
            <li>Рецепты</li>
            <li>Готовить</li>
            <li>Добавить рецепт</li>
        </ul>
    </div>
</template>

<script>
// @ является псевдонимом для /src
// import BrieflyRecipe from '@/components/BrieflyRecipe.vue'
import axios from "axios";
export default {
    name: 'AboutView',
    components: {
    },
    data() {
        return {
            data:"",
        }
    },
    created() {
    },
    methods:{
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