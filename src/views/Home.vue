<template>
  <div class="home">
    <p>home page</p>
    <p>is user loading: {{ $wait.is('userLoader') }}</p>
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
