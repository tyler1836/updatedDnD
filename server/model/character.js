const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const Stat = require('./stats')
const Personality = require('./personality')
const Equipment = require('./equipment')

const characterSchema = new Schema({
    name: String,
    stats: [
        {
            type: Schema.Types.ObjectId,
            ref: "Stat"
        }
    ],
    personalities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Personality"
        }
    ],
    equipments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Equipment"
        }
    ],
    experience: Int,
    race: String,
    alignment: String,
    background: String,
    createdAt: String,
    user: User
})

module.exports = mongoose.model('Character', characterSchema)