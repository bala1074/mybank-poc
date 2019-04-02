import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

import layout from './layout';
import payeesModule from './modules/payees.js';
import accountsModule from './modules/accounts.js';
import transactionsModule from './modules/transactions.js';

axios.defaults.baseURL = 'http://localhost:3000/mybank/v1';
axios.defaults.headers.common['x-api-key'] = 'd41d8cd98f00b204e9800998ecf8427e';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    layout,
    payees: payeesModule,
    accounts: accountsModule,
    transactions: transactionsModule
  },
  state: {
  },
  actions: {
  },
  mutations: {
  }
});
