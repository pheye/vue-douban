<template>
  <div class="my-login">
    <el-row class="my-login-header" type="flex" align="middle">
      <el-col :span="6">
        <a href="javascript:history.go(-1);">取消</a>
      </el-col>
      <el-col :span="12">
        <h3>登录豆瓣</h3>
      </el-col>
    </el-row>
    <el-form @submit.native.prevent class="my-login-form">
      <el-form-item>
        <el-input v-model="form.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')" size="medium" class="my-login-form__submit">登陆</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  })
}
</script>
<style lang="scss" scoped>
.my-login {
  $--header-height: 1rem;
  .my-login-header {
      height: $--header-height;
      line-height: $--header-height;
      a {
        color: $--color-primary;
        vertical-align: middle;
        line-height: $--header-height;
      }
      h3 {
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        line-height: $--header-height;
      }
  }
  .my-login-form {
    .my-login-form__submit {
        width: 100%;
        height: 0.75rem;
    }
  }
}
</style>
