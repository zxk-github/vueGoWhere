<template>
    <div>
        <div id="toast"></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    var Toast = Vue.extend({
        data() {
            return {
                msg: 'total'
            }
        },
        template: `<p @click="show">{{msg}}</p>`,
        methods: {
            show() {
                console.log(this.msg);
            }
        }
    })  // 生成了一个预设了部分选项的Vue构造器
    new Toast().$mount('#toast');
    export default {
        
    }
</script>

<style scoped>

</style>