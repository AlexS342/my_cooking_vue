<template>
<!--    <div class="addRecipe">-->
        <form class="form w100p" method="post" enctype="multipart/form-data">

            <div class="list w100p bc2" v-show="responseErr">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <p class="titleText" style="color: red">{{massageErr}}</p>
                    </div>
                </div>
            </div>

<!--        НАЗВАНИЕ РЕЦЕПТА-->
            <div class="list w100p bc1">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Название рецепта</h3>
                        <p class="titleShow" v-if="showName" v-on:click="changeShowName">свернуть</p>
                        <p class="titleShow" v-if="!showName" v-on:click="changeShowName">показать</p>
                    </div>

                    <p style="color: red" v-show="titleErr">{{massageErr}}</p>

                    <template v-if="showName">
                        <label class="hint mr1" for="title">Введите название рецепта</label>
                        <input class="inputName mrx3 w100p" id="title" name="title" type="text" v-model="title">
                    </template>
                </div>
            </div>

<!--        КАРТИНКА-->
<!--            <div class="list w100p bc2">-->
<!--                <div class="container pd3 w100p">-->
<!--                    <div class="title mrb2 w100p">-->
<!--                        <h3 class="titleText">Фото блюда</h3>-->
<!--                        <p class="titleShow" v-if="showImg" v-on:click="changeShowImg">свернуть</p>-->
<!--                        <p class="titleShow" v-if="!showImg" v-on:click="changeShowImg">показать</p>-->
<!--                    </div>-->
<!--                    <template v-if="showImg">-->
<!--                        <div class="imgWRP">-->
<!--                            <img class="img  w100p" src="../assets/img/grecheskiy-salat.jpg" alt="photo">-->
<!--                        </div>-->
<!--                        <span class="text mr1">Загрузите изображение готового блюда</span>-->
<!--                        <label class="labelInputFile pdx3" for="file-input">Выберите файл-->
<!--                            <input class="inputFile" name="file-input" id="file-input" type="file" multiple>-->
<!--                        </label>-->
<!--                    </template>-->
<!--                </div>-->
<!--            </div>-->

        <!--        СПИСОК ПРОДУКТОВ                -->
            <div class="list w100p bc3">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Добавить продукты</h3>
                        <p class="titleShow" v-if="showProduct" v-on:click="changeShowProduct">свернуть</p>
                        <p class="titleShow" v-if="!showProduct" v-on:click="changeShowProduct">показать</p>
                    </div>

                    <div style="color: red" v-show="productErr">{{massageErr}}</div>

                    <template v-if="showProduct">
                        <div class="subtitleList w100p">
                            <p class="subtitleItem w60p">продукт</p>
                            <p class="subtitleItem w20p">вес</p>
                            <p class="subtitleItem w20p">ед.</p>
                        </div>

                        <template v-for="(product, index) in products">
                            <div class="itemProduct mrt2 w100p">
                                <input class="inputText pdl1 w60p" type="text" v-model.lazy.trim="products[index].name">
                                <input class="inputNum w20p" type="number" v-model.lazy.number.trim="products[index].quantity">
                                <select class="select w20p" v-model.lazy.trim="products[index].units">
                                    <option v-for="(item) in arrProductUnits" :value="item">{{item}}</option>
                                </select>
                            </div>
                        </template>

                        <div class="editItem mrt3 w100p">
                            <input class="button" type="button" v-on:click="removeInputProduct" value="удалить поле">
                            <input class="button" type="button" v-on:click="addInputProduct" value="добавить поле">
                        </div>

                    </template>
                </div>
            </div>

            <!--        ПРОЦЕСС ПРИГОТОВЛЕНИЯ           -->
            <div class="list w100p bc4">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Добавить процесс</h3>
                        <p class="titleShow" v-if="showProcess" v-on:click="changeShowProcess">свернуть</p>
                        <p class="titleShow" v-if="!showProcess" v-on:click="changeShowProcess">показать</p>
                    </div>

                    <template v-if="showProcess">
                        <div class="subtitleList w100p">
                            <p class="subtitleItem w80p">Поэтапный процесс приготовления</p>
                            <p class="subtitleItem w20p">таймер</p>
                        </div>

                        <div style="color: red" v-show="actionErr">{{massageErr}}</div>

                        <template v-for="(action, index) in actions">
                            <div class="itemProcess mrt2 w100p">
                                <textarea class="textarea w80p" rows="3" v-model.lazy.trim="actions[index].name"></textarea>
                                <div class="timer w20p pdl2">
                                    <input class="timerNumber w100p" type="number" v-model.lazy.number.trim="actions[index].quantity">
                                    <select class="timerItem w100p mrt1" v-model.lazy.trim="actions[index].units">
                                        <option v-for="(item) in arrActionUnits" :value="item">{{item}}</option>

                                    </select>
                                </div>
                            </div>
                        </template>

                        <div class="editItem mrt3 w100p">
                            <input class="button" type="button" v-on:click="removeInputAction" value="удалить поле">
                            <input class="button" type="button" v-on:click="addInputAction" value="добавить поле">
                        </div>

                    </template>
                </div>
            </div>

            <!--        ФИЛЬТРЫ           -->
            <div class="list w100p bc4">
                <div class="container pd3 w100p">
                    <div class="title mrb2 w100p">
                        <h3 class="titleText">Фильтры</h3>
                        <p class="titleShow" v-if="showFilter" v-on:click="changeShowFilter">свернуть</p>
                        <p class="titleShow" v-if="!showFilter" v-on:click="changeShowFilter">показать</p>
                    </div>

                    <div style="color: red" v-show="filterErr">{{massageErr}}</div>

                    <template v-if="showFilter">
                        <div class="allFilter">
                            <div class="filterWRP">
                                <p class="filterLabel"><label for="typeRecipes">Тип блюда</label></p>
                                <select class="filterSelectB" id="typeRecipes" v-model.lazy.trim="typeRecipes">
                                    <option v-for="(item) in arrTypeRecipes" :value="item">{{item}}</option>
                                </select>
                            </div>
                            <div class="filterWRP">
                                <p class="filterLabel"><label for="categoryRecipes">Категория блюда</label></p>
                                <select class="filterSelectB" id="categoryRecipes" v-model.lazy.trim="categoryRecipes">
                                    <option v-for="(item) in arrCategoryRecipes" :value="item">{{item}}</option>
                                </select>
                            </div>
                            <div class="filterWRP">
                                <p class="filterLabel"><label for="portion">Количество порций</label></p>
                                <input class="filterInputB" id="portion" type="number" v-model.lazy="portion">
                            </div>
                            <div class="filterWRP">
                                <p class="filterLabel"><label for="time">Время приготовления</label></p>
                                <input class="filterInputL" id="time" type="number" v-model.lazy.number="fullTime">
                                <select class="filterSelectL" v-model.lazy.trim="fullTimeUnix">
                                    <option v-for="(item) in arrFullTimeUnits" :value="item">{{item}}</option>
                                </select>
                            </div>
                        </div>

                    </template>
                </div>
            </div>

<!--                    КНОПКИ                          -->
            <div class="list w100p">
                <div class="container pd3 w100p">
                    <div class="action w100p">
                        <router-link to="/recipes">
                            <input class="button" type="button" value="отмена">
                        </router-link>

                        <input class="button" type="button" value="сохранить" v-on:click="sendRecipe">
                    </div>
                </div>
            </div>

        </form>
<!--    </div>-->
</template>

<script>
import axios from "axios";

export default {
    name: 'AddRecipe',
    // props: {
    //   msg: String
    // }
    data() {
        return {
            showName: true,
            showImg: true,
            showProduct: true,
            showProcess: true,
            showFilter: true,

            arrProductUnits:{KG:'кг', GRAM:'г.', LITER:'л.', ML:'мл', SHT:'шт', STL:'ст.л.', DSL:'дес.л.', CHL:'ч.л.', ST:'ст.', UP:'уп.', PVK:'по вкусу',},
            arrActionUnits:{DN:'д.', CH:'ч.', MN:'мин.', SK:'сек.',},
            arrTypeRecipes:{HOT:'горячее', COLT:'холодное', DR:'другое', NK:'не указано',},
            arrCategoryRecipes:{VP:'выпеска', GR:'гарниры', DR:'другое', DS:'десерты', MS:'мясо', NP:'напитки', NK:'не указано', OV:'овощи', RBb:'рыба', SL:'салаты', SP:'супы', SO:'соусы', FR:'фрукты',},
            arrFullTimeUnits:{CH:'ч.', MN:'мин.',},

            title:"",
            products:{
                product1:{name:"", quantity:"", units: 'г.',},
                product2:{name:"", quantity:"", units: 'г.',},
                product3:{name:"", quantity:"", units: 'г.',},
            },
            actions:{
                action1: {name:"", quantity:"", units: "мин.",},
                action2: {name:"", quantity:"", units: "мин.",},
                action3: {name:"", quantity:"", units: "мин.",},
                action4: {name:"", quantity:"", units: "мин.",},
            },
            sendData:{},
            typeRecipes:'не указано',
            categoryRecipes:'не указано',
            portion:'',
            fullTime:'',
            fullTimeUnix:'мин.',

            //Проверка формы
            massageErr:'',
            titleErr:false,
            productErr:false,
            actionErr:false,
            responseErr:false,
            filterErr:false,
        }
    },
    methods: {
        sendRecipe: async function (){

            if(!this.getDataForm()){
                console.log('methods: => sendRecipe: => getDataForm: false')
                return
            }

            console.log(this.sendData)

            await axios
                .post('/api/add-my-recipe', {
                    title:this.sendData.title,
                    products:this.sendData.products,
                    actions:this.sendData.actions,
                    portion:this.sendData.portion,
                    full_time:this.sendData.full_time,
                    type:this.sendData.type,
                    category:this.sendData.category,
                })
                .then((response) => {
                    console.log(response)
                    if(response.status === 200){
                        this.$router.push({path:'/recipes'})
                    }
                })
                .catch(
                    (error) => {
                        let message = 'Status: ' + error.response.status + '; Code: ' + error.code + '; Message: ' + error.message + '; Response: ' + error.response.data.message
                        this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                        console.log(error)
                        if(error.response.status === 401 || error.response.status === 419){
                            this.$router.push({path:'/login'})
                        }
                    });
        },

        /**
         * Собирает данные из формы
         * @returns {boolean}
         */
        getDataForm: function (){
            let product
            let action

            //Удаляем пустые поля "Продукт"
            let i = 0;
            for(product in this.products){
                ++i
                if(this.products[product].name.length === 0){
                    if(Object.keys(this.products).length > 2){
                        delete this.products[product]
                    }
                    --i
                }
            }
            if(i < 2){
                this.productErr = true
                this.massageErr = 'В рецепте должно быть как минимум два продукта'
                return false;
            }else{
                this.productErr = false
                this.massageErr = ''
            }

            //Удаляем пустые поля "Действие"
            i = 0
            for(action in this.actions){
                ++i
                if(this.actions[action].name.length === 0){
                    if(Object.keys(this.actions).length > 2){
                        delete this.actions[action]
                    }
                    --i
                }
            }
            if(i < 2){
                this.actionErr = true
                this.massageErr = 'В рецепте должно быть как минимум два дейстыия по приготовлению'
                return false;
            }else{
                this.actionErr = false
                this.massageErr = ''
            }

            //Проверяем правильно ли заполнен рецепт
            if(!this.validationForm()){
                return false;
            }

            //Объект для отправки на backend
            this.sendData = {
                title:this.title,
                description:null,
                products:this.products,
                actions:this.actions,
                type:this.typeRecipes,
                category:this.categoryRecipes,
                portion:this.portion,
                full_time:this.fullTime + ' ' + this.fullTimeUnix
            }

            return true
        },

        /**
         * Сворачивает и разворачивает блок "Название рецепта"
         */
        changeShowName: function () {
            this.showName = !this.showName
        },

        /**
         * Сворачивает и разворачивает блок "Фотография рецепта"
         */
        changeShowImg: function () {
            this.showImg = !this.showImg
        },

        /**
         * Сворачивает и разворачивает блок "Продуктв рецепта"
         */
        changeShowProduct: function () {
            this.showProduct = !this.showProduct
        },

        /**
         * Сворачивает и разворачивает блок "Действия рецепта"
         */
        changeShowProcess: function () {
            this.showProcess = !this.showProcess
        },

        /**
         * Сворачивает и разворачивает блок "Фильтры"
         */
        changeShowFilter: function () {
            this.showFilter = !this.showFilter
        },

        /**
         * Добавляет строку в блоке добавления продукта в рецепт
         */
        addInputProduct: function () {
            let size = Object.keys(this.products).length;
            ++size
            let itemName = 'product' + size
            this.products[itemName] = {name:"", quantity:"", units:"г.",}
        },

        /**
         * Удаляет последнюю строку из блока добавления продуктов в рецепт
         */
        removeInputProduct: function () {
            let size = Object.keys(this.products).length
            let itemName = 'product' + size
            delete this.products[itemName]
        },

        /**
         * Добавляет строку в блок добавления действий приготовления рецепта
         */
        addInputAction: function () {
            let size = Object.keys(this.actions).length;
            ++size
            let itemName = 'action' + size
            this.actions[itemName] = {name:"", quantity:"", units:"мин."}
            console.log(this.actions)
        },

        /**
         * Удаляет последнюю строку из блока добаления действий приготовления рецепта
         */
        removeInputAction: function () {
            let size = Object.keys(this.actions).length
            let itemName = 'action' + size
            delete this.actions[itemName]
        },

        /**
         * Проверяет правильность заполнения полей рецепта, возвращает логическое значение
         * @returns {boolean}
         */
        validationForm: function (){
            this.titleErr = false
            this.productErr = false
            this.actionErr = false
            this.filterErr = false

            this.massageErr = ''

            //Валидация Названия рецепта
            if(this.title.length < 5){
                this.titleErr = true
                this.massageErr = 'Короткое название рецепта. Минимум 5 символов.'
                return false
            }else if(this.title.length > 150){
                this.titleErr = true
                this.massageErr = 'Длинное название рецепта. Максимум 150 символов.'
                return false
            }

            //Валидация продуктов
            let product;
            for(product in this.products){

                if(this.products[product].name.length !== 0){
                    if(this.products[product].name.length < 3){
                        this.productErr = true
                        this.massageErr = 'Короткое название одного из продуктов. Минимум 3 символа.'
                        break
                    }else if (this.products[product].name.length > 100){
                        this.productErr = true
                        this.massageErr = 'Длинное название одного из продуктов. Максимум 150 символов.'
                        break
                    }
                }

                if(this.products[product].quantity.length !== 0 || this.products[product].quantity === 0){
                    this.products[product].quantity = Number(this.products[product].quantity)
                    if(this.products[product].quantity < 1){
                        this.productErr = true
                        this.massageErr = 'Маленький вес одного из продуктов. Минимум 1.'
                        break
                    }else if(this.products[product].quantity > 1000){
                        this.productErr = true
                        this.massageErr = 'Большой вес одного из продуктов. Максимум 1000.'
                        break
                    }
                }

                if(this.products[product].quantity.length === 0 && this.products[product].units !== 'по вкусу'){
                    this.productErr = true
                    this.massageErr = 'Нужно указать вес продукта кроме тех строк, где выбрано "по вкусу"'
                    break
                }

                if(this.products[product].quantity.length !== 0 && this.products[product].units === 'по вкусу'){
                    this.productErr = true
                    this.massageErr = 'Если вы выбрали "по вкусу", то ненужно указывать вес продукта'
                    break
                }

                if(Object.values(this.arrProductUnits).indexOf(this.products[product].units) === -1){
                    console.log('значение ' + this.products[product].units + ' не найдено')
                    this.actionErr = true
                    this.massageErr = 'Некоректные едицы времени приготовления. Выбирайте только преложенные варианты из выпадающего меню.'
                    break
                }
            }
            if(this.productErr){
                return false
            }

            //Валидация действый
            let action
            for(action in this.actions){

                if(this.actions[action].name.length !== 0){
                    if(this.actions[action].name.length < 5){
                        console.log(this.actions[action].name.length)
                        this.actionErr = true
                        this.massageErr = 'Короткое описание одного из процессовв. Минимум 5 символа.'
                        break
                    }
                    else if(this.actions[action].name.length > 200){
                        this.actionErr = true
                        this.massageErr = 'Длинное описание одного из процессовв. Максисум 200 символа.'
                        break
                    }
                }

                if(this.actions[action].quantity.length !== 0){
                    this.actions[action].quantity = Number(this.actions[action].quantity)
                    if(this.actions[action].quantity < 1){
                        this.actionErr = true
                        this.massageErr = 'Указано маленькое время приготовления. Минимум 1'
                        break
                    } else if (this.actions[action].quantity > 1000){
                        this.actionErr = true
                        this.massageErr = 'Указано большое время приготовления. Максимум 1000'
                        break
                    }

                }

                if(Object.values(this.arrActionUnits).indexOf(this.actions[action].units) === -1){
                    console.log('значение ' + this.actions[action].units + ' не найдено')
                    this.actionErr = true
                    this.massageErr = 'Некоректные едицы времени приготовления. Выбирайте только преложенные варианты из выпадающего меню.'
                    break
                }
            }
            if(this.actionErr){
                return false
            }
            // return !this.actionErr;

            //Валидация тип рецепта
            if(Object.values(this.arrTypeRecipes).indexOf(this.typeRecipes) === -1){
                console.log('значение ' + this.typeRecipes + ' не найдено')
                this.filterErr = true
                this.massageErr = 'Тип блюда указан не корректно'
                return false
            }

            //Валидация категории рецепта
            if(Object.values(this.arrCategoryRecipes).indexOf(this.categoryRecipes) === -1){
                console.log('значение ' + this.categoryRecipes + ' не найдено')
                this.filterErr = true
                this.massageErr = 'Категория блюда указан не корректно'
                return false
            }

            //Валидация единиц времени приготовления
            if(Object.values(this.arrFullTimeUnits).indexOf(this.fullTimeUnix) === -1){
                console.log('значение ' + this.fullTimeUnix + ' не найдено')
                this.filterErr = true
                this.massageErr = 'Время приготовления блюда должно измерятся в предложенных вариантах'
                return false
            }

            //Валидация количества порций
            if(typeof this.portion === 'string' && this.portion.length !== 0){
                console.log('Количество порцый нужно указывать цифрами')
                this.filterErr = true
                this.massageErr = 'Количество порцый нужно указывать цифрами'
                return false
            }else if(typeof this.portion === 'number' && this.portion < 1){
                console.log('Количество порций ' + this.portion + ' меньше 1')
                this.filterErr = true
                this.massageErr = 'Указано количество порцый меньще нуля'
                return false
            }else if(typeof this.portion === 'number' && this.portion > 50){
                console.log('Количество порций ' + this.portion + ' больше 50')
                this.filterErr = true
                this.massageErr = 'Указано количество порцый больше 50'
                return false
            }

            //Валидация времени приготовления (цифры)
            if(typeof this.fullTime === 'string' && this.fullTime.length > 0){
                console.log('Время приготовления нужно указывать цифрами')
                this.filterErr = true
                this.massageErr = 'Время приготовления нужно указывать цифрами'
                return false
            }
            else if(typeof this.fullTime === 'number' && this.fullTime < 1){
                console.log('Указано время приготовления ' + this.portion + ' меньше 1')
                this.filterErr = true
                this.massageErr = 'Указано количество порцый меньще нуля'
                return false
            }
            else if(typeof this.fullTime === 'number' && this.fullTime > 500){
                console.log('Указано время приготовления ' + this.portion + ' ,больше 500')
                this.filterErr = true
                this.massageErr = 'Указано количество порцый меньще нуля'
                return false
            }
            else if(typeof this.fullTime === 'string' && this.fullTime.length === 0){
                this.fullTimeUnix = ''
            }

            return true
        },
    },
    watch: {
        // Отслеживает состояние, если изменилось, то выполняется
        // titleErr(n){
        //     this.showTitleErr = true;
        // },

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
                opacity: 0.1%;
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
                .timer{
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .timerNumber{
                    box-sizing: border-box;
                    border: 1px solid #979797;
                    border-radius: 3px;
                    height: 24px;
                }
                .timerItem{
                    text-align: center;
                    border: 1px solid #979797;
                    border-radius: 3px;
                    background-color: white;
                    height: 24px;
                }
            }

            .allFilter{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                width: 100%;
                font-size: 14px;
                padding-top: 12px;

                .filterWRP{
                    display: flex;
                    flex-wrap: nowrap;
                    margin-bottom: 12px;
                    margin-left: 12px;
                    margin-right: 12px;
                    .filterLabel{
                        width: 150px;
                    }
                    .filterInputB{
                        width: 100px;
                        box-sizing: border-box;
                    }
                    .filterInputL{
                        width: 50px;
                        box-sizing: border-box;
                    }
                    .filterSelectB{
                        width: 100px;
                        box-sizing: border-box;
                    }
                    .filterSelectL{
                        width: 50px;
                        box-sizing: border-box;
                    }
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
