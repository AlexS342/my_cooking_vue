<template>
    <div v-if="login" class="login__WRP">
        <Login/>
    </div>
    <div v-else class="login__WRP">
        <Registration/>
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
}
</script>

<style scoped lang="scss">
.login__WRP{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8d8d8d;
}
</style>