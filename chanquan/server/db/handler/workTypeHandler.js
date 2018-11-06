const WorkTypeSchema = require('../models/workType');

class WorkType{
    constructor() {}

    async create(ctx) {
        let newWorkType = null;
        let workType = ctx.request.body;
        try {
            newWorkType =  await new WorkTypeSchema(workType).save();
        } catch(e) {
            ctx.body = {
                err_code: 1,
                message: '保存失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '保存成功',
            data: newWorkType
        }
    }  
    
    async list(ctx) {
        let workTypes = null;
        try {
            workTypes = await WorkTypeSchema.find({achieve: false});
        } catch(err) {
            ctx.body = {
                err_code: 1,
                message: '获取列表失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '获取列表成功',
            data: workTypes
        }
    }

    async update(ctx) {
        let id = ctx.request.body.id;
        let workType = null;
        try {
            workType = await WorkTypeSchema.findOneAndUpdate({_id:id}, ctx.request.body);
        } catch(err) {
            ctx.body = {
                err_code: 1,
                message: '更新失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '更新成功',
            data: workType
        }
    }

    async delete(ctx) {
        let id = ctx.request.body;
        let workType = null;
        try {
            workType = await WorkTypeSchema.findOneAndUpdate({_id:id.id}, {$set:{achieve: true}});
        } catch(err) {
            ctx.body = {
                err_code: 1,
                message: '删除失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '删除成功'
        }
    }

    async getDetail(ctx) {
        let id = ctx.request.query.id;
        let workType = null;
        try {
            workType = await WorkTypeSchema.findById(id);
        } catch(err) {
            ctx.body = {
                err_code: 1,
                message: '获取列表失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '获取列表成功',
            data: workType
        }
    }
    


}

module.exports = new WorkType();
