import {gql} from '@apollo/client'

export const QUERY_ME = gql`
{
  me {
    username
    email
    isGm
    characters {
      _id
      name
      stats {
        level
      }
      background
      race
      alignment
      class
    }
  }
}
`
export const QUERY_CHARACTER = gql`
query character($id: ID!) {
  character(_id: $id) {
    name
    stats {
      _id
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      perception
      health
      speed
      level
      experience
      tempExp
    }
    alignment
    background
    class
    race
  }
}
`

export const QUERY_USERS = gql`
{
  users {
    username
    isGm
    gamemasters {
      username
    }
  }
}
`