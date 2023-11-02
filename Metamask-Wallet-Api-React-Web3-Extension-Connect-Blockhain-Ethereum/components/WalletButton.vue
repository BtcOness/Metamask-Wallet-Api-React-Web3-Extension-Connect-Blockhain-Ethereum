<template>
    <div>
        <button @click="connectWallet" v-if="!connected">Connect Wallet</button>
        <p v-else>Connected Wallet Account Address: {{ account }}</p>
    </div>
  </template>
  
<script>
import Web3 from 'web3';
import Web3Modal from 'web3modal';
  
export default {
    data() {
        return {
            connected: false,
            account: null,
            web3: null,
        };
    },
    methods: {
        async connectWallet() {
            const web3Modal = new Web3Modal();
            const provider = await web3Modal.connect();
            this.web3 = new Web3(provider);

            const accounts = await this.web3.eth.getAccounts();
            this.account = accounts[0];
            
            this.connected = true;
        },
    },
};
</script>
  