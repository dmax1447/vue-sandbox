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
        <router-link to="/users">Users / Vuex, vue-wait и асинхронные запросы</router-link>
      </li>
      <li>
        <router-link to="/users">Render / Рендер функция</router-link>
      </li>
      <li>
        <router-link to="/vuetify">Vuetify UI framework</router-link>
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
