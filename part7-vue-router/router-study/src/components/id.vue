<template>
    <div>
        <span @click="tip"></span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: ''
        }
    },
    mounted() {
        
    },
    watch: {
        
    }
}
</script>
