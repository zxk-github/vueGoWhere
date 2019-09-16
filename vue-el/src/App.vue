<template>
  <div>
    <el-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :data="id"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="true"
    :on-success="success">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>

  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
        id: {
          userid: '123'
        }
      };
    },
    methods: {
      success(response, file, fileList) {
        console.log(response, file, fileList);
      },
      submitUpload() {
        console.log(this.fileList)
        console.log(this.$refs.upload.submit());
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>