<template>
    <div>
        foo
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 1
        }
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件对应的路由被confim之前调用，因为组件的实例还没有被创建
        // 因为当路由执行前，组件实例还没创建，所以不能获取当前组件的this
        console.log('beforeRouteEnter')
        // next('/boo');
        next((vm) => {
            // afterEach之后才会执行这个回调函数
            console.log(vm.a)
        })
    },
    beforeRouteUpdate(to, from, next) {
        // 当路由改变的时候，但是该组件被复用时调用
        // /foo/1跳转到/foo/2 之间进行跳转的时候，会被调用
        // 由于会渲染同样的foo组件，所以组件会被复用，生命周期不会被执行，这个钩子就是在这样的情况下调用
        // 可以获取到当前组件的this
        console.log('beforeRouteUpdate')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave')
        // 导航离开该组件对应的路由时调用， 可以访问到当前组件的this
        next()
        // 一般用来禁止用户还未保存修改前突然离开。该导航可以通过next(false)来取消
    }
}
</script>