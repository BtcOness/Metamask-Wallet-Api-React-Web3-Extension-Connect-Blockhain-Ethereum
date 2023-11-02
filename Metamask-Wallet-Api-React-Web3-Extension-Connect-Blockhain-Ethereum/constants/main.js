import Vue from 'vue';
import App from './App.vue';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';
import { GRAPHQL_ENDPOINT } from './constants/index';

Vue.config.productionTip = false;

const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
    render: (h) => h(App),
    apolloProvider,
}).$mount('#app');
