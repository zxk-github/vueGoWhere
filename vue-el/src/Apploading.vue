<template>
  <div>
    <div class="box">
      <el-table
        v-loading="loading2"
        element-loading-text="拼命加载中..."
        element-loading-background="rgba(0, 0, 0, 0.4)"
        :target="target"
        :data="tableData"
        style="width: 100%"
        :height="height">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>`
    </div>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        loading2: true,
        target: null,
        height: 'none'
      };
    },
    created() {
      
    },
    mounted() {
      this.height="500";
      this.target = document.querySelector('.box');
      setTimeout(() => {
        this.tableData = [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }];
        this.loading2 = false;
      }, 100000);
    }
  };
</script>