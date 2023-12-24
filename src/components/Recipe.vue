<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Какой-то рецепт из компонента
      <a href="#" target="_blank" rel="noopener">Приготовить этот рецепт</a>.
    </p>
    <h3>Продукты</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">Морковь</a></li>
      <li><a href="#" target="_blank" rel="noopener">Лук репчатый</a></li>
      <li><a href="#" target="_blank" rel="noopener">Петрушка</a></li>
    </ul>
    <h3>Посуда</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">Чашка</a></li>
      <li><a href="#" target="_blank" rel="noopener">Ложка</a></li>
      <li><a href="#" target="_blank" rel="noopener">Вылка</a></li>
      <li><a href="#" target="_blank" rel="noopener">Сковорода</a></li>
      <li><a href="#" target="_blank" rel="noopener">Скалка</a></li>
    </ul>
    <h3>Авторы</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">Вася</a></li>
      <li><a href="#" target="_blank" rel="noopener">Петя</a></li>
      <li><a href="#" target="_blank" rel="noopener">Маша</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    msg: String
  }
}
</script>

<!-- Добавьте атрибут "scoped", чтобы ограничить CSS только этим компонентом -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
