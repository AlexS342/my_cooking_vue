<template>
<!--    <div class="addRecipe">-->
        <form class="form w100p" method="post" enctype="multipart/form-data">

<!--        НАЗВАНИЕ РЕЦЕПТА-->
            <div class="list w100p bc1">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Название рецепта</h3>
                        <p class="titleShow">свернуть</p>
                    </div>
                    <label class="hint mr1" for="name">Введите название рецепта</label>
                    <input class="inputName mrx3 w100p" id="name" name="name" type="text">
                </div>
            </div>

<!--        КАРТИНКА-->
            <div class="list w100p bc2">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Фото блюда</h3>
                        <p class="titleShow">свернуть</p>
                    </div>
                    <div class="imgWRP">
                        <img class="img  w100p" src="../assets/img/grecheskiy-salat.jpg" alt="photo">
                    </div>
                    <span class="text mr1">Загрузите изображение готового блюда</span>
                    <input class="inputFile" name="file-input" type="file" multiple>
                    <label class="labelInputFile pdx3" for="file-input">Выберите файл <input class="inputFile" name="file-input" type="file" multiple></label>
                </div>
            </div>

        <!--        СПИСОК ПРОДУКТОВ                -->
            <div class="list w100p bc3">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Добавить продукты</h3>
                        <p class="titleShow">свернуть</p>
                    </div>
                    <div class="subtitleList w100p">
                        <p class="subtitleItem w60p">продукт</p>
                        <p class="subtitleItem w20p">вес</p>
                        <p class="subtitleItem w20p">ед.</p>
                    </div>
                    <div class="itemProduct mrt2 w100p">
                        <input class="inputText pdl1 w60p" type="text">
                        <input class="inputNum w20p" type="number">
                        <select class="select w20p">
                            <option class="option" value="г.">г.</option>
                            <option class="option" value="ст.л.">ст.л.</option>
                            <option class="option" value="ч.л.">ч.л.</option>
                            <option class="option" value="шт">шт</option>
                            <option class="option" value="ст">ст</option>
                            <option class="option" value="по вкусу">по вкусу</option>
                        </select>
                    </div>
                    <div class="itemProduct mrt2 w100p">
                        <input class="inputText pdl1 w60p" type="text">
                        <input class="inputNum w20p" type="number">
                        <select class="select w20p">
                            <option value="г.">г.</option>
                            <option value="ст.л.">ст.л.</option>
                            <option value="ч.л.">ч.л.</option>
                            <option value="шт">шт</option>
                            <option value="ст">ст</option>
                            <option value="по вкусу">по вкусу</option>
                        </select>
                    </div>
                    <div class="itemProduct mrt2 w100p">
                        <input class="inputText pdl1 w60p" type="text">
                        <input class="inputNum w20p" type="number">
                        <select class="select w20p">
                            <option value="г.">г.</option>
                            <option value="ст.л.">ст.л.</option>
                            <option value="ч.л.">ч.л.</option>
                            <option value="шт">шт</option>
                            <option value="ст">ст</option>
                            <option value="по вкусу">по вкусу</option>
                        </select>
                    </div>
                    <div class="editItem mrt3 w100p">
                        <input class="button" type="button" value="удалить поле">
                        <input class="button" type="button" value="добавить поле">
                    </div>
                </div>
            </div>

            <!--        ПРОЦЕСС ПРИГОТОВЛЕНИЯ           -->
            <div class="list w100p bc4">
                <div class="container pd3 w100p">
                <div class="title mrb2 w100p">
                    <h3 class="titleText">Добавить процесс</h3>
                    <p class="titleShow">свернуть</p>
                </div>
                <div class="subtitleList w100p">
                    <p class="subtitleItem w100p">Поэтапный процесс приготовления</p>
                </div>
                <div class="itemProcess mrt2 w100p">
                    <p class="number mrr2">1.</p>
                    <textarea class="textarea w100p" rows="3"></textarea>
                </div>
                <div class="itemProcess mrt2 w100p">
                    <p class="number mrr2">2.</p>
                    <textarea class="textarea w100p" rows="3"></textarea>
                </div>
                    <div class="editItem mrt3 w100p">
                        <input class="button" type="button" value="удалить поле">
                        <input class="button" type="button" value="добавить поле">
                    </div>
                </div>
            </div>

<!--                    КНОПКИ                          -->
            <div class="list w100p">
                <div class="container pd3 w100p">
                    <div class="action w100p">
                        <router-link to="/recipes">
                            <input class="button" type="button" value="отмена">
                        </router-link>

                        <input class="button" type="button" value="сохранить">
                    </div>
                </div>
            </div>

        </form>
<!--    </div>-->
</template>

<script>
export default {
    name: 'AddRecipe',
    // props: {
    //   msg: String
    // }
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
    //width: 100%;
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
                    //width: 100%;
                }
            }

            .text{
                font-size: 12px;
            }

            .labelInputFile{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 1px 1px 0;
                height: 30px;
                box-sizing: border-box;
                font-size: 14px;
                font-weight: 700;
                color: #333335;
                text-transform: uppercase;
                background-color: #e3e3e3;
                border-radius: 5px;
                border: 1px solid #a1a1a1;
                box-shadow: 1px 1px 0 0 #a5a5a5, inset 1px -1px 4px 0 #979797;
                cursor: pointer;
                position: relative;
                z-index: 10;
            }

            .labelInputFile:hover{
                background-color: #d2e9d3;
            }

            .labelInputFile:active{
                margin: 1px 0 0 1px;
                background-color: #beffc1;
                box-shadow: -1px -1px 0 0 #a5a5a5, inset 1px 1px 4px 0 #979797;
            }

            .inputFile{
                width: 0.1px;
                height: 0.1px;
                opacity: 0;
                position: absolute;
                z-index: -10;
            }

            .inputFile:focus + label{
                outline: -webkit-focus-ring-color auto 5px;
            }

            .hint{
                text-transform: lowercase;
                font-size: 12px;
            }

            .inputName{
                height: 24px;
                box-sizing: border-box;
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

            .subtitleList{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .subtitleItem{
                    font-size: 12px;
                    text-transform: lowercase;
                    font-weight: bold;
                    text-align: center;
                }
            }

            .itemProduct{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;

                .inputText{
                    //width: 60%;
                    height: 24px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    border: 1px solid #9b9b9b;
                }
                .inputNum{
                    //width: 20%;
                    text-align: center;
                    height: 24px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    border: 1px solid #9b9b9b;
                }
                .select{
                    //width: 20%;
                    text-align: center;
                    height: 24px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    border: 1px solid #9b9b9b;
                    background-color: white;
                }
            }

            .editItem{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;

                .button{
                    padding: 3px 12px;
                    font-size: 12px;
                    font-weight: 400;
                    text-transform: lowercase;
                }
            }

            .itemProcess{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;

                .textarea{
                    box-sizing: border-box;
                    border-radius: 4px;
                    border: 1px solid #9b9b9b;
                }
                .number{
                    min-width: 24px;
                    max-width: 24px;
                    font-size: 16px;
                    font-weight: bold;
                }
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
