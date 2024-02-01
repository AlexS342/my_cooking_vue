<template>
    <div class="WRP">
        <Header/>
        <div class="error" v-show="GET_RESPONSE_ERR">
            <p class="error_text">{{ GET_ERR_MESSAGE }}</p>
            <div class="error_close" v-on:click="closeErr">X</div>
        </div>
        <main>
            <router-view/>
        </main>
    </div>
    <footer>
<!--        <Footer/>-->
    </footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginView from '@/views/LoginView.vue'
import {defineComponent} from "vue";
import {mapGetters} from "vuex";

export default defineComponent({
    components: {LoginView, Footer, Header},
    data() {
        return {
            isAuth: false,
        }
    },
    created() {

        if(!!localStorage.getItem("isAuth")){
            if(localStorage.getItem("isAuth") === "false"){
                this.isAuth = false
            }else{
                this.isAuth = true
            }
        }else{
            this.isAuth = false
        }
        this.$store.dispatch('SET_IS_AUTH_A', this.isAuth);
    },
    methods: {
        closeErr: function (){
            let message = ''
            this.$store.dispatch('SET_RESPONSE_ERR_A', [false, message]);
        }
    },
    watch: {},
    computed: {
        ...mapGetters([
            //перечисляем гетеры из сторе и потом используем как переменные.
            'GET_IS_AUTH',
            'GET_RESPONSE_ERR',
            'GET_ERR_MESSAGE',
            // ...
        ])
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

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .error{
        width: 100%;
        max-width: 600px;
        margin: 12px auto;
        display: flex;
        .error_text{
            color: red;
            padding-left: 4px;
        }
        .error_close{
            font-weight: 700;
            font-size: 20px;
            padding: 4px 12px 4px 4px;
        }
    }
}

header {
    display: flex;
    min-height: 30px;
    margin-bottom: 12px;
}

main {
    display: flex;
    min-height: 30px;
}

footer {
    display: flex;
    min-height: 30px;
}
</style>