<template>
    <form class="form w100p" method="post" enctype="multipart/form-data">
        <!--        КАРТИНКА-->
<!--        <div class="list w100p bc2">-->
<!--            <div class="container pd3 w100p">-->
<!--                <div class="title mrb2 w100p">-->
<!--                    <h3 class="titleText">Фото блюда</h3>-->
<!--                    <p class="titleShow" v-if="showImg" v-on:click="changeShowImg">свернуть</p>-->
<!--                    <p class="titleShow" v-if="!showImg" v-on:click="changeShowImg">показать</p>-->
<!--                </div>-->
<!--                <template v-if="showImg">-->
<!--                    <div class="imgWRP">-->
<!--                        <img class="img  w100p" src="../assets/img/grecheskiy-salat.jpg" alt="photo">-->
<!--                    </div>-->
<!--                </template>-->
<!--            </div>-->
<!--        </div>-->

        <!--        СПИСОК ПРОДУКТОВ                -->
        <div class="list w100p bc3">
            <div class="container pd3 w100p">
                <div class="title mrb2 w100p">
                    <h3 class="titleText">Продукты</h3>
                    <p class="titleShow" v-if="showProduct" v-on:click="changeShowProduct">свернуть</p>
                    <p class="titleShow" v-if="!showProduct" v-on:click="changeShowProduct">показать</p>
                </div>
                <template v-if="showProduct">
                    <template v-for="(item, index) in recipe.products">
                        <div class="itemProduct mrt3 w100p">
<!--                            <p class="productIndex w10p">{{ Number(index) + 1 }}.</p>-->
                            <p class="productText w80p">{{ item.name }}</p>
                            <p class="productNum w20p" v-if="item.quantity === null">{{item.units}}</p>
                            <p class="productNum w20p" v-if="item.quantity !== null">{{item.quantity + " " + item.units}}</p>
                        </div>
                    </template>
                </template>
            </div>
        </div>

        <!--        ПРОЦЕСС ПРИГОТОВЛЕНИЯ           -->
        <div class="list w100p bc4">
            <div class="container pd3 w100p">
                <div class="title mrb2 w100p">
                    <h3 class="titleText">Процесс</h3>
                    <p class="titleShow" v-if="showProcess" v-on:click="changeShowProcess">свернуть</p>
                    <p class="titleShow" v-if="!showProcess" v-on:click="changeShowProcess">показать</p>
                </div>
                <template v-if="showProcess">
                    <template v-for="(item, index) in recipe.actions">
                        <div class="itemProcess mrt3 w100p">
<!--                            <p class="number w10p">{{ Number(index) + 1 }}.</p>-->
                            <p class="text w1000p">{{ item.name }}</p>
<!--                            <p class="time w20p" v-if="item.quantity === null">{{ 'н.д.' }}</p>-->
<!--                            <p class="time w20p" v-if="item.quantity !== null">{{ item.quantity + ' ' + item.units }}</p>-->
                        </div>
                    </template>
                </template>
            </div>
        </div>

<!--        Подтверждение удаления рецепта-->
        <div class="windowWRP" v-show="showWindow">
            <div class="window">
                <p class="windowText">
                    Вы уверены, что хотите удалть рецепт
                </p>

                <div class="windowAction">
                    <input class="button" type="button" v-on:click="cancelDeletion" value="Нет">
                    <input class="button" type="button" v-on:click="performDeletion" value="Да">
                </div>

            </div>
        </div>

<!--        Уведомление о событии-->
        <div class="windowWRP" v-show="alertWindow">
            <div class="alertWindow">
                <p class="alertWindowText">
                    {{ this.alertMessage }}
                </p>

                <div class="alertWindowAction">
                    <input class="button" type="button" v-on:click="closeAlertWindow" value="Закрыть">
                </div>

            </div>
        </div>

        <!--        Уведомление о событии неудачном-->
        <div class="windowWRP" v-show="alertWindowRed">
            <div class="alertWindowRed">
                <p class="alertWindowText">
                    {{ this.alertMessageRed }}
                </p>

                <div class="alertWindowAction">
                    <input class="button" type="button" v-on:click="closeAlertWindowRed" value="Закрыть">
                </div>

            </div>
        </div>


        <!--                    КНОПКИ                          -->
        <div class="list w100p">
            <div class="container pd3 w100p">
                <div class="action w100p">
                    <router-link to="/recipes">
                        <input class="button" type="button" value="назад">
                    </router-link>

                    <router-link v-if="showButton()" :to="'/edit_recipes/' +  recipe.id">
                        <input class="button" type="button" value="Изменить">
                    </router-link>

                    <input class="button" type="button" v-if="showButtonMark()" v-on:click="addBookmark" value="Закладка">

                    <input class="button" type="button" v-if="showButton()" v-on:click="confirmDeletion" value="Удалить">

                    <router-link :to="'/cooking/' + recipe.id">
                        <input class="button" type="button" value="готовить">
                    </router-link>
                </div>
            </div>
        </div>

    </form>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
    name: 'Recipe',
    props: {
      recipe: Object,
    },
    data() {
        return {
            showImg: true,
            showProduct: true,
            showProcess: true,
            showWindow: false,
            alertWindow: false,
            alertMessage:'',
            alertWindowRed: false,
            alertMessageRed:'',
        }
    },
    methods: {
        changeShowImg: function () {
            this.showImg = !this.showImg;
        },
        changeShowProduct: function () {
            this.showProduct = !this.showProduct;
        },
        changeShowProcess: function () {
            this.showProcess = !this.showProcess;
        },
        showButton: function (){
            let isAuth = this.$store.getters.GET_IS_AUTH
            let user = this.$store.getters.GET_USER
            let recipe = this.$props.recipe
            if(isAuth && user.id === recipe.user_id){
                return true
            }else{
                return false
            }
        },
        showButtonMark: function () {
            let isAuth = this.$store.getters.GET_IS_AUTH
            let user = this.$store.getters.GET_USER
            let recipe = this.$props.recipe
            if(isAuth && user.id !== recipe.user_id){
                return true
            }else{
                return false
            }
        },
        addBookmark: async function () {
            const url = '/api/set-bookmark-recipe/?recipe_id=' + this.recipe.id
            console.log(url)

            await axios.get(url, )
                .then((response) => {
                    console.log(response)
                    //
                    if(response.data.answer){
                        console.log(response.data.message)
                        this.alertMessage = response.data.message
                        this.openAlertWindow()
                    }else{
                        console.log(response.data.message)
                        this.alertMessageRed = response.data.message
                        this.openAlertWindowRed()
                    //     console.log(response.data.errMessage)
                    //     let message = response.data.message + '; ' + response.data.errMessage
                    //     this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                    }
                })
                .catch((error)=>{
                    console.log(error)
                    this.showWindow = false
                    if(error.response.status === 401 || error.response.status === 419){
                        localStorage.setItem('isAuth', "false");
                        this.$store.dispatch('SET_IS_AUTH_A', false);
                        this.$router.push({path:'/login'})
                    }
                    else {
                        let message = 'Status: ' + error.response.status + '; Code: ' + error.code + '; Message: ' + error.message + '; Response: ' + error.response.data.message
                        this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                        console.log(error)
                    }
                })
        },
        openAlertWindow: function () {
            this.alertWindow = true;
        },
        closeAlertWindow: function () {
            this.alertWindow = false;
        },
        openAlertWindowRed: function () {
            this.alertWindowRed = true;
        },
        closeAlertWindowRed: function () {
            this.alertWindowRed = false;
        },
        confirmDeletion: function () {
            this.showWindow = true
        },
        cancelDeletion: function (){
            this.showWindow = false
        },
        performDeletion: async function (){

            const url = '/api/del-my-recipe/?id=' + this.$props.recipe.id + '&user_id=' + this.$props.recipe.user_id

            await axios.delete(url, )
                .then((response) => {
                    this.showWindow = false

                    if(response.data.answer){
                        console.log(response.data.message)
                        this.$router.push({path:'/recipes'})
                    }else{
                        console.log(response.data.message)
                        console.log(response.data.errMessage)
                        let message = response.data.message + '; ' + response.data.errMessage
                        this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                    }
                })
                .catch((error)=>{
                    console.log(error)
                    this.showWindow = false
                    if(error.response.status === 401 || error.response.status === 419){
                        localStorage.setItem('isAuth', "false");
                        this.$store.dispatch('SET_IS_AUTH_A', false);
                        this.$router.push({path:'/login'})
                    }
                    else {
                        let message = 'Status: ' + error.response.status + '; Code: ' + error.code + '; Message: ' + error.message + '; Response: ' + error.response.data.message
                        this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                        console.log(error)
                    }
                })
        }
    },
    computed: {
        ...mapGetters([
            //перечисляем гетеры из сторе и потом используем как переменные.
            'GET_IS_AUTH',
            'GET_RESPONSE_ERR',
            // ...
        ])
    }
}
</script>

<style scoped lang="scss">

input{
    margin: 0;
    padding: 0;
}

input[type="button"]{
    margin: 0 1px 1px 0;
    color: #333335;
    background-color: #e3e3e3;
    border-radius: 5px;
    border: 1px solid #a1a1a1;
    box-shadow: 1px 1px 0 0 #a5a5a5, inset 1px -1px 4px 0 #979797;
    cursor: pointer;
}

.button:hover{
    background-color: #d2e9d3;
}

.button:active{
    margin: 1px 0 0 1px;
    background-color: #beffc1;
    box-shadow: -1px -1px 0 0 #a5a5a5, inset 1px 1px 4px 0 #979797;
}

.w10p{width: 10%}  .w20p{width: 20%}  .w30p{width: 30%}  .w40p{width: 40%}  .w50p{width: 50%}  .w60p{width: 60%}  .w70p{width: 70%}  .w80p{width: 80%}  .w90p{width: 90%}  .w100p{width: 100%}

.bc1{background-color: #ebffff;}  .bc2{background-color: #f4fff0;}  .bc3{background-color: #fff5f5}  .bc4{background-color: #f5f4ff}

$length-mr1: 3px;  $length-mr2: 6px;  $length-mr3: 12px;

.mr1{margin: $length-mr1}  .mrt1{margin-top: $length-mr1}  .mrr1{margin-right: $length-mr1}  .mrb1{margin-bottom: $length-mr1}  .mrl1{margin-left: $length-mr1}  .mrx1{margin: 0 $length-mr1}  .mry1{margin: $length-mr1 0}
.mr2{margin: $length-mr2}  .mrt2{margin-top: $length-mr2}  .mrr2{margin-right: $length-mr2}  .mrb2{margin-bottom: $length-mr2}  .mrl2{margin-left: $length-mr2}  .mrx2{margin: 0 $length-mr2}  .mry2{margin: $length-mr2 0}
.mr3{margin: $length-mr3}  .mrt3{margin-top: $length-mr3}  .mrr3{margin-right: $length-mr3}  .mrb3{margin-bottom: $length-mr3}  .mrl3{margin-left: $length-mr3}  .mrx3{margin: 0 $length-mr3}  .mry3{margin: $length-mr3 0}

$length-pd1: 3px;  $length-pd2: 6px;  $length-pd3: 12px;

.pd1{padding: $length-pd1}  .pdt1{padding-top: $length-pd1}  .pdr1{padding-right: $length-pd1}  .pdb1{padding-bottom: $length-pd1}  .pdl1{padding-left: $length-pd1}  .pdx1{padding: 0 $length-pd1}  .pdy1{padding: $length-pd1 0}
.pd2{padding: $length-pd2}  .pdt2{padding-top: $length-pd2}  .pdr2{padding-right: $length-pd2}  .pdb2{padding-bottom: $length-pd2}  .pdl2{padding-left: $length-pd2}  .pdx2{padding: 0 $length-pd2}  .pdy2{padding: $length-pd2 0}
.pd3{padding: $length-pd3}  .pdt3{padding-top: $length-pd3}  .pdr3{padding-right: $length-pd3}  .pdb3{padding-bottom: $length-pd3}  .pdl3{padding-left: $length-pd3}  .pdx3{padding: 0 $length-pd3}  .pdy3{padding: $length-pd3 0}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4d4d4d;

    .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid #9b9b9b;

        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            box-sizing: border-box;

            .imgWRP{
                flex-grow: 1;

                .img{
                    min-width: 250px;
                    max-width: 450px;
                }
            }

            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .titleText{
                }
                .titleShow{
                    font-size: 12px;
                    text-decoration: underline;
                }
            }

            .itemProduct{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;
                border-bottom: 1px solid #d1d1d1;

                .productIndex{
                    font-size: 14px;
                    text-align: center;
                }

                .productText{
                    font-size: 14px;
                    text-align: start;
                }

                .productNum{
                    text-align: center;
                    font-size: 14px;
                }
            }

            .itemProcess{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: flex-start;
                box-sizing: border-box;
                border-bottom: 1px solid #d1d1d1;

                .text{
                    font-size: 14px;
                    text-align: start;
                }
                .time{
                    font-size: 14px;
                    text-align: center;
                }
                .number{
                    font-size: 14px;
                    text-align: center;
                }
            }

            .action{
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .button{
                    padding: 6px 6px;
                    font-size: 10px;
                    text-transform: uppercase;
                }
            }
        }
    }

    .windowWRP{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000040;

        .window{
            width: 90%;
            max-width: 400px;
            margin: 0 auto;
            background-color: white;
            border: 2px solid red;
            border-radius: 12px;
            padding: 12px;
            box-sizing: border-box;
            margin-top: 50vh;

            .windowText{
                font-size: 18px;
                font-weight: 700;
                font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
                color: red;
                margin: 12px;
            }
            .windowAction{
                display: flex;
                justify-content: space-around;
            }
            .windowAction>input{
                width: 60px;
                padding: 6px 12px;
                text-align: center;
            }
        }
        .alertWindow{
            width: 90%;
            max-width: 400px;
            margin: 0 auto;
            background-color: #b7ffa6;
            border: 2px solid #3d9600;
            border-radius: 12px;
            padding: 12px;
            box-sizing: border-box;
            margin-top: 50vh;

            .alertWindowText{
                font-size: 18px;
                font-weight: 700;
                font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
                color: #135d00;
                margin: 12px;
            }
            .alertWindowAction{
                display: flex;
                justify-content: flex-end
            }
            .alertWindowAction>input{
                width: 80px;
                padding: 6px 12px;
                text-align: center;
            }
        }
        .alertWindowRed{
            width: 90%;
            max-width: 400px;
            margin: 0 auto;
            background-color: #ffa6a6;
            border: 2px solid #ff0000;
            border-radius: 12px;
            padding: 12px;
            box-sizing: border-box;
            margin-top: 50vh;

            .alertWindowText{
                font-size: 18px;
                font-weight: 700;
                font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
                color: #ff0000;
                margin: 12px;
            }
            .alertWindowAction{
                display: flex;
                justify-content: flex-end
            }
            .alertWindowAction>input{
                width: 80px;
                padding: 6px 12px;
                text-align: center;
            }
        }
    }
}


</style>
