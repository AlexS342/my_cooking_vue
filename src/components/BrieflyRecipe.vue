<template>
    <div class="brieflyRecipe w100p">

        <div class="list w100p" v-for="recipe in recipes">
            <div class="container pd3 w100p">
                <div class="imgWRP">
                    <img class="img w100p" src="../assets/img/grecheskiy-salat.jpg" alt="photo">
                </div>
                <div class="description pdl2">
                    <router-link class="header mrb1" :to="'/recipe/' + recipe.id">
                        {{recipe.id + " " + recipe.title }}
                    </router-link>
                    <p class="productList mrb1">
                        <span v-for="item in recipe.products">{{item.name + ", "}}</span>
                    </p>
                    <div class="icons">
                        <div class="itemIcon pd1 mrl1">
                            <img class="iconImg" src="../assets/icon/time.png" alt="list">
                            <p class="iconText pdl1">{{ recipe['full_time'] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'BrieflyRecipe',
    props: {
        recipes: Object,
    },
    data() {
        return {
            //Объекты данных
        }
    },
}
</script>

<style scoped lang="scss">

a{
    text-decoration: none;
    color: #4d4d4d;
}
a:link {
    //непосещенная ссылка
}
a:visited {
    //посещенная ссылка
    color: #a1a1a1;
}
a:active {
    //в момент нажатия
    color: #5c60a3;
}
a:hover {
    //при наведении
    color: #272727;
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

.brieflyRecipe{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4d4d4d;
    border-bottom: 1px solid #9b9b9b;

    .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid #9b9b9b;

        .container{
            display: flex;
            max-width: 800px;
            box-sizing: border-box;

            .imgWRP{
                min-width: 35%;
                max-width: 35%;

                .img{
                    width: 100%;
                    margin-bottom: -4px;
                }
            }

            .description{
                min-width: 65%;
                max-width: 65%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                justify-content: space-between;

                .header{
                    text-decoration: none;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-weight: 700;
                }

                .productList{
                    font-size: 14px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .icons{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-end;

                    .itemIcon{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        background-color: #d7d7ff;
                        border-radius: 4px;

                        .iconImg{
                            width: 12px;
                            height: 12px;
                        }
                        .iconText{
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}

</style>
