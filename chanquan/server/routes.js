const Router = require('koa-router');
const workTypeHandler = require('./db/handler/workTypeHandler');
const workDetailHandler = require('./db/handler/workDetailHandler');
const fs = require('fs');

module.exports = () => {
    const router = new Router();

    router.post('/join/api/workType/add', workTypeHandler.create);
    router.get('/join/api/workType/getList', workTypeHandler.list);
    router.put('/join/api/workType/update', workTypeHandler.update);
    router.put('/join/api/workType/delete', workTypeHandler.delete);
    router.get('/join/api/workType/getDetail', workTypeHandler.getDetail);

    router.post('/join/api/workDetail/add', workDetailHandler.create);
    router.get('/join/api/workDetail/getList', workDetailHandler.list);
    router.put('/join/api/workDetail/update', workDetailHandler.update);
    router.put('/join/api/workDetail/delete', workDetailHandler.delete);
    router.get('/join/api/workDetail/getDetail', workDetailHandler.getDetail);
    router.get('/join/api/workDetail/listPortal', workDetailHandler.listPortal);
    
    router.get('/**', async (ctx, next) => {
        await ctx.render('index');
    });
    

    return router;
}