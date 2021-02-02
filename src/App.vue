<template>
  <v-app>
    <v-app-bar
      app
      dense
    >
      <v-btn text to="/">Главная</v-btn>
      <v-btn text to="/users">Users</v-btn>
      <v-btn text to="/pirojki">Выпечка</v-btn>
      <v-btn text to="/rest">REST test</v-btn>
      <v-btn text to="/render">Render</v-btn>
      <v-menu :offset-y="offset">
      <template v-slot:activator="{ on }">
        <v-btn text
          v-on="on"
        >
          Дропдаун
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
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
    // this.$wait.start('userLoader');
    await this.$store.dispatch('loadUsers');
    // this.$wait.end('userLoader');
  },
};
</script>
