<template>
  <div id="app">
      <router-view/>
      <router-view class="view" name="search"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/assets/theme/index.css'

Vue.use(ElementUI)

export default {
  name: 'App'
}
</script>

<style lang="scss">

@function px2rem($px) {
  @return ($px / 75) + rem;
}

html {
  font-size: calc(100vw / 7.5);
}

a {
  text-decoration: none;
  font-size: $--font-size-base;
  &:hover {
    color: $--color-primary;
  }
}

ul {
  li {
    list-style: none;
  }
}

#app {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
</style>
