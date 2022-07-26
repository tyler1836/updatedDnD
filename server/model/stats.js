const {Schema, model} = require('mongoose')
const Character = require('./character.js')

const statSchema = new Schema({
    proficiency: Number,
    inspiration: Number,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
    perception: Number,
    armor: Number, 
    initiative: Number, 
    speed: Number,
    health: Number, 
    level: Number,
})

const Stats = model('Stat', statSchema)
module.exports = Stats