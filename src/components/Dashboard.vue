<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="user_info">
            <img src="../assets/img/avator.jpg" alt="" />
            <div class="user_info_cont">
              <div class="user_info_name">
                {{ name }}
              </div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user_info_list">
            上次登录时间：
            <span>2021-9-21</span>
          </div>
          <div class="user_info_list">
            上次登录地点
            <span>广州</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
          <template #header>
            <div class="clearfix">
              <span>语言详情</span>
            </div>
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress
          >JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
        <el-col :span="16">
          <el-row :gutter="20" class="mgb20">
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid_content grid_con_1">
                  <i class="el-icon-user-solid grid_con_icon"></i>
                  <div class="grid_cont_right">
                    <div class="grid_num">1312</div>
                    <div>用户访问量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid_content grid_con_2">
                  <i class="el-icon-message-solid grid_con_icon"></i>
                  <div class="grid_cont_right">
                    <div class="grid_num">312</div>
                    <div>系统消息</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid_content grid_con_3">
                  <i class="el-icon-s-goods grid_con_icon"></i>
                  <div class="grid_cont_right">
                    <div class="grid_num">5312</div>
                    <div>数量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-card shadow="hover" style="height: 403px">
            <template #header>
              <div class="clearfix">
                <span>待办事项</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >添加</el-button
                >
              </div>
            </template>
            <el-table :show-header="false" :data="todoList" style="width: 100%">
              <el-table-column width="40">
                <template #default="">
                  <el-checkbox></el-checkbox></template></el-table-column
            ></el-table>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart'
import { reactive } from 'vue'
export default {
  name: 'dashboard',
  components: { Schart },
  setup () {
    const name = localStorage.getItem('ms_username')
    const role = name === 'admin' ? '超级管理员' : '普通用户'
    const data = reactive([
      {
        name: "2018/09/04",
        value: 1083,
      },
      {
        name: "2018/09/05",
        value: 941,
      },
      {
        name: "2018/09/06",
        value: 1139,
      },
      {
        name: "2018/09/07",
        value: 816,
      },
      {
        name: "2018/09/08",
        value: 327,
      },
      {
        name: "2018/09/09",
        value: 228,
      },
      {
        name: "2018/09/10",
        value: 1065,
      },
    ])

    const options = {
      type: "bar",
      title: {
        text: "最近一周各品类销售图",
      },
      xRorate: 25,
      labels: ["周一", "周二", "周三", "周四", "周五"],
      datasets: [
        {
          label: "家电",
          data: [234, 278, 270, 190, 230],
        },
        {
          label: "百货",
          data: [164, 178, 190, 135, 160],
        },
        {
          label: "食品",
          data: [144, 198, 150, 235, 120],
        }
      ]
    }

    const options2 = {
      type: "line",
      title: {
        text: "最近几个月各品类销售趋势图",
      },
      labels: ["6月", "7月", "8月", "9月", "10月"],
      datasets: [
        {
          label: "家电",
          data: [234, 278, 270, 190, 230],
        },
        {
          label: "百货",
          data: [164, 178, 150, 135, 160],
        },
        {
          label: "食品",
          data: [74, 118, 200, 235, 90],
        }
      ]
    }

    const todoList = reactive([
      {
        title: "今天要修复100个bug",
        status: false,
      },
      {
        title: "今天要修复100个bug",
        status: false,
      },
      {
        title: "今天要写100行代码加几个bug吧",
        status: false,
      },
      {
        title: "今天要修复100个bug",
        status: false,
      },
      {
        title: "今天要修复100个bug",
        status: true,
      },
      {
        title: "今天要写100行代码加几个bug吧",
        status: true,
      },
    ])

    return {
      name,
      role,
      data,
      options,
      options2,
      todoList,
    }
  }
}
</script>