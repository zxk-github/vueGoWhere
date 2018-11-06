const mongoose = require('mongoose');
// const db = 'mongodb://campus_recruite:315e76d179153e86@192.168.76.223:7019,192.168.76.224:7019,192.168.76.225:7019/campus_recruite?replicaSet=7019&authSource=admin'
const db = 'mongodb://localhost/luojilab';
mongoose.Promise = global.Promise;

const connect = () => {
    let maxConnectTimes = 0;
    return new Promise((resolve, reject) => {
        // if(process.env.NODE_ENV !== 'production') {
        //     mongoose.set('debug', true);
        // }

        mongoose.connect(db);
        
        mongoose.connection.on('disconnected', () => {
            maxConnectTimes ++;
            if (maxConnectTimes < 5) {
                mongoose.connect(db);
            } else {
                throw new Error('mongodb shut down !!!')
            }
        })

        mongoose.connection.on('error', err => {
            reject(err);
        })

        mongoose.connection.once('open', () => {
            resolve();
        })
    })
}

module.exports = connect;