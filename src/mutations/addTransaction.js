import { gql } from "@apollo/client";

export const ADD_TRANSACTION = gql`
mutation AddTransaction ($transaction: CreateTransactionDto!) {
  addTransaction(input: $transaction) {
    _id
    createdAt
    type
    value
  }
}
`