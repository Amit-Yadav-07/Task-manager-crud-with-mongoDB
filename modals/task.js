const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: [30, 'name can not be more then 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('task', taskSchema);