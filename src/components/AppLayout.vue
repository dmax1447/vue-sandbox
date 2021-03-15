<template>
  <body class="page container">
    <header class="page__header">
      <slot name="header"></slot>
    </header>
    <main class="page__main">
      <slot name="main"></slot>
    </main>
    <footer class="page__footer">
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
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1440px;
    margin: 0 auto;

    &__header {
      margin-bottom: 30px;
    }

    &__main {
      flex-grow: 1;
    }
    &__footer {
      margin-top: 30px;
    }
  }
</style>
