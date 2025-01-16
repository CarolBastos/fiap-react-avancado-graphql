import { gql } from '@apollo/client';

export const GET_TOKEN = gql`
mutation GetToken($credentials: LoginUserDto!) {
  login(input: $credentials){
    accessToken
  }
}
`