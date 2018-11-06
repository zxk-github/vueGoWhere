<template>
    <div>
        <div>1212</div>
        <router-link to="foo" exact>id1</router-link>
        <router-link to="boo" append>id2</router-link>
        <!-- 12311 {{id}} {{userName}} -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // props:["id", 'userName'],
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
}
</script>

