<template>
  <section class="container--fluid section">
    <div class="row justify-center">
      <div class="col-12 col-sm-8 col-md-6">
        <v-autocomplete
          v-model="selectedCountry"
          :items="countries"
          :loading="isLoading"
          :search-input.sync="search"
          color="#8c67ef"
          hide-no-data
          hide-selected
          item-text="name"
          item-value="name"
          label="Country"
          placeholder="Start typing to Search"
          prepend-icon="mdi-map-search-outline"
          return-object
          @change="changeCountry"
        ></v-autocomplete>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { countryInitialState } from '../store'

export default {
  name: 'Selector',
  data () {
    return {
      countries: [],
      isLoading: false,
      search: null,
      selectedCountry: null,
      countryDetail: {}
    }
  },
  methods: {
    changeCountry (option) {
      this.$store.commit('updateCurrentCountry', option)
      this.$store.dispatch('fetchCountryDetail')
    }
  },
  watch: {
    search () {
      // Items have already been loaded
      if (this.countries.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true
      // Lazily load input items
      axios.get(process.env.VUE_APP_API_URL + '/countries')
        .then(response => {
          this.countries = response.data.countries
          this.countries.push(countryInitialState)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>

<style lang="scss" scoped>
  .section {
    padding-top: 0;
    padding-bottom: 0;
  }
</style>
