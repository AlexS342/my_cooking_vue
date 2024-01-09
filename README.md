# My cooking (my_cooking_vue)

##### Настройка проекта: `npm install`

##### Скомпилировать и запустить на локальном сервере в режиме dev: `npm run serve`

##### Компилирует и минимизирует для внешнего сервера `npm run build`

### Как создавался проект:

##### Первоначальная конфигурация Vue CLI v5.0.8:
* ? Please pick a preset: Manually select features
* ? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors
* ? Choose a version of Vue.js that you want to start the project with 3.x
* ? Use history mode for router? (Requires proper server setup for index fallback in production) No
* ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
* ? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
* ? Save this as a preset for future projects? No

##### Настройка удаленного репозитория: `git remote add origin git@github.com:AlexS342/my_cooking_vue.git`

Реализуем верстку в однофайловых компонентах для дальнейшей работы, в процессе дорабатываем до необходимого функционала

### Реализуем авторизацию и аутентификацию

Страницы "Вход" и "Регистрация" уже должны быть готовы внутри приложения. Стандартные страницы входа и регистрации от 
laravel не используются, все взаимодействие только через API.

##### Подключение библтотеки AXIOS: 
1. Добавил в проект: `npm install axios`
2. В файле main.js импортировал axios: `import axios from "axios";`
3. Добавил правила для согласования CORS:  
   &emsp; axios.defaults.withCredentials = true;  
   &emsp; axios.defaults.withXSRFToken = true;  
4. Протестировал запросами GET и POST на поготовленные роуты в проекте laravel

##### Подключил Cookies:
1. Добавил в проект: `npm install vue-cookies --save`
2. В файле main.js импортировал cookies: `import VueCookies from 'vue-cookies'`
3. В файле main.js подключил к createApp(App): `createApp(App).use(VueCookies, {expires: '1d', path: '/',}).use(...`
4. Пример работы с cookies: `const token = this.$cookies.get('XSRF-TOKEN')`

##### Добавил PROXY в конфигурацию vue.config.js для переадресации api:
devServer: {  
&emsp; proxy: {  
&emsp; &emsp; // перенаправляем api  
&emsp; &emsp; '/api': {  
&emsp; &emsp; &emsp; target: 'http://localhost:8000',  
&emsp; &emsp; },  
&emsp; &emsp; // перенаправляем запрос на токен  
&emsp; &emsp; '/sanctum/csrf-cookie': {  
&emsp; &emsp; &emsp; target: 'http://localhost:8000',  
&emsp; &emsp; },  
&emsp; &emsp; // перенаправляем запрос на авторизацию  
&emsp; &emsp; '/login': {  
&emsp; &emsp; &emsp; target: 'http://localhost:8000',  
&emsp; &emsp; },   
&emsp; },   
}  
Проверил, токен и сессию получаю, авторизация происходит  


