<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppSection',
};
</script>

<style >
  .section{
    padding: 15px 30px;
    outline: 1px dashed green;
    margin: 30px;
  }
</style>
