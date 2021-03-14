<template>
  <div>
    <app-section>
      <app-list :list="userList"></app-list>
    </app-section>
    <hr>
    <app-layout class="layout">
      <template #header>
        header content
      </template>
      <template #main>
        <h1>main content</h1>
        <pre>{{ userList }}</pre>
      </template>
      <template #footer>
        footer content
      </template>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLayout from '../components/AppLayout.vue';
import AppSection from '../components/AppSection.vue';
import AppList from '../components/AppList.vue';

export default {
  name: 'slots',
  components: {
    AppList,
    AppLayout,
    AppSection,
  },
  data() {
    return {
      announce: {
        title: 'hello everybody!',
        text: 'welcome to slots',
      },
    };
  },
  computed: {
    ...mapGetters(['userList']),
    isUserListReady() {
      return this.userList && !this.$wait.is('userLoader');
    },
  },
};
</script>
