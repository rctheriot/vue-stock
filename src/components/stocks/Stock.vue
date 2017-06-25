<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <v-card height="125px" class="grey lighten-2">
        <v-card-row class="green darken-3" height="50px">
          <v-card-title>
            <span class="white--text">{{ stock.name }}</span>

          </v-card-title>
        </v-card-row>
        <v-card-text>
          <v-card-row height="40px">
            <v-icon class="mr-5" dark>show_chart</v-icon>
            <div>
              <div>Stock Price</div><strong>{{ stock.price }}</strong>
            </div>
            <v-spacer></v-spacer>
            <v-text-field class="pt-4"
              type="number"
              placeholder="Quantity"
              v-model="quantity"
            ></v-text-field>
            <v-btn   
              class="green darken-1 white--text"
              @click.native="buyStock"
              :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
            >{{ insufficientFunds ? 'Low Funds' : 'Buy' }}</v-btn>
          </v-card-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      },
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>
