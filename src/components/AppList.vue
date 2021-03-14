<template>
  <ul class="list">
    <li v-for="(item, idx) in list" class="list__item" :key="idx">
      {{ item.id }} {{ item.name}} {{ item.phone }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
  .list {
    margin-bottom: 20px;
    &__item {
      margin-bottom: 15px
    }
  }
</style>
