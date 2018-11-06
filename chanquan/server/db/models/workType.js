const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkTypeSchema = new Schema({
    name: String,
    achieve: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('workType', WorkTypeSchema);


