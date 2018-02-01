<template>
  <div class="my-activity">
    {{ src.album }}
  </div>
</template>
<script>
export default {
  name: 'MyActivity',
  props: {
    src: Object
  }
}
</script>
<style lang="scss" scoped>
</style>
