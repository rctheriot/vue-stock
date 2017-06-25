<template>
  <v-toolbar class="blue-grey darken-3">
    <v-toolbar-title class="hidden-sm-and-down"><router-link :to="{ name: 'home' }" exact>Stock Trader</router-link></v-toolbar-title>
    
    <v-flex xs4>
      <v-subheader class="green--text text--lighten-1">Funds: {{ funds | currency }}</v-subheader>
    </v-flex>
  
    <v-toolbar-items>
      <v-toolbar-item>
        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      </v-toolbar-item>

      <v-toolbar-item>
        <router-link :to="{ name: 'stocks' }">Stocks</router-link>
      </v-toolbar-item>

      <v-toolbar-item class="">
        <a @click="endDay">End Day</a>
      </v-toolbar-item>
    </v-toolbar-items>

    <v-menu offset-y left>
        <v-btn icon light slot="activator">
          <v-icon>menu</v-icon>
        </v-btn>
        <v-list>
          <v-list-item @click="saveData">
            <v-list-tile>
              <v-list-tile-title>Save</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item @click="loadData">
            <v-list-tile>
              <v-list-tile-title>Load</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>

  </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData',
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    },
    created: function() {
      this.loadData();
    },
  }

</script>

<style scoped>
  .toolbar * {
    color: white;
    text-decoration: none;
  }
</style>