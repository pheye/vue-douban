<template>
  <div>
    <my-header></my-header>
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components: {
    [Header.name]: Header
  }
}
</script>
<style lang="scss">
</style>
