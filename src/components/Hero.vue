<template>
  <v-card
    class="container--fluid hero pa-0"
    :loading="loadingStatus"
    loader-height="8px"
    tile
    outlined
  >
    <v-row class="section align-center">
      <v-col class="col-12 col-md-6">
        <h1 class="title">
          <img src="@/assets/mask.svg" alt="Mask" class="image mask-icon">
          Covid - 19
        </h1>
        <h2 class="subtitle">
          Coronavirus cases tracker
        </h2>
      </v-col>
      <v-col class="col-12 col-md-6 text-md-right">
        <h4>{{new Date().toLocaleString().toLowerCase()}}</h4>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'hero',
  computed: {
    ...mapGetters([
      'loadingStatus'
    ])
  }
}
</script>

<style lang="scss">
  .hero {
    border-color: transparent !important;
    .section {
      .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 2rem !important;
        font-weight: 600;
        line-height: 1.125;

        .mask-icon {
          display: inline-block;
          height: 6rem;
          width: auto;
          margin-right: 12px;
          filter: invert(.5);
        }
      }

      .subtitle {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.25;
      }
    }
  }
</style>
