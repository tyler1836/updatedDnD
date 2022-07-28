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