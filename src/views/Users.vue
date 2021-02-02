<template>
  <div class="users">
    <h1>This is users page</h1>
    <p>is user loading: {{ $wait.is('userLoader') }}</p>

    <div v-if="!$wait.is('userLoader')" class="users">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
        <tr v-for="contact in userList" :key="contact.id">
          <td>{{ contact.id }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.phone }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'users',
  mounted() {
    if (!this.userList && !this.$wait.is('userLoader')) {
      this.$store.dispatch('loadUsers');
    }
  },
  data: () => ({
    loaded: null,
  }),
  computed: {
    ...mapGetters(['userList']),
  },
  methods: {

  },
};
</script>

<style lang="scss">
  .users{
    td, th {
      text-align: left;
      min-width: 50px;
      padding: 0.5rem;
    }
  }
</style>
