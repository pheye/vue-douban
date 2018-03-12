<template>
  <div class="my-movie">
      <div class="my-movie-hot">
        <el-row type="flex" align="middle" justify="space-around">
          <el-col><h3>影院热映</h3></el-col>
          <el-col class="my-movie-hot__more"><a href="#">更多</a></el-col>
        </el-row>
        <my-scroll-view :items="movies.hotMovie"></my-scroll-view>
      </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import {QUERY_MOVIE} from '@/store/actions'
import _ from 'lodash'
import MovieCard from '@/components/MovieCard'
import ScrollView from '@/components/ScrollView'

export default {
  components: {
    [MovieCard.name]: MovieCard,
    [ScrollView.name]: ScrollView
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState({
      movies: (state) => state.movies
    })
  },
  async created () {
    await this.queryMovie({type: 'hot'})
    await this.queryMovie({type: 'new'})
    await this.queryMovie({type: 'top'})
    this.loading = false
  },
  methods: {
    ...mapActions({
      [_.camelCase(QUERY_MOVIE)]: QUERY_MOVIE
    })
  }
}
</script>
<style lang="scss">
.my-movie-hot {
  .my-movie-hot__more {
    text-align: right;
    a {
      color: $--color-primary;
    }
  }
}
</style>
