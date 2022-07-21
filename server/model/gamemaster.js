const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.js')

const gmSchema = new Schema({
    username: String,
    password: String,
    email: String,
    token: String,
    createdAt: String,
    users: [User]
})

module.exports = mongoose.model('GameMaster', gmSchema)