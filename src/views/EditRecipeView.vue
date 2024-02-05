<template>
    <div class="recipes">
        <h3 class="recipes__header">Изменить рецепт</h3>
        <EditRecipe/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import EditRecipe from '@/components/EditRecipe.vue'
import axios from "axios";
export default {
    name: 'AddRecipeView',
    components: {
        EditRecipe
    },
    data() {
        return {
            // editRecipe: {}
        }
    },
    created() {

        /*const url = '/api/get_recipe_for_id/?recipe_id=' + this.$route.params.id
        axios.get(url, )
            .then((response) => {
                this.editRecipe = response.data
                console.log(this.editRecipe.title)
            })
            .catch((error)=>{
                console.log(error)
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
            })*/
    },
    methods: {
        /*getRecipe: async function () {
            const url = '/api/get_recipe_for_id/?recipe_id=' + this.$route.params.id
            console.log(url)

            await axios.get(url, )
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error)=>{
                    console.log(error)
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
        },*/
    }
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