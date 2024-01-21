<template>
    <div class="login">
        <div class="windows">
            <div class="windowsItem">
                <input class="windowsButton" v-on:click="$emit('getLogin')" type="button" value="Авторизация">
            </div>
            <div class="windowsItem">
                <input class="windowsButton__active" type="button" value="Регистрация">
            </div>
        </div>
        <div class="form">
            <h3 class="formHeader">Регистрация</h3>
            <form class="list">

                <label class="listLabel" for="name">Ваше имя</label>
                <input class="listInput" name="name" id="name" type="text" v-model="name"/>

<!--                <label class="listLabel" for="dateOfBirth">Ваша дата рождения</label>-->
<!--                <input class="listInput" name="dateOfBirth" id="dateOfBirth" type="date" required/>-->

<!--                <label class="listLabel" for="gender">Ваш пол (м/ж)</label>-->
<!--                <select class="listInput" name="gender" id="gender" required>-->
<!--                    <option></option>-->
<!--                    <option value="m">мужской</option>-->
<!--                    <option value="w">женский</option>-->
<!--                </select>-->

                <label class="listLabel" for="username">Ваш email</label>
                <input class="listInput" name="username" id="username" type="email" v-model="username"/>

                <label class="listLabel" for="password">Введиде пароль</label>
                <input class="listInput" name="password" id="password" type="password" v-model="password"/>

                <label class="listLabel" for="password_confirmation">Повторите пароль</label>
                <input class="listInput" name="password_confirmation" id="password_confirmation" type="password" v-model="password_confirmation"/>

                <div class="listButtons">
                    <input :class="activeButton" :disabled="isButtonDisabled" type="button" v-on:click="sendData" value="Регестрация">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Registration',
    // props: {
    //     msg: String
    // }
    data() {
        return {
            //test1@example.com // 123
            name:"",
            username:"",
            password:"",
            password_confirmation:"",
            nameBool:false,
            usernameBool:false,
            passwordBool:false,

            isButtonDisabled: true,
            activeButton:"listButtonsItem__disable"
            // activeButton:"listButtonsItem"
        }
    },
    methods: {
        /**
         * При нажатии на кнопку "Вход" делает запрос на аутентификацию
         */
        sendData: async function() {

            await axios
                .post('/register', {
                    name: this.name,
                    email: this.username,
                    password:this.password,
                    password_confirmation: this.password_confirmation
                })
                .then((response) => {
                    console.log('Регистрация успешна')
                    console.log(response)
                    localStorage.setItem('isAuth', "true");
                    this.$store.dispatch('SET_IS_AUTH_A', true);

                    this.$router.push({path:'/recipes'})
                })
                .catch(function (error) {
                    console.log('Ошибка регистрации')
                    console.log(error);
                });
        },

        /**
         * Активирует/Деактивирует кнопку "Регистрация" на вкладке "Регистрация"
         */
        statusRegistrationButton: function (){
            if(this.passwordBool && this.usernameBool && this.nameBool){
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
         * Отслеживаем ввод имени, если валиден, то поднимаем один из флагов для активации кнопки "Регистрация" и вызывает statusLoginButton
         * @param n - (boolean) новое значение при изменении состояния
         */
        name(n){
            this.nameBool = n.length >= 3 && n.length <= 25;
            this.statusRegistrationButton()
        },

        /**
         * Отслеживает ввод подтверждения пароля, если длина от 3 до 20 символов и совпадение с паролем, то поднимаем
         * один из флагов для активации кнопки "Регистрация" и вызывает statusLoginButton
         * @param n
         */
        username(n){
            this.usernameBool = n.length >= 8 && n.length <= 30;
            this.statusRegistrationButton()
        },

        /**
         * Отслеживаем ввод пароля, если валиден, то поднимаем флад для активации кнопки "Регистрация" и вызывает statusLoginButton
         * @param n - (boolean) новое значение при изменении состояния
         */
        password_confirmation(n){
            this.passwordBool = n.length >= 3 && n.length <= 20 && this.password_confirmation === this.password;
            this.statusRegistrationButton()
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
                cursor: pointer;
            }
            .windowsButton:hover{
                cursor: pointer;
                background-color: #e8ecfb;
            }
            .windowsButton:active{
                background-color: #beffc1;
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