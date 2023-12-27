<template>
    <template v-if="isAuth">
        <div class="WRP">
            <Header/>
            <main>
                <router-view/>
            </main>
        </div>
        <footer>
            <Footer/>
        </footer>
    </template>
    <template v-else>
        <div class="WRP">
            <LoginView/>
        </div>
    </template>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginView from '@/views/LoginView.vue'
import {defineComponent} from "vue";

export default defineComponent({
    components: {LoginView, Footer: Footer, Header},
    data() {
        return {
            isAuth: false,
        }
    },
    created() {
        // this.isAuth = this.getAuth()
        this.getAuth()
    },
    methods: {
        // getAuth() {
        //     return true
        // },
        getAuth: function () {
            this.isAuth = true
            // setInterval(()=>{
            //     this.isAuth = !this.isAuth
            // }, 1000)
        }
    },
    watch: {
        //Отслеживает состояние, если изменилось, то выполняется
        // isAuth(n, o){
        //     console.log(n, o)
        // }
    }

})


</script>

<!--RESET CSS-->
<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    /*font-size: 100%;*/
    /*font: inherit;*/
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    /*content: '';*/
    /*content: none;*/
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.WRP {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

header {
    display: flex;
    min-height: 30px;
    margin-bottom: 12px;
}

main {
    display: flex;
    min-height: 30px;
    margin-top: 12px;
    margin-bottom: 12px;
}

footer {
    display: flex;
    min-height: 30px;
}
</style>


<!--<template>-->
<!--      <nav>-->
<!--        <router-link to="/recipes">Рецепты</router-link> |-->
<!--        <router-link to="/add_recipes">Добавить рецепт</router-link>-->
<!--      </nav>-->
<!--      <router-view/>-->
<!--</template>-->


<!--<style lang="scss">-->
<!--#app {-->
<!--  font-family: Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
