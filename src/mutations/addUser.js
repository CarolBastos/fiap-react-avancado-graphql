import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation AddUser($user: CreateUserDto!) {
  register(input: $user) {
    _id
    email
    name
  }
}
`