<template>
  <div class="my-subnav">
    <el-row type="flex" align="middle">
      <el-col :span="12" class="my-subnav-link">
        <router-link :to="{name: 'Movie'}" >影院热映</router-link>
      </el-col>
      <el-col :span="12" class="my-subnav-link">
        <router-link :to="{name: 'Status'}" >欧美新碟榜</router-link>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="12" class="my-subnav-link">
        <router-link :to="{name: 'Register'}" >注册帐号</router-link>
      </el-col>
      <el-col :span="12" class="my-subnav-link">
        <router-link :to="{name: 'Login'}" >登录豆瓣</router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'MySubNav'
}
</script>
<style lang="scss">
.my-subnav {
  .my-subnav-link {
    display: flex;
    background-color: #f5f4f5;
    padding: 0.3rem 0.4rem;
    margin: 0.1rem;
    justify-content: center;
  }
}
</style>
