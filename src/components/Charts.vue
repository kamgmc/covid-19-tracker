<template>
    <div class="container">
      <v-row v-if="country.iso2 === null">
        <v-col class="col-lg-10">
          <line-chart
            v-if="dailyStats"
            :labels="dailyStats.map((stat) => stat.reportDate)"
            :datasets="[{
            data: this.dailyStats.map((stat) => stat.confirmed.total),
            label: 'Infected',
            borderColor: '#F2A029',
            backgroundColor: 'rgba(242, 160, 41, 0.5)',
            fill: false,
            pointRadius: 2,
            pointHoverRadius: 6
          }, {
            data: this.dailyStats.map((stat) => stat.deaths.total),
            label: 'Deaths',
            borderColor: '#FF5364',
            backgroundColor: 'rgba(255, 83, 100, 0.5)',
            fill: false,
            pointRadius: 2,
            pointHoverRadius: 6
          }]"
            :options="{
          title: {
            display: true,
            text: 'Global stats'
          }
        }"
          ></line-chart>
        </v-col>
        <v-col class="summary">
          <v-col
            v-if="newInfected || newDeaths"
            class="summary-title text-center col-12">
            Today summary
          </v-col>
          <v-col
            v-if="newInfected > 0"
            class="summary-data yellow--text justify-center mb-lg-4 col-4 col-lg-12 d-inline-block d-lg-block offset-2 offset-lg-0">
            <span class="number">{{new Intl.NumberFormat().format(newInfected)}}</span>
            New cases
          </v-col>
          <v-col
            v-if="newDeaths > 0"
            class="summary-data error--text justify-center col-4 col-lg-12 d-inline-block d-lg-block">
            <span class="number">{{new Intl.NumberFormat().format(newDeaths)}}</span>
            Deaths
          </v-col>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col class="col-8 offset-2">
          <bar-chart
            :width="null"
            :height="null"
            :chartData="{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              data: [infected, recovered, deaths],
              borderColor: ['#F2A029', '#149F84', '#FF5364'],
              backgroundColor: ['#F2A029', '#149F84', '#FF5364']
            }]
          }"
            :options="{
          legend: {
            display: false
          },
          responsive: true
        }"></bar-chart>
        </v-col>
      </v-row>
    </div>
</template>
<script>
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import { mapGetters } from 'vuex'

export default {
  name: 'Charts',
  data: () => ({
  }),
  components: {
    BarChart,
    LineChart
  },
  computed: {
    ...mapGetters([
      'country',
      'dailyStats',
      'newInfected',
      'newRecoveries',
      'newDeaths',
      'infected',
      'recovered',
      'deaths'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .summary {
    .summary-title {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0;
      margin-bottom: 18px;
    }
    .summary-data {
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      line-height: 1;
      .number{
        font-size: 2rem;
        display: block;
      }
    }
  }
</style>
