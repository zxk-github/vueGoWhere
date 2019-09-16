
<template>
    <el-dialog
        title="提示"
        :visible.sync="sysDialog"
        width="30%"
        center
        @close="cancelDialog">
        <slot></slot>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelDialog">取 消</el-button>
            <el-button type="primary" @click="sureDialog">确 定</el-button>
        </span>
    </el-dialog>
</template>



<script>
  export default {
    props: ['showDialog'],
    data() {
        return {
            sysDialog: this.showDialog
        }
    },
    methods: {
        sureDialog() {
            this.sysDialog = false;
            this.$emit('sureDialog', this.sysDialog)
        },
        cancelDialog() {
            this.sysDialog = false;
            this.$emit('cancelDialog', this.sysDialog)
        }
    }
  };
</script>