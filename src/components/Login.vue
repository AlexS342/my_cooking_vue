<template>
    <div class="login">
        <div class="login__windows">
            <div class="login__windowsItem">
                <input class="login__windowsButton__active" type="button" value="Авторизация">
            </div>
            <div class="login__windowsItem">
                <input class="login__windowsButton" type="button" value="Регистрация">
            </div>
        </div>
        <div class="login__form">
            <h3 class="login__formHeader">Авторизация</h3>
            <form class="login__list">
                <label class="login__listLabel" for="username">Email пользователя</label>
                <input class="login__listInput" name="username" id="username" type="email"/>
                <label class="login__listLabel" for="password">Пароль пользователя</label>
                <input class="login__listInput" name="password" id="password" type="password"/>
                <div class="login__listButtons">
                        <input class="login__listButtonsItem" type="button" value="Вход">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    // props: {
    //     msg: String
    // }
}
</script>

<style lang="scss">
.login{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 300px;
    border-radius: 6px;
    box-shadow: 0 0 3px 0 #afafaf;
    margin-top: 10vh;
    background-color: #FFFFFF;
}
.login__windows{
    display: flex;
}
.login__windowsItem{
    width: 50%;
}
.login__windowsButton{
    width: 100%;
    height: 30px;
    border: none;
    color: #818181;
    font-size: 14px;
    box-sizing: border-box;
    border-bottom: 1px solid #d3d3d3;
    background-color: #e9e9e9;
}
.login__windowsButton__active{
    width: 100%;
    height: 30px;
    border: none;
    color: #818181;
    font-size: 14px;
    background-color: #ffffff00;
}
.login__form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 6px;
    box-sizing: border-box;
    color: #2b2b2b;
}
.login__formHeader{
    margin: 12px;
    text-transform: uppercase;
    color: #4d4d4d;
}
.login__list{
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
}
.login__listLabel{
    font-size: 14px;
    margin-left: 16px;
}
.login__listInput{
    margin: 6px 16px 12px 16px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #838383;
    border-radius: 6px;
    font-size: 18px;
}
.login__listInput:focus-visible{
    background-color: #d5ebff;
}
.login__listButtons{
    display: flex;
    justify-content: flex-end;
    margin: 12px;
}
.login__listButtonsItem{
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
.login__listButtonsItem:hover{
    background-color: #d2e9d3;
}
.login__listButtonsItem:active{
    margin: 2px 0 0 0;
    background-color: #beffc1;
    box-shadow: -1px -1px 0 0 #a5a5a5, inset 1px 1px 4px 0 #979797;
}
</style>