<template>
<div id="my-home">
  <my-sub-nav></my-sub-nav>
  <div class="my-home-list">
    <my-activity v-for="(item, index) in activities.data" :key="index" :src="item">
    </my-activity>
  </div>
  <infinite-loading @infinite="handleLoading">
    <my-loading slot="spinner"></my-loading>
  </infinite-loading>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import {QUERY_EVENT} from '@/store/actions'
import SubNav from '@/components/SubNav'
import Activity from '@/components/Activity'
import Loading from '@/components/Loading'
import _ from 'lodash'

export default {
  components: {
    [SubNav.name]: SubNav,
    [Activity.name]: Activity,
    [Loading.name]: Loading,
    InfiniteLoading
  },
  computed: {
    ...mapState({
      activities: (state) => state.activities
    })
  },
  created () {
    console.log('on create')
    this.queryEvent({start: 0, clear: true})
  },
  methods: {
    ...mapActions({
      [_.camelCase(QUERY_EVENT)]: QUERY_EVENT
    }),
    handleLoading ($state) {
      // 刻意降低加载速度，以看到加载条
      setTimeout(async () => {
        try {
          await this.queryEvent({})
          $state.loaded()
        } catch (e) {
          console.log(e)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
</style>
