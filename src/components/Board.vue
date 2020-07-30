<template>
<v-container>
  <v-row>
    <v-col class="col-12 col-sm">
      <v-card
        class="mx-auto"
        raised
      >
        <v-card-subtitle class="pb-0 font-weight-bold black--text">Infected</v-card-subtitle>
        <v-card-title class="pt-0 yellow--text card-number" v-if="infected">{{new Intl.NumberFormat().format(infected)}}</v-card-title>
        <v-card-text>Number of active COVID-19 cases.</v-card-text>
        <v-card-actions class="bar yellow"></v-card-actions>
      </v-card>
    </v-col>
    <v-col class="col-12 col-sm">
      <v-card
        class="mx-auto"
        raised
      >
        <v-card-subtitle class="pb-0 font-weight-bold black--text">Recovered</v-card-subtitle>
        <v-card-title class="pt-0 success--text card-number" v-if="recovered">{{new Intl.NumberFormat().format(recovered)}}</v-card-title>
        <v-card-text>Number of recoveries from COVID-19.</v-card-text>
        <v-card-actions class="bar success"></v-card-actions>
      </v-card>
    </v-col>
    <v-col class="col-12 col-sm">
      <v-card
        class="mx-auto"
        raised
      >
        <v-card-subtitle class="pb-0 font-weight-bold black--text">Deaths</v-card-subtitle>
        <v-card-title class="pt-0 error--text card-number" v-if="deaths">{{new Intl.NumberFormat().format(deaths)}}</v-card-title>
        <v-card-text>Number of deaths caused by COVID-19.</v-card-text>
        <v-card-actions class="bar error"></v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Board',
  computed: {
    ...mapGetters([
      'country',
      'infected',
      'recovered',
      'deaths'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .card-number{
    font-size: 2rem;
  }

  .bar {
    padding: 4px;
  }
</style>
