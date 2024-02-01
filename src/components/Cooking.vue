<template>
    <div class="recipe w100p">
<!--        КАРТИНКА                -->
<!--        <div class="list w100p">-->
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
        <div class="list w100p">
            <div class="container pd3 w100p">
                <div class="title mrb2 w100p">
                    <h3 class="titleText">Продукты</h3>
                    <p class="titleShow" v-if="showProduct" v-on:click="changeShowProduct">свернуть</p>
                    <p class="titleShow" v-if="!showProduct" v-on:click="changeShowProduct">показать</p>
                </div>

                <template v-if="showProduct">
                    <div class="listProduct w100p">
                        <template v-for="(item) in this.recipe.products">
                            <div class="itemProduct pdy2 w100p">
                                <div class="check">
                                    <input class="checkInput mrr2" type="checkbox">
                                    <label class="checkLabel">{{item.name}}</label>
                                </div>
                                <p class="weight" v-if="item.quantity === null">{{item.units}}</p>
                                <p class="weight" v-if="item.quantity !== null">{{ item.quantity + " " + item.units}}</p>
                            </div>
                        </template>

                    </div>
                </template>
            </div>
        </div>

<!--        ПРОЦЕСС ПРИГОТОВЛЕНИЯ           -->
        <div class="list w100p">
            <div class="container pd3 w100p">
                <div class="title mrb2 w100p">
                    <h3 class="titleText">Процесс</h3>
                    <p class="titleShow" v-if="showProcess" v-on:click="changeShowProcess">свернуть</p>
                    <p class="titleShow" v-if="!showProcess" v-on:click="changeShowProcess">показать</p>
                </div>

                <template v-if="showProcess">
                    <div class="listProcess w100p">
                        <template v-for="(item) in recipe.actions">
                            <div class="itemProcess pdy2 w100p">
                                <div class="check">
                                    <input class="checkInput mrr2" type="checkbox">
                                    <label class="checkLabel">{{item.name}}</label>
                                </div>
                                <div class="time pdy1">
                                    <p class="timeWeight" v-if="checkingDataType(item.quantity, item.units)">{{ item.quantity + " " + item.units}}</p>
                                </div>
                            </div>
                        </template>

                    </div>
                </template>
            </div>
        </div>

<!--        КНОПКИ                          -->
        <div class="list w100p">
            <div class="container pd3 w100p">
                <div class="action w100p">
                    <router-link :to="'/recipe/' + recipe.id">
                        <input class="button" type="button" value="отмена">
                    </router-link>
                    <router-link to="/recipes">
                        <input class="button" type="button" value="готово">
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Cooking',
    props: {
        recipe: Object,
    },
    data() {
        return {
            showImg: true,
            showProduct: true,
            showProcess: true,
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
        checkingDataType: function (a, b){
            // if(a != null){
            //     return a + ' ' + b
            // }else{
            //     return b
            // }
            return Number.isInteger(a) && typeof b === 'string';
        }
    }
}
</script>

<!-- Добавьте атрибут "scoped", чтобы ограничить CSS только этим компонентом -->
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

$length-mr1: 3px;  $length-mr2: 6px;  $length-mr3: 12px;

.mr1{margin: $length-mr1}  .mrt1{margin-top: $length-mr1}  .mrr1{margin-right: $length-mr1}  .mrb1{margin-bottom: $length-mr1}  .mrl1{margin-left: $length-mr1}  .mrx1{margin: 0 $length-mr1}  .mry1{margin: $length-mr1 0}
.mr2{margin: $length-mr2}  .mrt2{margin-top: $length-mr2}  .mrr2{margin-right: $length-mr2}  .mrb2{margin-bottom: $length-mr2}  .mrl2{margin-left: $length-mr2}  .mrx2{margin: 0 $length-mr2}  .mry2{margin: $length-mr2 0}
.mr3{margin: $length-mr3}  .mrt3{margin-top: $length-mr3}  .mrr3{margin-right: $length-mr3}  .mrb3{margin-bottom: $length-mr3}  .mrl3{margin-left: $length-mr3}  .mrx3{margin: 0 $length-mr3}  .mry3{margin: $length-mr3 0}

$length-pd1: 3px;  $length-pd2: 6px;  $length-pd3: 12px;

.pd1{padding: $length-pd1}  .pdt1{padding-top: $length-pd1}  .pdr1{padding-right: $length-pd1}  .pdb1{padding-bottom: $length-pd1}  .pdl1{padding-left: $length-pd1}  .pdx1{padding: 0 $length-pd1}  .pdy1{padding: $length-pd1 0}
.pd2{padding: $length-pd2}  .pdt2{padding-top: $length-pd2}  .pdr2{padding-right: $length-pd2}  .pdb2{padding-bottom: $length-pd2}  .pdl2{padding-left: $length-pd2}  .pdx2{padding: 0 $length-pd2}  .pdy2{padding: $length-pd2 0}
.pd3{padding: $length-pd3}  .pdt3{padding-top: $length-pd3}  .pdr3{padding-right: $length-pd3}  .pdb3{padding-bottom: $length-pd3}  .pdl3{padding-left: $length-pd3}  .pdx3{padding: 0 $length-pd3}  .pdy3{padding: $length-pd3 0}

.recipe{
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

            .imgWRP{
                flex-grow: 1;

                .img{
                    min-width: 250px;
                    max-width: 450px;
                }
            }

            .listProduct {
                display: flex;
                flex-direction: column;

                .itemProduct {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;
                    border-bottom: 1px solid #dddddd;

                    .check{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        align-items: center;

                        .checkInput{
                            min-width: 24px;
                            max-width: 24px;
                            min-height: 24px;
                            max-height: 24px;
                        }
                        .checkLabel{}
                    }
                    .weight{
                        min-width: 65px;
                        max-width: 65px;
                        text-align: end;
                    }
                }
            }

            .itemProduct:nth-last-child(1){
                border: none;
            }

            .listProcess{
                display: flex;
                flex-direction: column;

                .itemProcess{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: flex-start;
                    box-sizing: border-box;
                    border-bottom: 1px solid #dddddd;

                    .check{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        align-items: flex-start;

                        .checkInput{
                            min-width: 24px;
                            max-width: 24px;
                            min-height: 24px;
                            max-height: 24px;
                        }
                        .checkLabel{}
                    }

                    .time{
                        min-width: 60px;
                        max-width: 60px;
                        //background-color: #d7d7ff;
                        //border-radius: 4px;

                        .timeWeight{
                            min-width: 50px;
                            max-width: 50px;
                            text-align: center;

                            background-color: #d7d7ff;
                            border-radius: 4px;
                        }
                    }
                }
            }

            .itemProcess:nth-last-child(1){
                border: none;
            }

            .action{
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .button{
                    padding: 6px 12px;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
            }
        }
    }
}


</style>





<!--<style scoped lang="scss">-->
<!--input{-->
<!--    margin: 0;-->
<!--    padding: 0;-->
<!--}-->

<!--.recipe{-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    max-width: 600px;-->
<!--    color: #4d4d4d;-->

<!--.mainImg{-->
<!--    max-width: 100%;-->
<!--    margin: 12px;-->
<!--}-->

<!--.listWRP{-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    color: #4d4d4d;-->
<!--    margin-bottom: 12px;-->

<!--    .title{-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        margin: 12px;-->
<!--        align-items: center;-->

<!--        .titleText{-->
<!--        }-->
<!--        .titleShow{-->
<!--            font-size: 12px;-->
<!--            text-decoration: underline;-->
<!--        }-->
<!--    }-->

<!--    .list{-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        max-width: 600px;-->
<!--        box-shadow: 0 -6px 16px -16px #9b9b9b;-->

<!--        .itemProduct{-->
<!--            display: flex;-->
<!--            flex-direction: row;-->
<!--            flex-wrap: nowrap;-->
<!--            justify-content: space-between;-->
<!--            align-items: center;-->
<!--            padding: 10px 12px;-->
<!--            margin-bottom: 2px;-->
<!--            box-shadow: 0 4px 16px -12px #9b9b9b;-->

<!--            .check{-->
<!--                display: flex;-->
<!--                flex-direction: row;-->
<!--                flex-wrap: nowrap;-->
<!--                align-items: center;-->

<!--                .input{-->
<!--                    width: 24px;-->
<!--                    height: 24px;-->
<!--                    margin-right: 8px;-->
<!--                }-->
<!--                .text{-->
<!--                    font-size: 16px;-->
<!--                    line-height: 16px;-->
<!--                    margin-top: 4px;-->
<!--                }-->
<!--            }-->
<!--            .weight{-->
<!--                text-align: center;-->
<!--                font-size: 16px;-->
<!--                line-height: 16px;-->
<!--                width: 70px;-->
<!--                margin-top: 6px;-->
<!--            }-->
<!--        }-->

<!--        .itemProcess{-->
<!--            display: flex;-->
<!--            flex-direction: row;-->
<!--            flex-wrap: nowrap;-->
<!--            align-items: center;-->
<!--            padding: 8px 12px;-->
<!--            margin-bottom: 2px;-->
<!--            box-shadow: 0 4px 16px -12px #9b9b9b;-->

<!--            .icon{-->
<!--                    width: 24px;-->
<!--                    height: 24px;-->
<!--                    margin-right: 6px;-->
<!--                }-->
<!--            .check{-->
<!--                    min-width: 24px;-->
<!--                    min-height: 24px;-->
<!--                    margin-right: 12px;-->
<!--                }-->
<!--            .action{-->
<!--                    word-break: break-word;-->
<!--                    text-align: justify;-->
<!--                    -moz-hyphens: auto;-->
<!--                    -webkit-hyphens: auto;-->
<!--                    -ms-hyphens: auto;-->
<!--                }-->
<!--        }-->
<!--    }-->
<!--}-->

<!--.action{-->
<!--    display: flex;-->
<!--    flex-direction: row;-->
<!--    justify-content: space-between;-->
<!--    margin: 12px;-->

<!--    .button{-->
<!--        margin: 0 1px 1px 0;-->
<!--        padding: 6px 16px;-->
<!--        font-size: 14px;-->
<!--        font-weight: 700;-->
<!--        color: #333335;-->
<!--        text-transform: uppercase;-->
<!--        background-color: #e3e3e3;-->
<!--        border-radius: 5px;-->
<!--        border: 1px solid #a1a1a1;-->
<!--        box-shadow: 1px 1px 0 0 #a5a5a5, inset 1px -1px 4px 0 #979797;-->
<!--        cursor: pointer;-->
<!--    }-->
<!--    .button:hover{-->
<!--        background-color: #d2e9d3;-->
<!--    }-->
<!--    .button:active{-->
<!--        margin: 1px 0 0 1px;-->
<!--        background-color: #beffc1;-->
<!--        box-shadow: -1px -1px 0 0 #a5a5a5, inset 1px 1px 4px 0 #979797;-->
<!--    }-->
<!--}-->
<!--}-->

<!--</style>-->
