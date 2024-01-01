<template>
    <div class="header">
        <div class="header__logo">
            <img class="header__logoImg" alt="logo" src="../assets/icon/chef.png">
            <p class="header__logoName" >Моя кухня</p>
        </div>
        <div class="header__nav">
            <router-link class="header__navLink" to="/recipes">Рецепты</router-link>
            <router-link class="header__navLink" to="/recipe">Рецепт</router-link>
            <router-link class="header__navLink" to="/add_recipes">Добавить</router-link>
            <router-link class="header__navLink" to="/cooking">Готовить</router-link>
        </div>
        <div class="header__ava">
            <img class="header__avaImg" alt="logo" src="../assets/icon/man_cook.png">
        </div>
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
.header{
    display: flex;
    flex-grow: 1;
    padding: 12px;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid #C0C0C0;
    box-shadow: 0 0 5px 0 #C0C0C0;
}
.header__logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60px;
}
.header__logoImg{
    width: 42px;
}
.header__logoName{
    margin: 6px 0 0 0;
    font-size: 10px;
    text-transform: uppercase;
}
.header__nav{
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: center;
}
.header__navLink{
    margin: 6px;
    text-decoration: none;
    color: #4d4d4d;
}
.header__navLink:hover{
    color: #0086ff;
    text-decoration: underline;
}

.header__ava{
    display: flex;
    flex-direction: column;
}
.header__avaImg{
    width: 42px;
}
</style>


<!--<template>-->
<!--    <div class="hello">-->
<!--        <h1>{{ msg }}</h1>-->
<!--        <p>-->
<!--            Какой-то рецепт из компонента-->
<!--            <a href="#" target="_blank" rel="noopener">Приготовить этот рецепт</a>.-->
<!--        </p>-->
<!--        <h3>Продукты</h3>-->
<!--        <ul>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Морковь</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Лук репчатый</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Петрушка</a></li>-->
<!--        </ul>-->
<!--        <h3>Посуда</h3>-->
<!--        <ul>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Чашка</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Ложка</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Вылка</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Сковорода</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Скалка</a></li>-->
<!--        </ul>-->
<!--        <h3>Авторы</h3>-->
<!--        <ul>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Вася</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Петя</a></li>-->
<!--            <li><a href="#" target="_blank" rel="noopener">Маша</a></li>-->
<!--        </ul>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    name: 'Recipe',-->
<!--    props: {-->
<!--        msg: String-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Добавьте атрибут "scoped", чтобы ограничить CSS только этим компонентом &ndash;&gt;-->
<!--<style scoped lang="scss">-->
<!--h3 {-->
<!--    margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
<!--    list-style-type: none;-->
<!--    padding: 0;-->
<!--}-->
<!--li {-->
<!--    display: inline-block;-->
<!--    margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--    color: #42b983;-->
<!--}-->
<!--</style>-->
