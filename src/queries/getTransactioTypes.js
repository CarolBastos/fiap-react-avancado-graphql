import { gql } from "@apollo/client";

export const GET_TRANSACTION_TYPES = gql`
query GetTransactionTypes {
  getTransactionTypes {
    value
    display
  }
}
`