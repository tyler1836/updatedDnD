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
  mutation addUser($username: String!, $email: String!, $password: String!, $isGm: Boolean!) {
    addUser(username: $username, email: $email, password: $password, isGm: $isGm)  {
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

export const UPDATE_CLASS = gql`
mutation($characterId: ID!, $class: String!) {
  updateClass(characterId: $characterId, class: $class) {
    name
    class
  }
}
`

export const ADD_STATS = gql`
mutation($characterId: ID!, $strength: Int, $dexterity: Int, $constitution: Int, $intelligence: Int, $wisdom: Int, $charisma: Int, $perception: Int, $health: Int, $level: Int, $speed: Int, $experience: Int, $tempExp: Int ) {
  addStats(characterId: $characterId, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma, perception: $perception, health: $health, level: $level, speed: $speed, experience: $experience, tempExp: $tempExp) {
    strength
  }
}
`

export const LEVEL_UP = gql`
mutation($characterId: ID!, $statId: ID!, $strength: Int, $dexterity: Int, $intelligence: Int, $wisdom: Int, $constitution: Int, $perception: Int, $charisma: Int, $health: Int, $level: Int, $experience: Int, $speed: Int, $tempExp: Int) {
  levelUp(characterId: $characterId, statId: $statId, strength: $strength, dexterity: $dexterity, intelligence: $intelligence, wisdom: $wisdom, constitution: $constitution, perception: $perception, charisma: $charisma, health: $health, level: $level, experience: $experience, tempExp: $tempExp, speed: $speed) {
    _id
  }
}
`

export const ADD_EQUIPMENT = gql`
mutation($characterId: ID!, $name: String!, $type: String!, $definition: String!) {
  addEquipment(characterId: $characterId, name: $name, type: $type, definition: $definition) {
    _id
    name
  }
}
`

export const DELETE_EQUIPMENT = gql`
mutation($characterId: ID!, $equipmentId: ID!) {
  deleteEquipment(characterId: $characterId, equipmentId: $equipmentId) {
    _id
  }
}
`