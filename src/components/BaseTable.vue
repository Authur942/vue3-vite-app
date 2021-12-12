<!-- 基础表格 -->
<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-lx-cascades"></i> 基础表格
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="handle_box">
            <el-select v-model="query.address" placeholder="地址" class="handle_select mr10">
                <el-option key="1" label="广东省" value="广东省"></el-option>
                <el-option key="2" label="湖南省" value="湖南省"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
interface DataProps { }
export default {
    name: '',
    setup() {
        const query = reactive({
            address: '',
            name: '',
            pageIndex: 1,
            pageSize: 10
        })
        const tableData = ref([])

        console.log('1-开始创建组件-setup')
        const data: DataProps = reactive({

        })
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        const refData = toRefs(data);
        return {
            query,
        }

    }
};
</script>
<style lang='scss' scoped>
</style>