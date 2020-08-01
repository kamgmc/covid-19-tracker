<template>
  <canvas id="line"></canvas>
</template>
<script>
import Chart from 'chart.js'

export default {
  name: 'LineChart',
  props: {
    labels: Array,
    datasets: Array,
    options: {}
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const lineChart = new Chart('line', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    })
  }
}
</script>
