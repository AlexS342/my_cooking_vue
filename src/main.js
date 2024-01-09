import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueCookies from 'vue-cookies'

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

createApp(App).use(VueCookies, {expires: '1d', path: '/',}).use(store).use(router).mount('#app')
