<template>
  <div class="my-scroll-view">
    <my-movie-card :item="item" v-for="(item, index) in items" :key="index" class="my-scroll-view-card"></my-movie-card>
  </div>
</template>
<script>
import MovieCard from '@/components/MovieCard'
export default {
  name: 'MyScrollView',
  components: {
    [MovieCard.name]: MovieCard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.my-scroll-view {
  overflow-x: scroll;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;

  .my-scroll-view-card {
    margin-right: 0.1rem;
    flex-shrink: 0;
  }
}
</style>
