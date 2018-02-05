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

html {
  font-size: calc(100vw / 7.5);
}

body {
  font-size: $--font-size-base;
}
a {
  text-decoration: none;
  font-size: $--font-size-base;
  color: black;
  &:hover {
    color: $--color-primary;
  }
}

ul {
  li {
    list-style: none;
  }
}

h3 {
  font-size: $--font-size-base + 2px;
}
h4 {
  font-size: $--font-size-base;
}
#app {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

@media screen and #{map-get($--breakpoints-spec, 'sm-and-up'))} {
  // 按照设计稿的宽度方式在PC端显示
  html {
    font-size: calc(375px / 7.5) !important;
  }
  #app {
    width: 375px;
    margin:0 auto;
  }
}
</style>
