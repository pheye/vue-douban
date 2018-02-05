<template>
  <div class="banner">
    <!-- Ad banner -->
    <template v-if="adImg">
      <div class="banner-bg ad" v-if="adImg">
        <img :src="adImg" alt="ad">
        <span>广告</span>
      </div>
    </template>
    <!-- Universal banner -->
    <template v-else>
      <div class="banner-bg">
        <img src="../assets/promotion_bg.jpg" alt="cover">
      </div>
      <div class="content">
        <div>
          <span class="title">{{title}}</span>
        </div>
        <div class="button-wrapper">
          <span class="download">极速下载</span>
          <span class="open">打开</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    // Banner title
    title: {
      type: String,
      required: false,
      default: '打开App, 浏览更多'
    },
    // Ad banner
    adImg: {
      type: String,
      required: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: px2rem(160);

  img {
    max-width: 100%;
  }
}

.banner-bg {
  position: absolute;
}

.ad {
  span {
    position: absolute;
    right: 0;
    bottom: 0.2rem;
    padding: 0.4rem;
    font-size: 1.2rem;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.content {
  position: absolute;
  right: px2rem(10);
  left: px2rem(18);
  display: flex;
  height: px2rem(80);
  justify-content: space-between;
  align-items: center;

  .title {
    padding-left: 0.2rem;
    font-size: $--font-size-base;
    font-weight: normal;
    line-height: px2rem(22);
    color: #2CA532;
  }

  .download, .open {
    display: inline-block;
    width: auto;
    padding: 0 0.2rem;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    border: 1px solid #42bd56;
    border-radius: 4px;
  }

  .download {
    color: #fff;
    background: #42bd56;
  }

  .open {
    color: #42bd56;
  }
}
</style>
