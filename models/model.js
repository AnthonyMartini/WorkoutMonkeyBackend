const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Name: {
        required: true,
        type: String
    },
    Notes: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('Exercise', dataSchema)