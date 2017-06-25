<template>
  <div> 
    <v-layout column align-center justify-center>
      <h1 class="blue-grey--text text--darken-3">Stock Trader</h1>
      <h4 class="blue-grey--text text--darken-3">Vue.js example project</h4>
      <h6 class="green--text text--darken-1">Your Funds: {{ funds | currency }}</h6>
      <a href="https://github.com/rctheriot/vue-stock" target="_blank">
        <v-btn round primary light >GitHub Repo</v-btn>
      </a>
    </v-layout>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
  }
</script>