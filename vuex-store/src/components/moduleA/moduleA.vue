<template>
    <div>
        <h1>moduleA</h1>
        <p>{{count}}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapState('b', {
                count: state => state.count,
            })
        }
    }
</script>

<style scoped>

</style>