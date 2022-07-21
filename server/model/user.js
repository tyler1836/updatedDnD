const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Character = require('./character.js')
const Gamemaster = require('./gamemaster.js')

const userSchema = new Schema({

    username: String,
    password: String,
    email: String,
    token: String,
    createdAt: String,
    characters: [Character],
    gamemaster: Gamemaster
})

module.exports = mongoose.model('User', userSchema)