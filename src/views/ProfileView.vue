<template>
    <div class="recipes">
        <h3 class="recipes__header">Мой профиль</h3>
        <p>Здесь будет отображатся личная информация</p>
        <ul>
            <li>Имя</li>
            <li>Возрост</li>
            <li>Дата рождения</li>
            <li>Гендер</li>
            <li>О себе</li>
        </ul>
    </div>
</template>

<script>
// @ является псевдонимом для /src
// import BrieflyRecipe from '@/components/BrieflyRecipe.vue'
import axios from "axios";
export default {
    name: 'ProfileView',
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