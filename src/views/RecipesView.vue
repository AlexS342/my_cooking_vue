<template>
    <div class="recipes">
        <h3 class="recipes__header">Рецепты</h3>
        <div v-show="GET_IS_AUTH" class="listButtons">
            <p :class="this.allRecipeClass" v-on:click="setRecipesShow('all')" >Все</p>
            <p :class="this.myRecipeClass" v-on:click="setRecipesShow('my')" >Мои</p>
            <p :class="this.saveRecipeClass" v-on:click="setRecipesShow('save')" >Закладки</p>
        </div>
        <BrieflyRecipe v-bind:recipes="this.recipes"/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import BrieflyRecipe from '@/components/BrieflyRecipe.vue'
import axios from "axios";
import {mapGetters} from "vuex";
export default {
    name: 'RecipesView',
    components: {
        BrieflyRecipe
    },
    data() {
        return {
            isAuth:false,
            allRecipeClass:'listButtonsItem__active',
            myRecipeClass:'listButtonsItem',
            saveRecipeClass:'listButtonsItem',
            recipes:[],
            testApiGet:"",
            testApiPost:"",
        }
    },
    created() {
        this.isAuth = this.$store.getters.GET_IS_AUTH;
        if(this.isAuth){
            this.setRecipesShow('my')
            this.getRecipes('/api/get-my-user-recipe')
        }else{
            this.getRecipes('/api/get-all-recipe')
        }
    },
    methods:{
        getRecipes: async function(api){
            await axios.post(api, {data:null})
                .then((response) => {
                    this.recipes = response.data
                })
                .catch(
                    (error) => {
                        let message = 'Status: ' + error.response.status + '; Code: ' + error.code + '; Message: ' + error.message + '; Response: ' + error.response.data.message
                        this.$store.dispatch('SET_RESPONSE_ERR_A', [true, message]);
                        console.log(error)
                        if(error.response.status === 401 || error.response.status === 419){
                            this.$router.push({path:'/login'})
                        }
                    })
        },
        setRecipesShow: function (show){
            if(show === 'all'){
                this.allRecipeClass = 'listButtonsItem__active'
                this.myRecipeClass = 'listButtonsItem'
                this.saveRecipeClass = 'listButtonsItem'
                this.getRecipes('/api/get-all-recipe')
            }else if(show === 'my'){
                this.allRecipeClass = 'listButtonsItem'
                this.myRecipeClass = 'listButtonsItem__active'
                this.saveRecipeClass = 'listButtonsItem'
                this.getRecipes('/api/get-my-user-recipe')
            }else if (show === 'save'){
                this.allRecipeClass = 'listButtonsItem'
                this.myRecipeClass = 'listButtonsItem'
                this.saveRecipeClass = 'listButtonsItem__active'
                this.getRecipes('/api/get-save-user-recipe')
            }
        },
    },
    watch: {

    },
    computed: {
        ...mapGetters([
            //перечисляем гетеры из сторе и потом используем как переменные.
            'GET_IS_AUTH',
            // ...
        ])
    }
}
</script>

<style scoped lang="scss">
    .recipes{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;

        .listButtons {
            width: 100%;
            display: flex;
            //justify-content: space-evenly;
            //margin: 12px;

            .listButtonsItem {
                flex-grow: 1;
                padding: 6px;
                font-size: 14px;
                color: #333335;
                text-transform: uppercase;
                background-color: #e3e3e3;
                box-shadow: inset -7px 0 14px -7px #979797;
            }
            .listButtonsItem__active {
                flex-grow: 1;
                padding: 6px;
                font-size: 14px;
                font-weight: 700;
                color: #333335;
                text-transform: uppercase;
                background-color: #d2e9d3;
                box-shadow: inset -7px 0 14px -7px #979797;
            }

            .listButtonsItem:hover {
                background-color: #d2e9d3;
            }

            .listButtonsItem:active {
                background-color: #beffc1;
                box-shadow: 7px 0 -14px 7px #979797;
            }
        }
    }
    .recipes__header{
        margin-top: 12px;
        text-transform: uppercase;
        padding: 12px;
        text-align: center;
    }

</style>