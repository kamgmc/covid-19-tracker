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
  .section {
    padding: 1rem 1.5rem;
  }
</style>
