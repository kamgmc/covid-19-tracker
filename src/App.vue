<template>
  <v-app>
    <hero></hero>
    <selector></selector>
    <board></board>
    <charts></charts>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      dark
      class="text-center justify-center">
      &copy; Developed by &nbsp;
      <a
        href="https://github.com/kamgmc"
        class="ml-1 mr-1 white--text font-weight-bold">
        Kevin Martinez
      </a>
      <strong>-</strong>
      <a
        href="https://github.com/kamgmc/covid-19-tracker"
        class="ml-1 white--text font-weight-bold">
        Github Project
      </a>
    </v-footer>
  </v-app>
</template>

<script>
import Hero from './components/Hero'
import Selector from './components/Selector'
import Board from './components/Board'
import Charts from './components/Charts'

export default {
  name: 'App',

  components: {
    Charts,
    Selector,
    Hero,
    Board
  },

  data: () => ({
    //
  })
}
</script>
<style lang="scss">
  html, body {
    background-color: #F1F3F4;
  }
  .v-application--wrap{
    background-color: #F1F3F4;
    .v-card, .container{
      .yellow {
        background-color: #f2a029 !important;
      }
      .yellow--text {
        color: #f2a029 !important;
      }
      .success {
        background-color: #149F84 !important;
      }
      .success--text {
        color: #149F84 !important;
      }
      .error {
        background-color: #FF5364 !important;
      }
      .error--text {
        color: #FF5364 !important;
      }
    }
  }
  .section {
    padding: 1rem 1.5rem;
  }
</style>
