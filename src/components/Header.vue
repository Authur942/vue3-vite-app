<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse_btn" @click="collapseChage"><i class="el-icon-s-fold"></i></div>
    <div class="logo">后台管理系统</div>
    <div class="header_right">
      <div class="header_user_icon">
        <!-- 消息中心 -->
        <div class="btn_bell">
          <el-tooltip effect="dark" placement="bottom" :content="message ? `有${message}条未读消息` : '消息中心'">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn_bell_badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user_avator">
          <img src="../assets/img/avator.jpg" alt="" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user_name" trigger="click" @command="handleCommand">
          <span class="el_dropdown_link">
            {{ username }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/Authur942" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item command="loginout" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const username = localStorage.getItem('ms_username')
    const message = 2

    const store = useStore()
    const collapse = computed(() => store.state.collapse)
    // 侧边栏折叠
    const collapseChage = () => {
      store.commit('handleCollapse', !collapse.value)
    }

    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        collapseChage()
      }
    })

    // 用户名下拉菜单选择事件
    const router = useRouter()
    const handleCommand = (command) => {
      if (command == 'loginout') {
        localStorage.removeItem('ms_username')
        router.push('/login')
      } else if (command == 'user') {
        router.push('/user')
      }
    }

    return {
      username,
      message,
      collapse,
      collapseChage,
      handleCommand
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  box-sizing: border-box;
  background-color: #242f42;

  .collapse_btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }
  .header_right {
    float: right;
    padding-right: 50px;

    .header_user_icon {
      display: flex;
      height: 70px;
      align-items: center;

      .btn_bell {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;

        .el-icon-bell {
          color: #fff;
        }

        .btn_bell_badge {
          position: absolute;
          right: 0;
          top: -2px;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #f56c6c;
          color: #fff;
        }
      }

      .user_avator {
        margin-left: 20px;
        margin-right: 10px;

        img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }

      .user_name {
        .el_dropdown_link {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
