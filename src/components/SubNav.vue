<template>
  <div id="my-subnav">
    <el-row>
      <el-col>
        <el-button type="default">影院热映</el-button>
        <el-button type="default">欧美新碟榜</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="default">注册帐号</el-button>
        <router-link :to="{name: 'Login'}" replace class="my-subnav-btn">登录豆瓣</router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'MySubNav'
}
</script>
