<template>
    <div class="jiance">
        <el-aside width="200px">
            <el-tree
                :data="cityTree"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick">
                </el-tree>
        </el-aside>
        <el-main>
            <!-- 仅仅一个展示 -->
            <right :list="cityDtata"></right>
        </el-main>
    </div>
</template>

<script>
import Right from './right.vue';
    export default {
        name: 'jianceshuju',
        data() {
            return {
                cityTree: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                cityDtata: []
            }
        },
        mounted() {
            // 获取左边城市的
            this.getCityList();
            this.getRightData();
        },
        methods: {
            handleNodeClick (node) {
                console.log(node.label)
                this.getRightData(node.label)
            },
            getCityList() {
                // 进行数据的请求

                // 下面的代码在.then里面
                this.cityTree = [{
                label: '一级 1',
                children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }]
                this.getRightData(this.cityTree[0].label)
            },
            getRightData(area) {
                // 获取右边的数据
                // 根据城市获取到对应的数据

                // .then() {
                    
                // }
                this.cityDtata = [
                    
                ]
            }
        },
        components: {
            Right
        }
        
    }
</script>

<style scoped>
.jiance{
    display: flex;
    width: 100%;
}
</style>