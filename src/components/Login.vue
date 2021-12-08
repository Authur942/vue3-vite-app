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
          <el-input type="password" v-model="formParams.password" placeholder="请输入密码" @keyup.enter="submitForm()"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()

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

    const login = ref(null)

    const submitForm = () => {
      login.value.validate((valid) => {
        if (valid) {
          ElMessage.success('登录成功！')
          localStorage.setItem('ms_username', formParams.userName)
          router.push('/')
        } else {
          ElMessage.error('登录失败！')
          return false
        }
      })
    }

    const store = useStore()
    store.commit('clearTags')

    return {
      formParams,
      formRules,
      login,
      submitForm
    }
  }
}
</script>

<style lang="scss" scoped>
.login_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/login-bg.jpg');
  background-size: 100%;
}
</style>