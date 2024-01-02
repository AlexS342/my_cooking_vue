<template>
    <div class="brieflyRecipe w100p">

        <div class="list w100p" v-for="recipe in recipes">
            <div class="container pd3 w100p">
                <div class="imgWRP">
                    <img class="img w100p" src="../assets/img/grecheskiy-salat.jpg" alt="photo">
                </div>
                <div class="description pdl2">
                    <router-link class="header mrb1" :to="'/recipe/' + recipe.id">
                        {{recipe.id + " " + recipe.header }}
                    </router-link>
                    <p class="productList mrb1">
                        <span v-for="item in recipe.products">{{item.product + ", "}}</span>
                    </p>
                    <div class="icons">
                        <div class="itemIcon pd1 mrl1">
                            <img class="iconImg" src="../assets/icon/time.png" alt="list">
                            <p class="iconText pdl1">{{ recipe.fullTime }}</p>
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
    data() {
        return {
            recipes:{
                1:{
                    id:1,
                    header:'Десерт "Страчателла" с малиновым соусом',
                    products: {
                        0:{product:"Творог (мягкий, обезжиренный)", quantity:300, items:"г",},
                        1:{product:"Маскарпоне", quantity:250, items:"г."},
                        2:{product:"Молоко сгущенное", quantity:100, items:"мл."},
                        3:{product:"Сахар (по вкусу)", quantity:1.5, items:"ст.л."},
                        4:{product:"Ванильный сахар (~8 г)", quantity:1, items:"пакет"},
                        5:{product:"Малина (мороженная + 6 штук для украшения)", quantity:300, items:"г."},
                        6:{product:"Ликер (лимончелло, опционально)", quantity:20, items:"мл"},
                        7:{product:"Шоколад темный", quantity:50, items:"г."},
                        8:{product:"Мята (листочки)", quantity:12, items:"шт"},
                    },
                    active: {
                        0:{product:"Взбить творог блендором", quantity:30, items:"сек"},
                        1:{product:"Перемешать творог с маскарпоне блендором до однородной массы", quantity:30, items:"сек"},
                        2:{product:"Добавить сахар и ванильный сахар и еще раз перемешать блендором", quantity:30, items:"сек"},
                        3:{product:"Влить ликер и еще раз перемешать блендором", quantity:1, items:"мин"},
                        4:{product:"В полученную массу добавить сгущенное молоко и перемешать ложкой (не сильно)", quantity:1, items:"мин"},
                        5:{product:"Полученную массу разложить по стаканам",},
                        6:{product:"Натереть на мелкой терке",},
                        7:{product:"Посыпать ровномерно все порции",},
                        8:{product:"Украсить каждую порцию двумялисточками мяты и одной ягодой малины"},
                    },
                    fullTime:"10 мин",
                    portions:6,
                },
                2:{
                    id:2,
                    header:'Паштет из говяжьего сердца, со смородиной и базиликом',
                    products: {
                        0:{product:"Сердце говяжье", quantity:600, items:"г",},
                        1:{product:"Лук шалот (или любой другой)", quantity:100, items:"г."},
                        2:{product:"Смородина чёрная", quantity:100, items:"г."},
                        3:{product:"Масло сливочное", quantity:100, items:"г."},
                        4:{product:"Базилик (листья)", quantity:6, items:"г."},
                        5:{product:"Тимьян свежий", quantity:3, items:"веточки"},
                        6:{product:"Можжевельник сушёный", quantity:10, items:"шт."},
                        7:{product:"Перец душистый горошком", quantity:8, items:"шт."},
                        8:{product:"Перец молотый (смесь перцев)", quantity:2, items:"г."},
                        9:{product:"Соль", quantity:"", items:"по вкусу"},
                    },
                    active: {
                        0:{product:"Подготовьте необходимые ингредиенты. Лук шалот можно заменить другим луком — обычным, красным, салатным. Чёрная смородина подойдёт свежая или замороженная. Сливочное масло возьмите хорошего качества. Базилик можно взять фиолетовый, у меня лимонный.", quantity:30, items:"сек"},
                        1:{product:"Говяжье сердце разрежьте на средние кусочки. Обрежьте лишний жир и хорошо промойте проточной водой.", quantity:30, items:"сек"},
                        2:{product:"Мясо переместите в глубокую кастрюлю. Добавьте ягоды можжевельника, душистый перец и веточки тимьяна.", quantity:30, items:"сек"},
                        3:{product:"Влейте воду. Немного подсолите и варите до готовности примерно 1-1,5 часа на небольшом огне. Время варки зависит от размера нарезанных кусочков.", quantity:1, items:"мин"},
                        4:{product:"Очистите, промойте и обсушите лук шалот. Нарежьте полукольцами. У меня он маленький я нарезала колечками. В сковороде разогрейте 40 г сливочного масла, добавьте нарезанный лук.", quantity:1, items:"мин"},
                        5:{product:"Обжарьте 5-7 минут на умеренном огне до золотистого цвета, помешивая.",},
                        6:{product:"Добавьте к луку смородину. У меня замороженная. Свежую смородину нужно добавить в миску для измельчения или в блендер.",},
                        7:{product:"Помешивая, готовьте 3-5 минут на умеренном огне.",},
                        8:{product:"Достаньте из бульона кусочки сердца. Разрежьте на небольшие кусочки."},
                        9:{product:"Добавьте обжаренный лук со смородиной.",},
                        10:{product:"Измельчите до консистенции пюре. Сердце с луком можно измельчить в блендере или пропустить через мясорубку.",},
                        11:{product:"Смесь перцев пересыпьте в ступку.",},
                        12:{product:"Измельчите до мелкого состояния."},
                        13:{product:"Добавьте листики базилика, измельчённую смесь перца и соль по вкусу. Влейте бульон, в котором варилось сердце. Мне понадобилось 100 мл.",},
                        14:{product:"Ещё раз измельчите все ингредиенты до однородности.",},
                        15:{product:"Распределите по порционным формочкам. Можно взять одну ёмкость.",},
                        16:{product:"Оставшееся масло растопите и залейте паштет. У меня остались листики тимьяна, добавила к маслу для большего аромата. Отправьте в холодильник на пару часов и подавайте к столу."},
                        17:{product:"Паштет из говяжьего сердца со смородиной и базиликом готов."},
                    },
                    fullTime:"10 мин",
                    portions:6,
                },
                3:{
                    id:3,
                    header:'Десерт "Страчателла" с малиновым соусом',
                    products: {
                        0:{product:"Творог (мягкий, обезжиренный)", quantity:300, items:"г",},
                        1:{product:"Маскарпоне", quantity:250, items:"г."},
                        2:{product:"Молоко сгущенное", quantity:100, items:"мл."},
                        3:{product:"Сахар (по вкусу)", quantity:1.5, items:"ст.л."},
                        4:{product:"Ванильный сахар (~8 г)", quantity:1, items:"пакет"},
                        5:{product:"Малина (мороженная + 6 штук для украшения)", quantity:300, items:"г."},
                        6:{product:"Ликер (лимончелло, опционально)", quantity:20, items:"мл"},
                        7:{product:"Шоколад темный", quantity:50, items:"г."},
                        8:{product:"Мята (листочки)", quantity:12, items:"шт"},
                    },
                    active: {
                        0:{product:"Взбить творог блендором", quantity:30, items:"сек"},
                        1:{product:"Перемешать творог с маскарпоне блендором до однородной массы", quantity:30, items:"сек"},
                        2:{product:"Добавить сахар и ванильный сахар и еще раз перемешать блендором", quantity:30, items:"сек"},
                        3:{product:"Влить ликер и еще раз перемешать блендором", quantity:1, items:"мин"},
                        4:{product:"В полученную массу добавить сгущенное молоко и перемешать ложкой (не сильно)", quantity:1, items:"мин"},
                        5:{product:"Полученную массу разложить по стаканам",},
                        6:{product:"Натереть на мелкой терке",},
                        7:{product:"Посыпать ровномерно все порции",},
                        8:{product:"Украсить каждую порцию двумялисточками мяты и одной ягодой малины"},
                    },
                    fullTime:"10 мин",
                    portions:6,
                },
                4:{
                    id:4,
                    header:'Паштет из говяжьего сердца, со смородиной и базиликом',
                    products: {
                        0:{product:"Сердце говяжье", quantity:600, items:"г",},
                        1:{product:"Лук шалот (или любой другой)", quantity:100, items:"г."},
                        2:{product:"Смородина чёрная", quantity:100, items:"г."},
                        3:{product:"Масло сливочное", quantity:100, items:"г."},
                        4:{product:"Базилик (листья)", quantity:6, items:"г."},
                        5:{product:"Тимьян свежий", quantity:3, items:"веточки"},
                        6:{product:"Можжевельник сушёный", quantity:10, items:"шт."},
                        7:{product:"Перец душистый горошком", quantity:8, items:"шт."},
                        8:{product:"Перец молотый (смесь перцев)", quantity:2, items:"г."},
                        9:{product:"Соль", quantity:"", items:"по вкусу"},
                    },
                    active: {
                        0:{product:"Подготовьте необходимые ингредиенты. Лук шалот можно заменить другим луком — обычным, красным, салатным. Чёрная смородина подойдёт свежая или замороженная. Сливочное масло возьмите хорошего качества. Базилик можно взять фиолетовый, у меня лимонный.", quantity:30, items:"сек"},
                        1:{product:"Говяжье сердце разрежьте на средние кусочки. Обрежьте лишний жир и хорошо промойте проточной водой.", quantity:30, items:"сек"},
                        2:{product:"Мясо переместите в глубокую кастрюлю. Добавьте ягоды можжевельника, душистый перец и веточки тимьяна.", quantity:30, items:"сек"},
                        3:{product:"Влейте воду. Немного подсолите и варите до готовности примерно 1-1,5 часа на небольшом огне. Время варки зависит от размера нарезанных кусочков.", quantity:1, items:"мин"},
                        4:{product:"Очистите, промойте и обсушите лук шалот. Нарежьте полукольцами. У меня он маленький я нарезала колечками. В сковороде разогрейте 40 г сливочного масла, добавьте нарезанный лук.", quantity:1, items:"мин"},
                        5:{product:"Обжарьте 5-7 минут на умеренном огне до золотистого цвета, помешивая.",},
                        6:{product:"Добавьте к луку смородину. У меня замороженная. Свежую смородину нужно добавить в миску для измельчения или в блендер.",},
                        7:{product:"Помешивая, готовьте 3-5 минут на умеренном огне.",},
                        8:{product:"Достаньте из бульона кусочки сердца. Разрежьте на небольшие кусочки."},
                        9:{product:"Добавьте обжаренный лук со смородиной.",},
                        10:{product:"Измельчите до консистенции пюре. Сердце с луком можно измельчить в блендере или пропустить через мясорубку.",},
                        11:{product:"Смесь перцев пересыпьте в ступку.",},
                        12:{product:"Измельчите до мелкого состояния."},
                        13:{product:"Добавьте листики базилика, измельчённую смесь перца и соль по вкусу. Влейте бульон, в котором варилось сердце. Мне понадобилось 100 мл.",},
                        14:{product:"Ещё раз измельчите все ингредиенты до однородности.",},
                        15:{product:"Распределите по порционным формочкам. Можно взять одну ёмкость.",},
                        16:{product:"Оставшееся масло растопите и залейте паштет. У меня остались листики тимьяна, добавила к маслу для большего аромата. Отправьте в холодильник на пару часов и подавайте к столу."},
                        17:{product:"Паштет из говяжьего сердца со смородиной и базиликом готов."},
                    },
                    fullTime:"10 мин",
                    portions:6,
                },
                5:{
                    id:5,
                    header:'Десерт "Страчателла" с малиновым соусом',
                    products: {
                        0:{product:"Творог (мягкий, обезжиренный)", quantity:300, items:"г",},
                        1:{product:"Маскарпоне", quantity:250, items:"г."},
                        2:{product:"Молоко сгущенное", quantity:100, items:"мл."},
                        3:{product:"Сахар (по вкусу)", quantity:1.5, items:"ст.л."},
                        4:{product:"Ванильный сахар (~8 г)", quantity:1, items:"пакет"},
                        5:{product:"Малина (мороженная + 6 штук для украшения)", quantity:300, items:"г."},
                        6:{product:"Ликер (лимончелло, опционально)", quantity:20, items:"мл"},
                        7:{product:"Шоколад темный", quantity:50, items:"г."},
                        8:{product:"Мята (листочки)", quantity:12, items:"шт"},
                    },
                    active: {
                        0:{product:"Взбить творог блендором", quantity:30, items:"сек"},
                        1:{product:"Перемешать творог с маскарпоне блендором до однородной массы", quantity:30, items:"сек"},
                        2:{product:"Добавить сахар и ванильный сахар и еще раз перемешать блендором", quantity:30, items:"сек"},
                        3:{product:"Влить ликер и еще раз перемешать блендором", quantity:1, items:"мин"},
                        4:{product:"В полученную массу добавить сгущенное молоко и перемешать ложкой (не сильно)", quantity:1, items:"мин"},
                        5:{product:"Полученную массу разложить по стаканам",},
                        6:{product:"Натереть на мелкой терке",},
                        7:{product:"Посыпать ровномерно все порции",},
                        8:{product:"Украсить каждую порцию двумялисточками мяты и одной ягодой малины"},
                    },
                    fullTime:"10 мин",
                    portions:6,
                },
                6:{
                    id:6,
                    header:'Паштет из говяжьего сердца, со смородиной и базиликом',
                    products: {
                        0:{product:"Сердце говяжье", quantity:600, items:"г",},
                        1:{product:"Лук шалот (или любой другой)", quantity:100, items:"г."},
                        2:{product:"Смородина чёрная", quantity:100, items:"г."},
                        3:{product:"Масло сливочное", quantity:100, items:"г."},
                        4:{product:"Базилик (листья)", quantity:6, items:"г."},
                        5:{product:"Тимьян свежий", quantity:3, items:"веточки"},
                        6:{product:"Можжевельник сушёный", quantity:10, items:"шт."},
                        7:{product:"Перец душистый горошком", quantity:8, items:"шт."},
                        8:{product:"Перец молотый (смесь перцев)", quantity:2, items:"г."},
                        9:{product:"Соль", quantity:"", items:"по вкусу"},
                    },
                    active: {
                        0:{product:"Подготовьте необходимые ингредиенты. Лук шалот можно заменить другим луком — обычным, красным, салатным. Чёрная смородина подойдёт свежая или замороженная. Сливочное масло возьмите хорошего качества. Базилик можно взять фиолетовый, у меня лимонный.", quantity:30, items:"сек"},
                        1:{product:"Говяжье сердце разрежьте на средние кусочки. Обрежьте лишний жир и хорошо промойте проточной водой.", quantity:30, items:"сек"},
                        2:{product:"Мясо переместите в глубокую кастрюлю. Добавьте ягоды можжевельника, душистый перец и веточки тимьяна.", quantity:30, items:"сек"},
                        3:{product:"Влейте воду. Немного подсолите и варите до готовности примерно 1-1,5 часа на небольшом огне. Время варки зависит от размера нарезанных кусочков.", quantity:1, items:"мин"},
                        4:{product:"Очистите, промойте и обсушите лук шалот. Нарежьте полукольцами. У меня он маленький я нарезала колечками. В сковороде разогрейте 40 г сливочного масла, добавьте нарезанный лук.", quantity:1, items:"мин"},
                        5:{product:"Обжарьте 5-7 минут на умеренном огне до золотистого цвета, помешивая.",},
                        6:{product:"Добавьте к луку смородину. У меня замороженная. Свежую смородину нужно добавить в миску для измельчения или в блендер.",},
                        7:{product:"Помешивая, готовьте 3-5 минут на умеренном огне.",},
                        8:{product:"Достаньте из бульона кусочки сердца. Разрежьте на небольшие кусочки."},
                        9:{product:"Добавьте обжаренный лук со смородиной.",},
                        10:{product:"Измельчите до консистенции пюре. Сердце с луком можно измельчить в блендере или пропустить через мясорубку.",},
                        11:{product:"Смесь перцев пересыпьте в ступку.",},
                        12:{product:"Измельчите до мелкого состояния."},
                        13:{product:"Добавьте листики базилика, измельчённую смесь перца и соль по вкусу. Влейте бульон, в котором варилось сердце. Мне понадобилось 100 мл.",},
                        14:{product:"Ещё раз измельчите все ингредиенты до однородности.",},
                        15:{product:"Распределите по порционным формочкам. Можно взять одну ёмкость.",},
                        16:{product:"Оставшееся масло растопите и залейте паштет. У меня остались листики тимьяна, добавила к маслу для большего аромата. Отправьте в холодильник на пару часов и подавайте к столу."},
                        17:{product:"Паштет из говяжьего сердца со смородиной и базиликом готов."},
                    },
                    fullTime:"10 мин",
                    portions:6,
                },
            }
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
