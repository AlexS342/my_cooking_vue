<template>
    <div class="header">
        <a class="header__logo" href="/">
            <img class="header__logoImg" alt="logo" src="../assets/icon/chef.png">
            <p class="header__logoName" >Моя кухня</p>
        </a>
        <div class="header__nav">
            <router-link class="header__navLink" to="/recipes">Рецепты</router-link>
            <router-link v-if="GET_IS_AUTH" class="header__navLink" to="/add_recipes">Добавить</router-link>
            <router-link v-if="GET_IS_AUTH" class="header__navLink" to="/profile/1">Профиль</router-link>
        </div>

        <template v-if="!GET_IS_AUTH">
            <router-link class="header__ava" to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4d4d4d" class="bi bi-person-lock" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
                </svg>
                <p class="header__avaText">Вход</p>
<!--            <img class="header__avaImg" alt="logo" src="../assets/icon/man_cook.png">-->
            </router-link>
        </template>
        <template v-if="GET_IS_AUTH">
            <span class="header__ava" v-on:click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4d4d4d" class="bi bi-person-fill-x" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                </svg>
                <p class="header__avaText">Выход</p>
            </span>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from "axios";
export default {
    name: 'Header',
    data() {
        return {
            isAuth:false,
        }
    },
    methods:{
        logout: async function (){

            await axios.post('/logout', )
                .then(() => {
                    //Очистить localStore
                    localStorage.setItem('isAuth', "false");

                    //Очистить store
                    this.$store.dispatch('SET_IS_AUTH_A', false);

                    //Перенаправить пользователя
                    this.$router.push({path:'/'})
                })
                .catch((e)=>{
                    if(e.response.status === 401 || e.response.status === 419){
                        localStorage.setItem('isAuth', "false");
                        this.$store.dispatch('SET_IS_AUTH_A', false);
                        // this.$router.push({path:'/login'})
                    }else {
                        console.log(e)
                    }

                })
        }

    },
    watch: {
        store(n,o){
            console.log(this.$store.getters.GET_IS_AUTH)
        }
    },
    computed: {
        ...mapGetters([
            //перечисляем гетеры из сторе и потом используем как переменные.
            'GET_IS_AUTH',
            // ...
        ])
    }
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
    text-decoration: none;
    color: #4d4d4d;
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
    justify-content: space-around;
    align-items: center;
}
.header__avaImg{
    width: 42px;
}
.header__avaText{
    text-decoration: none;
    color: #4d4d4d;
    font-size: 10px;
    text-transform: uppercase;
}
</style>

