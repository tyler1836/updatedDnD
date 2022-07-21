const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Character = require('./character.js')

const statSchema = new Schema({
    proficiency: Int,
    inspiration: Int,
    strength: Int,
    dexterity: Int,
    constitution: Int,
    intelligence: Int,
    wisdom: Int,
    charisma: Int,
    perception: Int,
    armor: Int, 
    initiative: Int, 
    speed: Int,
    health: Int, 
    level: Int,
    character: Character
})

module.exports = mongoose.model('Stat', statSchema)