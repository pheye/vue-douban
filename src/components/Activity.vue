<template>
  <div class="my-activity">
    <router-link :to="{name: 'ActivityDetail', params: {id: item.id}}">
      <el-row type="flex" class="my-activity-content">
        <el-col :span="18" class="my-activity-content__left">
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </el-col>
        <el-col :span="6" class="my-activity-content__right">
          <img v-lazy="item.image_hlarge" alt="cover">
        </el-col>
      </el-row>
      <el-row type="flex" class="my-activity-author">
        <el-col>
          <span>{{item.category_name}}</span>
        </el-col>
        <el-col style="text-align:right" v-if="item.subcategory_name">
          <span>本活动来自栏目 {{item.subcategory_name}}</span>
        </el-col>
      </el-row>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'MyActivity',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>
<style lang="scss" scoped>
.my-activity {
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid $--border-color-light;

  .my-activity-content__left {
    margin-right: 0.25rem;
    h3 {
      margin-top:0;
      font-size: $--font-size-large - 2px;
    }
    p {
      font-size: $--font-size-small - 2px;
      color: $--color-text-secondary;
    }
  }
  .my-activity-content__right {
    img {
      max-width: 100%;
    }
  }
  .my-activity-author {
    margin-top: 0.25rem;
    font-size: $--font-size-small - 2px;
    color: $--color-text-secondary;
  }
}
</style>
