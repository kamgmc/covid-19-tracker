import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const countryInitialState = { name: 'Global', iso2: null, iso3: null }

export default new Vuex.Store({
  state: {
    currentCountry: countryInitialState,
    countryDetails: null,
    dailyStats: null,
    isLoading: true
  },
  mutations: {
    updateCurrentCountry: (state, payload) => {
      state.currentCountry = payload
    },
    updateCountryDetail: (state, payload) => {
      state.countryDetails = payload
    },
    updateDailyStats: (state, payload) => {
      state.dailyStats = payload
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
    loadingStatus: state => state.isLoading,
    dailyStats: state => state.dailyStats,
    newInfected: state => {
      if (!state.dailyStats) return
      const lastIndex = state.dailyStats.length - 1

      return state.dailyStats[lastIndex].confirmed.total - state.dailyStats[lastIndex - 1].confirmed.total
    },
    newDeaths: state => {
      if (!state.dailyStats) return
      const lastIndex = state.dailyStats.length - 1

      return state.dailyStats[lastIndex].deaths.total - state.dailyStats[lastIndex - 1].deaths.total
    }
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
    },
    fetchDailyStats: ({ commit }) => {
      commit('loading')
      axios.get(process.env.VUE_APP_API_URL + '/daily')
        .then(response => {
          commit('updateDailyStats', response.data)
        })
        .finally(() => commit('loaded'))
    }
  }
})
