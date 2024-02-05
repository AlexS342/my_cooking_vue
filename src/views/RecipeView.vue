<template>
    <div class="recipes">
        <h3 class="recipes__header">{{this.recipe.title}}</h3>
        <Recipe v-bind:recipe="this.recipe"/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import Recipe from '@/components/Recipe.vue'
import axios from "axios";
export default {
    name: 'RecipeView',
    components: {
        Recipe
    },
    data() {
        return {
            //пустой recipe объект для инициализации
            recipe:{},
            //объект recipes заменяет получение данных от backend
            recipes:{
                /*1:{
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
                },*/
            }
        }
    },
    created() {

        const url = '/api/get_recipe_for_id/?recipe_id=' + Number(this.$route.params.id)
        // console.log(url)

        axios
            .get(url, )
            .then(
                (response) => {
                    this.recipe = response.data
                    // console.log(this.recipe)

                    this.$store.dispatch('SET_RECIPE_A', this.recipe);

                    let data = JSON.stringify(this.recipe)
                    localStorage.setItem('recipe', data);
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
}
</script>

<style scoped lang="scss">
.recipes{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
}
.recipes__header{
    margin-top: 12px;
    text-transform: uppercase;
    padding: 12px;
    text-align: center;
}

</style>