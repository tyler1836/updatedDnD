const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Character = require('./character')

const personalitySchema = new Schema({
    traits: String,
    ideals: String,
    bonds: String,
    flaws: String, 
    proficiencies: String, 
    languages: String, 
    character: Character
})

module.exports = mongoose.model('Personality', personalitySchema)