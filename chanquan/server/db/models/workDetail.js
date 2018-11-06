const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const WorkDetailSchema = new Schema({
    parentId: Schema.Types.ObjectId,
    title: String,
    desc: Array,
    achieve: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('workDetail', WorkDetailSchema);


