import { gql } from '@apollo/client';

export const GET_TRANSACTIONS_TYPES = gql`
query GetTransactionsTypes {
  getTransactionTypes{
    display
    value
  }
}
`