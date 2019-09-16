<template>
    <div>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    const getPathComponent = {
        methods: {
            getPath() {
                console.log(window.location.href);
            }
        },
        data() {
            return {
                a: 123,
                obj: {
                    b: 456
                },
                arr: [123, {a: 1}, 'b']
            }
        },
        created() {
            console.log('created这是混合对象')
        },
        mounted() {
            console.log('mounted这是混合对象')
        }
    }
    export default {
        data() {
            return {
                msg: 12,
                obj: {
                    c: 123,
                    b: 789
                },
                arr: [3]
            }
        },
        mixins: [getPathComponent],
        created() {
            this.getPath();
            console.log(this.$data);
        }
    }
</script>

<style scoped>

</style>