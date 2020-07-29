<template>
<v-container>
  <v-row>
    <v-col class="col-12 col-sm-4">
      <v-card
        class="mx-auto"
        raised
      >
        <v-card-subtitle class="pb-0">Infected</v-card-subtitle>
        <v-card-title class="pt-0" v-if="infected">{{new Intl.NumberFormat().format(infected)}}</v-card-title>
        <v-card-subtitle v-if="lastUpdated">{{new Date(lastUpdated).toDateString()}}</v-card-subtitle>
        <v-card-text>Number of infected caused by COVID-19.</v-card-text>
        <v-card-actions class="bar info"></v-card-actions>
      </v-card>
    </v-col>
    <v-col class="col-12 col-sm-4">
      <v-card
        class="mx-auto"
        raised
      >
        <v-card-subtitle class="pb-0">Recovered</v-card-subtitle>
        <v-card-title class="pt-0" v-if="recovered">{{new Intl.NumberFormat().format(recovered)}}</v-card-title>
        <v-card-subtitle v-if="lastUpdated">{{new Date(lastUpdated).toDateString()}}</v-card-subtitle>
        <v-card-text>Number of recovered caused by COVID-19.</v-card-text>
        <v-card-actions class="bar success"></v-card-actions>
      </v-card>
    </v-col>
    <v-col class="col-12 col-sm-4">
      <v-card
        class="mx-auto"
        raised
      >
        <v-card-subtitle class="pb-0">Deaths</v-card-subtitle>
        <v-card-title class="pt-0" v-if="deaths">{{new Intl.NumberFormat().format(deaths)}}</v-card-title>
        <v-card-subtitle v-if="lastUpdated">{{new Date(lastUpdated).toDateString()}}</v-card-subtitle>
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
      'deaths',
      'lastUpdated'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .bar {
    padding: 4px;
  }
</style>
