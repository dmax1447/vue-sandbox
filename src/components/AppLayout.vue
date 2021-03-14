<template>
  <body>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </body>
</template>

<script>
export default {
  name: 'app-layout',
};
</script>
<style lang="scss">

</style>
