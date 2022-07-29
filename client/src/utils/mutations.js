import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const CREATE_CHARACTER = gql`
  mutation createChar($name: String!, $race: String!, $alignment: String!, $background: String!, $class: String!) {
    addCharacter(name: $name, race: $race, alignment: $alignment, background: $background, class: $class) {
    name
  }
}
`

export const DELETE_CHARACTER = gql`
  mutation deleteCharacter($characterId: ID!) {
    deleteCharacter(characterId: $characterId) {
    name
  }
}
`

export const ADD_STATS = gql`
mutation($characterId: ID!, $strength: Int, $dexterity: Int, $constitution: Int, $intelligence: Int, $wisdom: Int, $charisma: Int, $perception: Int, $health: Int, $level: Int, $speed: Int, $initiative: Int, $armor: Int) {
  addStats(characterId: $characterId, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma, perception: $perception, health: $health, level: $level, speed: $speed, initiative: $initiative, armor: $armor) {
    strength
  }
}
`

export const LEVEL_UP = gql`
mutation($characterId: ID!, $statId: ID!, $strength: Int, $dexterity: Int, $intelligence: Int, $wisdom: Int, $constitution: Int, $perception: Int, $charisma: Int, $health: Int, $level: Int, $experience: Int, $speed: Int) {
  levelUp(characterId: $characterId, statId: $statId, strength: $strength, dexterity: $dexterity, intelligence: $intelligence, wisdom: $wisdom, constitution: $constitution, perception: $perception, charisma: $charisma, health: $health, level: $level, experience: $experience, speed: $speed) {
    _id
  }
}
`