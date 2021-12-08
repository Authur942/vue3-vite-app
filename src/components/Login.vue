<template>
  <div class="login_wrap">
    <div class="ms_login">
      <div class="ms_title">后台管理系统</div>
      <el-form
        :model="formParams"
        :rules="formRules"
        ref="login"
        label-width="0px"
        class="ms_content"
      >
        <el-form-item prop="userName">
          <el-input v-model="formParams.userName" placeholder="请输入用户名">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
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
      userName: [
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

  .ms_login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.7);
    overflow: hidden;

    .ms_title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #000;
      border-bottom: 1px solid #fff;
    }

    .ms_content {
      padding: 30px 30px;
    }
  }
}
</style>