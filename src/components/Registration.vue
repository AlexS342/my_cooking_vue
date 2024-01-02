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
                <input class="listInput" name="name" id="name" type="text" required/>
                <label class="listLabel" for="dateOfBirth">Ваша дата рождения</label>
                <input class="listInput" name="dateOfBirth" id="dateOfBirth" type="date" required/>
                <label class="listLabel" for="gender">Ваш пол (м/ж)</label>
                <select class="listInput" name="dateOfBirth" id="dateOfBirth" required>
                    <option></option>
                    <option value="m">мужской</option>
                    <option value="w">женский</option>
                </select>
                <label class="listLabel" for="username">Ваш email</label>
                <input class="listInput" name="username" id="username" type="email" required/>
                <label class="listLabel" for="password1">Введиде пароль</label>
                <input class="listInput" name="password1" id="password1" type="password" required/>
                <label class="listLabel" for="password2">Повторите пароль</label>
                <input class="listInput" name="password2" id="password2" type="password" required/>
                <div class="listButtons">
                    <input class="listButtonsItem" type="button" value="Регестрация">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Registration',
    // props: {
    //     msg: String
    // }
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
                    cursor: pointer;
                }
                .listButtonsItem:hover{
                    background-color: #d2e9d3;
                }
                .listButtonsItem:active{
                    margin: 2px 0 0 0;
                    background-color: #beffc1;
                    box-shadow: -1px -1px 0 0 #a5a5a5, inset 1px 1px 4px 0 #979797;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>