<template>
    <div>
        <h1>moduleB</h1>
        <button @click="change">moduleB click</button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';
    export default {
        computed: {

        },
        methods: {
            ...mapMutations('b', [
                'increaseCount'
            ]),
            change() {
                this.increaseCount();
            }
        }
    }
</script>

<style scoped>

</style>