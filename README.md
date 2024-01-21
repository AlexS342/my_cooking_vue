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

Реализуем верстку в однофайловых компонентах для дальнейшей работы, в процессе дорабатываем до необходимого функционала.  
Реализуем минимальную реактивность, запросы на общедоступные API и валидацию отправляемых данных.  
Большая часть проделаной работы предварительна и предполагает дальнейшую доработку.

### Реализуем аутентификацию пользователя

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

##### Добавил PROXY в конфигурацию vue.config.js для переадресации api на backend:
`devServer: {`  
`&emsp; proxy: {`  
`&emsp; &emsp; // перенаправляем api`  
`&emsp; &emsp; '/api': {`  
`&emsp; &emsp; &emsp; target: 'http://localhost:8000',`  
`&emsp; &emsp; },`  
`&emsp; &emsp; // перенаправляем запрос на токен`  
`&emsp; &emsp; '/sanctum/csrf-cookie': {`  
`&emsp; &emsp; &emsp; target: 'http://localhost:8000',`  
`&emsp; &emsp; },`  
`&emsp; &emsp; // перенаправляем запрос на авторизацию`  
`&emsp; &emsp; '/login': {`  
`&emsp; &emsp; &emsp; target: 'http://localhost:8000',`  
`&emsp; &emsp; },`   
`&emsp; },`   
`}`  

1. Перез авторизацией выполняем запрос на `/sanctum/csrf-cookie`, это аналог CSRF защиты
2. Выполняем `post` запрос на `/login`, в теле запроса логин и пароль в незашифрованом виде.
   + Проверил, токен и сессию получаю, авторизация происходит
   + ###### В реализации аутентификации и авторизации на стороне бэкенда есть важные особенности, для понимания смотри описание в файле `my_cooking_laravel/README.md`

### Реализуем регистрацию пользователя

* Регистрация пользователя реализована за счет `fortify` на стороне backend, с запросом на web-route `/register`.  

##### Добавил PROXY в конфигурацию vue.config.js для переадресации api на backend:
`devServer: {`  
`&emsp; proxy: {`  
`&emsp; &emsp; // перенаправляем api`  
`&emsp; &emsp; ...`   
`&emsp; &emsp; // перенаправляем запрос на токен`  
`&emsp; &emsp; ...`   
`&emsp; &emsp; // перенаправляем запрос на авторизацию`  
`&emsp; &emsp; ...`   
`&emsp; &emsp; // перенаправляем запрос на регистрацию`  
`&emsp; &emsp; '/register': {`  
`&emsp; &emsp; &emsp; target: 'http://localhost:8000',`  
`&emsp; &emsp; },`
`&emsp; },`   
`}` 

* Перед переходом на страницу `Регистрация` со страницы `Логин` делается запрос на route `/sanctum/csrf-cookie` для получения токена. После заполнения всех полей на страницы `Регистрация` выполняется отправка данных. 
* Для регистрации пользователя необходимо в теле запроса методом post на route `/register` передать `name`, `email`, `password` и `password_confirmation`.
* Если регистрация прошла успешно, то приходит ответ `201`, пользователь сразу получает аутентификацию. Если регистрация не удалась, то приходит ответ `422`
* ###### Реистрация реализована и доступна к использованию, детали на стороне backend описаны в файле `my_cooking_laravel/README.md`

# Разворачивание проекта на локальном сервере

* !!! Важно !!!
* Данный проект, `my_cooking_vue`, является frontend частью проекта `My cooking` и расчитан на совместную работу с проектом `my_cooking_laravel`, являющимся backend частью основного проекта, поэтому для нормально работы необходимо запускать оба подпроекта.  
* Одновременный запуск двух подпроектов выполняется из двух разных окон терминала. Запуск из одного окна терминала невозможен
* Подпроект `my_cooking_vue` (frontend) запускается на порту 8080 по адресам http://localhost:8080/ и http://192.168.0.100:8080/
* Подпроект `my_cooking_laravel` (backend) запускается на порту 8000 по адресу http://localhost:8000/

### Порядок действий для запуска всего проекта

##### Установленное зарание ПО
* Я писал и запускал проекты в операционной системе Ubuntu в терминалах PHP-storm и все необходимое ПО было установлено зарание при работе с другими проектами
1. Node.js = v16.17.0
2. Composer = v2.2.6 2022-02-04 17:00:38
3. nvm = v0.35.3
4. npm = 8.15.0
5. PHP = v8.1.2 + пакеты: json, libxml, mbstring, mysqli, mysqlnd, openssl, pcntl, pcre, PDO, pdo_mysql, pdo_pgsql, pdo_sqlite, pgsql, Phar, posix, readline, Reflection, session, shmop, SimpleXML, sockets, sodium, SPL, sqlite3, standard, sysvmsg, sysvsem, sysvshm, tokenizer, xdebug, xml, xmlreader, xmlwriter, xsl, Zend OPcache, zip, zlib
6. Docker = v25.0.0 + контейнер postgres:15.4 (скачать контейнер postgeSQl: `docker pull postgres`)

##### Процес запуска
1. Создать папку проекта с удобным для вас названием, например `my_cooking`
2. Скопировать подпроекты c GitHub любым удобным для вас способом и поместить в папку из п.1
   * Проекты публичные и доступны для всех пользователей
   * `my_cooking_vue` (frontend):  https://github.com/AlexS342/my_cooking_vue
   * `my_cooking_laravel` (backend): https://github.com/AlexS342/my_cooking_laravel
   * важно отметить, что для запуска и нормальной работы проекта нет принципиальной разницы в структуре папок, так как подпроекты взаимодействуют через REST API и допускают запуск на двух отдельных хостингах.
3. Запуск backend приложения
   * Все действия выполняются в окне терминала №1
   1. В терминале перейти в корень проекта
   2. Установить зависимости командой `composer install`
   3. Скопировать файл `.env.example` в файл `.env` командой `cp .env.example .env`
   4. Сгенерировать уникальный ключь проекта командой `php artisan key:generate`
   5. Запускаем базу данных командой `sudo docker compose up -d`
   6. Параметры для подключения к базе данных занести в файл `.env`
      * все параметры для конфигурирования базы данных можно посмотреть в файле `docker-compose.yml`
         * DB_CONNECTION=pgsql
         * DB_HOST=127.0.0.1
         * DB_PORT=6500
         * DB_DATABASE=cooking
         * DB_USERNAME=user
         * DB_PASSWORD=pass
   7. Запустить миграции командой `php artisan migrate:fresh`
   8. Если необходимо, то запустить посев тестовых данных командой `php artisan db:seed`
   9. Запустить проект на локальном сервере командой `php artisan serve`
      * Проект доступен по ссылке http://127.0.0.1:8000 из вашего браузера, но внем нет реализации `view`
      * При необходимости остановить локальный сервер можно клавишами `Ctrl` + `C`
4. Запуск frontend приложения
   * Все действия выполняются в окне терминала №2
   1. В терминале перейти в корень проекта
   2. Установить зависимости командой `npm install`
   3. Запустить проект на локальном сервере командой `npm run serve`
      * Проект доступен по ссылке http://127.0.0.1:8080 из вашего браузера.
      * При необходимости остановить локальный сервер можно клавишами `Ctrl` + `C`
5. Для полноценной работы проекта необходимо запускать оба подпроекта паралельно
