<template>
  <v-app>
    <hero></hero>
    <selector></selector>
    <board></board>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Hero from './components/Hero'
import Selector from './components/Selector'
import Board from './components/Board'

export default {
  name: 'App',

  components: {
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
  .v-application {
    .v-card{
      .yellow {
        background-color: #FBBD0E !important;
      }
      .yellow--text {
        color: #FBBD0E !important;
      }
    }
  }
  .section {
    padding: 1rem 1.5rem;
  }
</style>
