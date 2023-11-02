import gql from 'graphql-tag';

export const GET_LATEST_SWAPS = gql`
  query GetLatestSwaps {
    swaps(first: 5, orderBy: timestamp, orderDirection: desc) {
      id
      caller
      tokenIn
      tokenInSym
      tokenOut
      tokenOutSym
      tokenAmountIn
      tokenAmountOut
      tx
      valueUSD
      timestamp
    }
  }
`;