<template>
    <div>
        <input type="text" v-model="msg" />
        <p>{{msg | capital }}</p>
        <p>{{ msg | add }}</p>
    </div>
</template>

<script>
    import Vue from 'vue';
    Vue.filter('add', function (value) {
        return value + '456'
    })
    export default {
        data() {
            return {
                msg: ''
            }
        },
        filters: {
            capital(value) {
                return value + 'capital';
            }

        }
    }
</script>

<style scoped>

</style>