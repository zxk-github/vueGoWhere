const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const dbInit = require('./db/init');
const Router = require('./routes');
const static  = require('koa-static');
const views = require('koa-views');
const path = require('path');
    

const app = new Koa();
const router = Router();

(async () => {
    await dbInit();
})()

app.use(cors());
app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}));


app.use(router.allowedMethods());
app.use(static(path.resolve(__dirname, '../public/dist')));
app.use(views(path.resolve(__dirname, '../public/dist')));

app.use(router.routes())

app.listen('4567')
console.log('server start at localhost:4567');
