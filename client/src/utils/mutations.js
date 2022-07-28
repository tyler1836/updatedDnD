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