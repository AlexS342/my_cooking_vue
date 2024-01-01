<template>
    <div class="footer">
            <router-link class="footer__link" to="/recipes">Рецепты</router-link>
            <router-link class="footer__link" to="/add_recipes">Добавить</router-link>
            <router-link class="footer__link" to="/cooking">Готовить</router-link>
    </div>
</template>

<script>
export default {
    name: 'Header',
    // props: {
    //     msg: String
    // }
}
</script>

<style scoped lang="scss">
.footer{
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-top: 1px solid #4d4d4d;
    box-shadow: 0 0 5px 0 #4d4d4d;
    background-color: #4d4d4d;
}
.footer__link{
    margin: 6px;
    text-decoration: none;
    color: #CdCdCd;
}
.footer__link:hover{
    color: #0086ff;
    text-decoration: underline;
    text-shadow: 0 0 1px #baff00;
}
</style>