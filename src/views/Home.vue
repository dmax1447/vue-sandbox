<template>
  <div class="home">
    <h1>home page</h1>
    <p>is data loading: {{ $wait.is('userLoader') }}</p>
    <h2>Список страниц</h2>
    <ul>
      <li>
        <router-link to="/slots">Slots / Слоты</router-link>
      </li>
      <li>
        <router-link to="/rest">Users / Vuex, vue-wait и асинхронные запросы</router-link>
      </li>
      <li>
        <router-link to="/users">Записная книжка: CRUD & REST API</router-link>
      </li>
      <li>
        <router-link to="/render">Render / Рендер функция</router-link>
      </li>
      <li>
        <router-link to="/vuetify">Vuetify UI framework</router-link>
      </li>
      <li>
        <router-link to="/ui-elements">Some UI elements from different libs</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>
