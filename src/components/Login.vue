<template>
    <div class="login">
        <div class="windows">
            <div class="windowsItem">
                <input class="windowsButton__active" type="button" value="Авторизация">
            </div>
            <div class="windowsItem">
                <input class="windowsButton" v-on:click="$emit('getRegistration')" type="button" value="Регистрация">
            </div>
        </div>
        <div class="form">
            <h3 class="formHeader">Авторизация</h3>
            <form class="list">
                <label class="listLabel" for="username">Email пользователя</label>
                <input class="listInput" name="username" id="username" type="email" v-model="login" placeholder="user@example.com"/>
                <label class="listLabel" for="password">Пароль пользователя</label>
                <input class="listInput" name="password" id="password" type="password" v-model="password"/>
                <div class="listButtons">
                    <input :class="activeButton" type="button" :disabled="isButtonDisabled" v-on:click="sendData" value="Вход">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Login',
    // props: {
    //     isAuth: Boolean
    // },
    data() {
        return {
            //test1@example.com // 123
            login:"",
            password:"",
            loginBool: false,
            passwordBool: false,
            isButtonDisabled: true,
            activeButton:"listButtonsItem__disable"
        }
    },
    created() {
        /**
         * Открываем сессию и получаем токен
         */
        axios.get('/sanctum/csrf-cookie' )
            .then(
                // response => {}
            )
            .catch(
                (error) => {
                    console.log(error);
                    let message = 'Status: ' + error.response.status + '; Code: ' + error.code + '; Message: ' + error.message + '; Response: ' + error.response.data.message
                    this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                })
    },
    methods: {
        /**
         * При нажатии на кнопку "Вход" делает запрос на аутентификацию
         */
         sendData: async function() {
            await axios
                .post('/login', {
                        email: this.login,
                        password: this.password,
                })
                .then(() => {
                    localStorage.setItem('isAuth', "true");
                    this.$store.dispatch('SET_IS_AUTH_A', true);

                    this.$router.push({path:'/recipes'})
                })
                .catch(
                    (error) => {
                        let message = 'Status: ' + error.response.status + '; Code: ' + error.code + '; Message: ' + error.message + '; Response: ' + error.response.data.message
                        this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message, error.response.status]);
                        console.log(error)
                        if(error.response.status === 401 || error.response.status === 419){
                            this.$router.push({path:'/login'})
                        }
                    });
        },
        /**
         * Активирует/Деактивирует кнопку "Вход" на вкладке "Авторизация"
         */
        statusLoginButton: function (){
            if(this.passwordBool && this.loginBool){
                this.isButtonDisabled = false;
                this.activeButton = "listButtonsItem";
            }else{
                this.isButtonDisabled = true;
                this.activeButton = "listButtonsItem__disable";
            }
        },
    },
    watch: {
        //Отслеживает состояние, если изменилось, то выполняется
        /**
         * Отслеживаем ввод логина, если валиден, то поднимаем флад для активации кновки "Вход" и вызывает statusLoginButton
         * @param n - (boolean) новое значение при изменении состояния
         */
        login(n){
            this.loginBool = n.length >= 8;
            this.statusLoginButton()
        },
        /**
         * Отслеживаем ввод пароля, если валиден, то поднимаем флад для активации кновки "Вход" и вызывает statusLoginButton
         * @param n - (boolean) новое значение при изменении состояния
         */
        password(n){
            this.passwordBool = n.length >= 3;
            this.statusLoginButton()
        },
    }
}
</script>

<style scoped lang="scss">
.login{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 300px;
    border-radius: 6px;
    box-shadow: 0 0 3px 0 #afafaf;
    margin-top: 10vh;
    background-color: #FFFFFF;

    .windows{
        display: flex;

        .windowsItem{
            width: 50%;

            .windowsButton{
                width: 100%;
                height: 30px;
                border: none;
                color: #818181;
                font-size: 14px;
                box-sizing: border-box;
                border-bottom: 1px solid #d3d3d3;
                background-color: #e9e9e9;
            }
            .windowsButton:hover{
                cursor: pointer;
                background-color: #e8ecfb;
            }
            .windowsButton__active{
                width: 100%;
                height: 30px;
                border: none;
                color: #818181;
                font-size: 14px;
                background-color: #ffffff00;
            }
        }
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 6px;
        box-sizing: border-box;
        color: #2b2b2b;

        .formHeader{
            margin: 12px;
            text-transform: uppercase;
            color: #4d4d4d;
        }
        .list{
            display: flex;
            flex-direction: column;
            width: 100%;
            box-sizing: border-box;
            padding: 6px;

            .listLabel{
                font-size: 14px;
                margin-left: 16px;
            }
            .listInput{
                margin: 6px 16px 12px 16px;
                height: 32px;
                box-sizing: border-box;
                border: 1px solid #838383;
                border-radius: 6px;
                font-size: 18px;
            }
            .listInput:focus-visible{
                background-color: #d5ebff;
            }
            .listButtons{
                display: flex;
                justify-content: flex-end;
                margin: 12px;

                .listButtonsItem{
                    margin: 0 0 2px 0;
                    padding: 6px 24px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #333335;
                    text-transform: uppercase;
                    background-color: #e3e3e3;
                    border-radius: 5px;
                    border: 1px solid #a1a1a1;
                    box-shadow: 1px 1px 0 0 #a5a5a5, inset 0 -1px 4px 0 #979797;
                }
                .listButtonsItem:hover{
                    background-color: #d2e9d3;
                }
                .listButtonsItem:active{
                    margin: 2px 0 0 0;
                    background-color: #beffc1;
                    box-shadow: -1px -1px 0 0 #a5a5a5, inset 1px 1px 4px 0 #979797;
                }
                .listButtonsItem__disable{
                    margin: 0 0 2px 0;
                    padding: 6px 24px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #a7a7a7;
                    text-transform: uppercase;
                    background-color: #8f8f8f;
                    border-radius: 5px;
                    border: 1px solid #cbcbcb;
                    box-shadow: 1px 1px 0 0 #a5a5a5, inset 0 -1px 4px 0 #ffffff;
                }
            }
        }
    }
}
</style>