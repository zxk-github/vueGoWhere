const myPlugin = {};
myPlugin.install = function (Vue, options) {
    console.log()
    if(options.use) {
        Vue.mixin({
            created() {
                console.log('这是自定义插件')
            }
        })
    }
}

export default myPlugin;