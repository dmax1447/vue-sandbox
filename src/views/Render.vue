<template>
  <div class="">
    <h1>Render function page</h1>
    <ancored-header :level="3" href="ancor3">
      Content passed by slot,
      another content following,
      [link-name](http://link-url.com)
      string content end
    </ancored-header>
  </div>
</template>

<script>
import AncoredHeader from '../components/AncoredHeader.vue';

export default {
  name: 'Home',
  components: {
    AncoredHeader,
  },
};
</script>
