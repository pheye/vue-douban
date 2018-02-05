<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/douban-app-logo.png" alt="下载豆瓣">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神角落</div>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
export default {
  name: 'download-app',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.download-app {
  padding: 0 0 px2rem(40) 0;
  margin-top: px2rem(100);
  margin-bottom: px2rem(60);
  text-align: center;
  font-size: 28px;
}

.info {
  margin: 0 auto px2rem(30);
  overflow: hidden;
  text-align: left;
  font-size: 24px;
  display: inline-block;
  color: #111;
}

img {
  float: left;
  width: px2rem(96);
  height: px2rem(96);
  margin-right: px2rem(24);
}

.info-content {
  overflow: hidden;
}

strong {
  font-size: 30px;
  font-weight: normal;
  line-height: px2rem(56);
}

.download-app a:last-child {
  display: block;
  color: #42bd56;
  text-decoration: none;
}
</style>
