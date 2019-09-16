<template>
    <div class="pag">
      <span class="tiao">{{page.size}}条/页</span>
      <el-pagination
        background
        @current-change="pageChange"
        :current-page="page.currentPage"
        :page-size="page.size"
        layout="total, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>
  </template>

  <script>
  
    export default {
        props: ['page'],
        methods: {
            pageChange(val) {
            this.page.currentPage = val;
            this.$emit('pageChange', val);
            }
        }
    }
  </script>

<style>
  .pag {
    display: flex;
    align-items: center;
  }
  
  .tiao {
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    color: #606266;
  }
</style>

  