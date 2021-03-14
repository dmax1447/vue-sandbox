<template>
  <div>
    <h1>main content</h1>
    <app-section>
      <app-list :list="userList"></app-list>
    </app-section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppSection from '../components/AppSection.vue';
import AppList from '../components/AppList.vue';

export default {
  name: 'slots',
  components: {
    AppList,
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
<style lang="scss">

</style>
