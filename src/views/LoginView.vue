<template >
    <div v-if="login" class="login__WRP">
        <Login v-on:getRegistration="getRegistration"/>
    </div>
    <div v-else class="login__WRP">
        <Registration v-on:getLogin="getLogin"/>
    </div>
</template>

<script>
// @ является псевдонимом для /src
import Login from '@/components/Login.vue'
import Registration from "@/components/Registration.vue";
export default {
    name: 'LoginView',
    components: {
        Login,
        Registration
    },
    data() {
        return {
            login: true,
        }
    },
    methods: {
        getRegistration: function () {
            this.login = false
        },
        getLogin: function () {
            this.login = true
        }
    }
}
</script>

<style scoped lang="scss">
.login__WRP{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
}
</style>