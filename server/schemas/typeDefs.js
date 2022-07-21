const { gql } = require('apollo-server');
module.exports = gql`
type Character {
  _id: ID!
  name: String!
  stats: [Stat]
  personalities: [Personality]
  equipments: [Equipment]
  experience: Int
  race: String!
  alignment: String!
  background: String!
  createdAt: String!
  user: User
}
type Stat{
    proficiency: Int 
    inspiration: Int 
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    perception: Int
    armor: Int 
    initiative: Int 
    speed: Int
    health: Int 
    level: Int 
    character: Character
}
type Personality{
    traits: String 
    ideals: String 
    bonds: String
    flaws: String 
    proficiencies: String 
    languages: String 
    character: Character
}
type Equipment{
    name: String!
    type: String!
    definition: String!
}
type User {
  _id: ID!
  username: String!
  password: String!
  email: String!
  token: String!
  createdAt: String!
  characters: [Character]
  gamemaster: Gamemaster
}
type Gamemaster{
    _id: ID!
    username: String!
    password: String!
    email: String!
    token: String!
    createdAt: String!
    users: [User]
}
type Auth{
  token: ID!
  user: User!
}
type Query {
  me: User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
}`