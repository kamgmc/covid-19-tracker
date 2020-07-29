import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const countryInitialState = { name: 'Global', iso2: null, iso3: null }

export default new Vuex.Store({
  state: {
    currentCountry: countryInitialState,
    countryDetails: null,
    isLoading: true
  },
  mutations: {
    updateCurrentCountry: (state, payload) => {
      state.currentCountry = payload
    },
    updateCountryDetail: (state, payload) => {
      state.countryDetails = payload
    },
    loading: state => (state.isLoading = true),
    loaded: state => (state.isLoading = false)
  },
  getters: {
    country: state => state.currentCountry,
    infected: state => state.countryDetails?.confirmed.value,
    recovered: state => state.countryDetails?.recovered.value,
    deaths: state => state.countryDetails?.deaths.value,
    lastUpdated: state => state.countryDetails?.lastUpdate,
    loadingStatus: state => state.isLoading
  },
  actions: {
    fetchCountryDetail: ({ state, commit }) => {
      commit('loading')
      const url = state.currentCountry.iso2 === null
        ? process.env.VUE_APP_API_URL
        : process.env.VUE_APP_API_URL + '/countries/' + state.currentCountry.name
      axios.get(url)
        .then(response => {
          commit('updateCountryDetail', response.data)
        })
        .finally(() => commit('loaded'))
    }
  }
})
