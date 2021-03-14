<template>
  <app-layout class="layout">
    <template #header>
      <router-link to="/">Main</router-link>
    </template>
    <template #main>
      <router-view></router-view>
    </template>
    <template #footer>
      (c) copyright 2021 dmax1447
    </template>
  </app-layout>
</template>

<script>
import AppLayout from './components/AppLayout.vue';

export default {
  name: 'App',

  components: {
    AppLayout,
  },

  data: () => ({
    drawer: false,
    items: [
      { title: 'Сибирские' },
      { title: 'Домашние' },
      { title: 'Царские' },
      { title: 'С рыбой' },
    ],
    offset: true,
  }),
  async created() {
    await this.$store.dispatch('loadUsers');
  },
};
</script>
