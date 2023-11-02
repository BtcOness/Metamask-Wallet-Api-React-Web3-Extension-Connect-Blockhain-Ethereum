<template>
    <div id="app">
        <h1>Transactions Viewer Test Task</h1>
        <wallet-button></wallet-button>
        <hr />
        <swap-list></swap-list>
    </div>
</template>

<script>
import WalletButton from './components/WalletButton.vue';
import SwapList from './components/SwapList.vue';

export default {
    name: 'App',
    components: {
        WalletButton,
        SwapList,
    },
};
</script>
