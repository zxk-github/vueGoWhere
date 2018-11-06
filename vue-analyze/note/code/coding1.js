function observe(obj, cb){
    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key], cb)
    })
}

function defineReactive(obj, key, val, cb) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            return val;
        },
        set: (newVal) => {
            val = newVal;
            cb();
        }
    })
}

class Vue {
    constructor (options) {
        this.$data = this._data = options.data;
        observe(this._data, options.render)
        _proxy.call(this, options.data )
    }
}

function _proxy (data) {
    const _this = this;
    Object.keys(data).forEach( key => {
        Object.defineProperty(_this, key, {
            configurable: true,
            enumerable: true,
            get: () => {
                return _this.data[key]
            },
            set: (val) => {
                _this._data[key] = val;
            }
        })
    })
}



let app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    render() {
        console.log('render...');
    }
})

app._data.msg = 'hello word';
app.$data.msg = 'aaa';
app.msg = 'bbb'
console.log(app.$data.msg);
console.log(app._data.msg);

