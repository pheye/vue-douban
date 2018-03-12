<template>
  <div class="my-movie-card">
    <img v-if="item.images" :src="item.images.large" alt="">
    <div class="my-movie-card__title">{{item.title}}</div>
    <div v-if="item.rating.average == 0" class="my-movie-card__noscore">
      <span>暂无评分</span>
    </div>
    <div v-if="item.rating.average > 0">
      <el-rate v-if="item.rating" disabled  v-model="item.rating.average" :max="item.rating.max / 2" class="my-movie-card__rate"></el-rate>
      <span class="my-movie-card__score">{{item.rating.average}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyMovieCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.my-movie-card {
  display: inline-block;
  width: 2.15rem;
  img {
    max-width: 100%;
    height: px2rem(200);
  }

  .title {
    font-size: $--font-size-large;
    text-align: center;
    margin-top: px2rem(10);
    margin-bottom: px2rem(10);
  }
}
</style>

<style lang="scss">
.my-movie-card {
  .my-movie-card__title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
    text-align:center;
    margin-top: px2rem(8);
    margin-bottom: px2rem(8);
  }
  .my-movie-card__noscore {
    text-align: center;
    color: $--color-text-secondary;
  }
  .my-movie-card__rate {
    display: inline-block;
    .el-rate__icon {
      font-size: px2rem(16);
      margin-right: px2rem(4);
    }
  }
  .my-movie-card__score {
    font-size: $--font-size-small;
  }
}
</style>
