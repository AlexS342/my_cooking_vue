<template>
    <div class="recipe">
        <img class="mainImg" src="../assets/img/grecheskiy-salat.jpg" alt="photo">

<!--        СПИСОК ПРОДУКТОВ                -->
        <div class="listWRP">
            <div class="title">
                <h3 class="titleText">Продукты</h3>
                <p class="titleShow">свернуть</p>
            </div>
            <ul class="list">
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Шея мраморной говядины</span>
                    </label>
                    <span class="weight">450 г.</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Морковь</span>
                    </label>
                    <span class="weight">100 г.</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Лук репчатый</span>
                    </label>
                    <span class="weight">150 г.</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Баклажан</span>
                    </label>
                    <span class="weight">200 г.</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Яйцо</span>
                    </label>
                    <span class="weight">2 шт</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Майонез</span>
                    </label>
                    <span class="weight">150 г.</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Соль</span>
                    </label>
                    <span class="weight">1 ст.л.</span>
                </li>
                <li class="itemProduct">
                    <label class="check">
                        <input class="input" type="checkbox">
                        <span class="text">Перец черный</span>
                    </label>
                    <span class="weight">по вкусу</span>
                </li>
            </ul>
        </div>

<!--        ПРОЦЕСС ПРИГОТОВЛЕНИЯ           -->
        <div class="listWRP">
            <div class="title">
                <h3 class="titleText">Процесс</h3>
                <p class="titleShow">свернуть</p>
            </div>
            <ul class="list">
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <p class="action">Нарезать свинину мелкими неравномерными плоскими кусочками по 3 - 5 см длиной, 1 - 2 см шириной и 0,5 см толщиной</p>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Сварить нарезаную всинину на медленом огне</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Натереть морковь на крупной терке</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Нарезать лук полукольцами</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Обжарить лук и морковь на сливочном масле на медленом огне постоянно помешивая</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Нарезать баклажан тонкими колечками</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Обжарить баклажан  на сливочном масле на среднем огне постоянно помешивая</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Сварить яйцо в крутую</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Нарезать яйцо мелкими кубиками</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Перемешать все нахер большой ложно и жрать сколько влезет</span>
                </li>
                <li class="itemProcess">
                    <img class="icon" src="../assets/icon/done.png" alt="play">
<!--                    <input class="check" type="checkbox">-->
                    <span class="action">Посолить и поперчить все что съели и залить кипятком</span>
                </li>
            </ul>
        </div>

<!--        КНОПКИ                          -->
        <div class="action">
            <input class="button" type="button" value="удалить">
            <input class="button" type="button" value="редактировать">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Recipe',
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

.recipe{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    color: #4d4d4d;

.mainImg{
    max-width: 100%;
    margin: 12px;
}

.listWRP{
    display: flex;
    flex-direction: column;
    color: #4d4d4d;
    margin-bottom: 12px;

    .title{
        display: flex;
        justify-content: space-between;
        margin: 12px;
        align-items: center;

        .titleText{
        }
        .titleShow{
            font-size: 12px;
            text-decoration: underline;
        }
    }

    .list{
        display: flex;
        flex-direction: column;
        max-width: 600px;
        box-shadow: 0 -6px 16px -16px #9b9b9b;

        .itemProduct{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            padding: 10px 12px;
            margin-bottom: 2px;
            box-shadow: 0 4px 16px -12px #9b9b9b;

            .check{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;

                .input{
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
                .text{
                    font-size: 16px;
                    line-height: 16px;
                    margin-top: 4px;
                }
            }
            .weight{
                text-align: center;
                font-size: 16px;
                line-height: 16px;
                width: 70px;
                margin-top: 6px;
            }
        }

        .itemProcess{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            padding: 8px 12px;
            margin-bottom: 2px;
            box-shadow: 0 4px 16px -12px #9b9b9b;

            .icon{
                    width: 24px;
                    height: 24px;
                    margin-right: 6px;
                }
            .check{
                    min-width: 24px;
                    min-height: 24px;
                    margin-right: 12px;
                }
            .action{
                    word-break: break-word;
                    text-align: justify;
                    -moz-hyphens: auto;
                    -webkit-hyphens: auto;
                    -ms-hyphens: auto;
                }
        }
    }
}

.action{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px;

    .button{
        margin: 0 1px 1px 0;
        padding: 6px 16px;
        font-size: 14px;
        font-weight: 700;
        color: #333335;
        text-transform: uppercase;
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
}
}

</style>
