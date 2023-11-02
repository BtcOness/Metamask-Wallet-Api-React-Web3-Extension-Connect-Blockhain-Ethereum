<template>
    <div>
        <h2>Latest Transactions</h2>
        <ul>
          <li v-for="swap in swaps" :key="swap.id">
              <p>ID: {{ swap.id }}</p>
              <p>Caller: {{ swap.caller }}</p>
              <p>Token In SYM: {{ swap.tokenInSym }}</p>
              <p>Value USD: {{ swap.valueUSD }}</p>
              <p>Date: {{ new Date(swap.timestamp * 1000).toLocaleString() }}</p>
          </li>
        </ul>
    </div>
</template>
  
<script>
import { GET_LATEST_SWAPS } from '../graphql/queries';
  
export default {
    data() {
        return {
          transactions: [],
        };
    },
    apollo: {
        swaps: {
            query: GET_LATEST_SWAPS,
        },
    },
};
</script>