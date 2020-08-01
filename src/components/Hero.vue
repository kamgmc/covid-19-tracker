<template>
  <v-card
    class="container--fluid hero pa-0"
    :loading="loadingStatus"
    loader-height="8px"
    tile
    outlined
    color="#F1F3F4"
  >
    <v-row class="section align-center justify-center">
      <v-col class="text-center">
        <h1 class="title">
          <img src="@/assets/virus.svg" alt="Mask" class="image mask-icon">
          COVID-19
        </h1>
        <h2 class="subtitle">
          Coronavirus cases tracker
        </h2>
        <h4 v-if="lastUpdated" class="success--text">Last update: {{new Date(lastUpdated).toLocaleString().toLowerCase()}}</h4>
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
      'loadingStatus',
      'lastUpdated'
    ])
  }
}
</script>

<style lang="scss">
  @keyframes move {
    20%{
      transform: rotate(72deg) scale(1.1);
    }
    40%{
      transform: rotate(144deg) scale(.9);
    }
    60%{
      transform: rotate(216deg) scale(1.15);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
  .hero {
    background-color: #F1F3F4;
    border-color: transparent !important;
    .section {
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 2rem !important;
        font-weight: 600;
        line-height: 1;

        .mask-icon {
          display: block;
          height: 3.5rem;
          width: auto;
          animation: move 16s linear infinite;
          margin-bottom: 12px;
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
