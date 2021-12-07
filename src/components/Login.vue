<template>
  <div class="login_wrap">
    <div class="ms_login">
      <div class="ms_title"></div>
      <el-form
        :model="formParams"
        :rules="formRules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="formParams.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formParams.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup () {
    const formParams = reactive({
      userName: 'admin',
      password: '123456'
    })

    const formRules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
      ],
    }

    return {
      formParams,
      formRules
    }
  }
}
</script>

<style lang="scss" scoped>
</style>