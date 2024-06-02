import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    stocks: []
  },
  mutations: {
    SET_STOCKS(state, stocks) {
      state.stocks = stocks;
    }
  },
  actions: {
    async fetchStocks({ commit }) {
      try {
        const response = await axios.get('https://example-data.draftbit.com/stocks?');
        commit('SET_STOCKS', response.data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    }
  },
  getters: {
    getStocks: state => state.stocks
  }
})

