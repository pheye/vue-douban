<template>
  <div class="my-activity-detail">
    <my-banner></my-banner>
    <div v-if="!loading && eventItem" v-loading="loading">
      <h3 class="detail-title">
        {{eventItem.title}}
        <el-tag type="success">{{eventItem.loc_name}}</el-tag>
      </h3>
      <div class="detail-poster">
        <img :src="eventItem.image_hlarge" alt="">
      </div>
      <div class="detail-detail">
        <span>时间:&nbsp;&nbsp;</span>
        <ul>
          <li>{{eventItem.begin_time}}</li>
          <li>{{eventItem.end_time}}</li>
        </ul>
      </div>
      <div class="detail-detail">
        <span>地点:&nbsp;&nbsp;</span>
        <ul>
          <li>{{eventItem.address}}</li>
        </ul>
      </div>
      <div class="detail-detail">
        <span>费用:&nbsp;&nbsp;</span>
        <ul>
          <li>{{eventItem.fee_str}}</li>
        </ul>
      </div>
      <div class="detail-detail">
        <span>类型:&nbsp;&nbsp;</span>
        <ul>
          <li>{{eventItem.category_name}}</li>
        </ul>
      </div>
      <div class="detail-detail">
        <span>起始时间:&nbsp;&nbsp;</span>
        <ul>
          <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
        </ul>
      </div>
      <div class="detail-tags" v-if="eventItem.tags">
        <el-tag type="info" v-for="(item,index) in tags" :key="index" style="margin-right:4px;">{{item}}</el-tag>
      </div>
      <div class="detail-desc">
        <h4 class="detail-desc__title" >活动详情</h4>
        <div v-if="eventItem.content" class="detail-desc__content" v-html="eventItem.content"></div>
      </div>
    </div>
    <my-download-app></my-download-app>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import {GET_EVENT} from '@/store/actions'
import Banner from '@/components/Banner'
import DownloadApp from '@/components/DownloadApp'
import _ from 'lodash'

export default {
  components: {
    'my-banner': Banner,
    'my-download-app': DownloadApp
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState({
      activities: (state) => state.activities,
      eventItem: (state) => state.activities.currentItem
    }),
    tags () {
      let item = this.$store.state.activities.currentItem
      if (!item.tags) {
        return []
      }
      return this.toArray(item.tags)
    }
  },
  methods: {
    ...mapActions({
      [_.camelCase(GET_EVENT)]: GET_EVENT
    }),
    toArray (value) {
      return value.split(',')
    }
  },
  async created () {
    try {
      await this.getEvent({id: this.$route.params.id})
    } catch (e) {
      console.log(e)
    }
    this.loading = false
  }
}
</script>
<style lang="scss">
.my-activity-detail {
  .detail-title {
    margin-top: 0;
  }
  .detail-poster {
    max-width: 90%;
    margin: 0 auto;
    img {
      max-width: 100%;
    }
  }
  .detail-detail {
    font-size: $--font-size-small;
    span {
      float: left;
    }
  }

  .detail-desc {
    .detail-desc__title {
      color: $--color-primary;
    }
    .detail-desc__content {
      max-width: 100%;
      overflow: hidden;
      font-size: $--font-size-small;
      object {
        max-width: 100%;
      }
    }
  }
}
</style>
