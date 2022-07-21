const mongoose = require('mongoose')
const Schema = mongoose.Schema

const equipSchema = new Schema({
    name: String,
    type: String,
    definition: String
})

module.exports = mongoose.model('Equipment', equipSchema)