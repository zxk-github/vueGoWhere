<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
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
  </el-table>
</template>

<script>
  export default {
    props: {
      rowData: {
        required: true
      }
    },
    created() {
      console.log(this.rowData);
    },
    methods: {
      fn() {
        const id = this.rowData.id
        // 查询操作
      }
    },
    data() {
      return {
        tableData: [this.rowData]
      }
    }
  }
</script>
隐藏代码
¶