import { gql } from "@apollo/client";

export const GET_ACCOUNT = gql`
query GetAccount {
  account {
    balance
    transactions {
      _id
      createdAt
      type
     	value
    }
  }
}
`