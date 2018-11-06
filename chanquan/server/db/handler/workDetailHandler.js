const WorkDetailSchema = require('../models/workDetail');

class WorkDetail{
    constructor() {}

    async create(ctx) {
        let newWorkDetail = null;
        let workDetail = ctx.request.body;
        try {
            newWorkDetail =  await new WorkDetailSchema(workDetail).save();
        } catch(e) {
            ctx.body = {
                err_code: 1,
                message: '保存失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '保存成功',
            data: newWorkDetail
        }
    }
    
    async list(ctx) {
        let workDetails = null;
        try {
            workDetails = await WorkDetailSchema.aggregate(
                [
                    {
                        $match: {
                                achieve: false
                        }
                    },
                    {
                        $lookup: {
                            from: "worktypes",
                            as: "worktype",
                            localField: "parentId",
                            foreignField: "_id"
                        }
                    },
                    {
                        $unwind:{ 
                            path: "$worktype", 
                            preserveNullAndEmptyArrays: true 
                        }
                     }
                ]
            )     
        } catch(err){
            ctx.body = {
                err_code: 1,
                message: '获取列表失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '获取列表成功',
            data: workDetails
        }
    }

    async update(ctx) {
        let data = ctx.request.body;
        let workDetail = null;
        try {
            workDetail = await WorkDetailSchema.findOneAndUpdate({_id:data._id}, data);
        } catch(err) {
            ctx.body = {
                err_code: 1,
                message: '更新失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '更新成功',
            data: workDetail
        }
    }

    async delete(ctx) {
        let id = ctx.request.body.id;
        let workDetail = null;
        try {
            workDetail = await WorkDetailSchema.findOneAndUpdate({_id:id}, {$set:{achieve: true}});
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
            workType = await WorkDetailSchema.findById(id);
        } catch(err) {
            ctx.body = {
                err_code: 1,
                message: '获取失败' 
            }
        }
        ctx.body = {
            err_code: 0,
            message: '获取成功',
            data: workType
        }
    }

    async listPortal(ctx) {
        let id = ctx.request.query.id;
        let workType = null;
        try {
            workType = await WorkDetailSchema.find({parentId: id, achieve: false});
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

module.exports = new WorkDetail();
