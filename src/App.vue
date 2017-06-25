<template>
  <v-app>
    <app-header></app-header>
    <main>
      <v-container fluid>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      'app-header': Header,
    },
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  .slide-enter-active {
    animation: slide-in 400ms ease-out forwards;
  }

  .slide-leave-active{
    animation: slide-out 400ms ease-out forwards;
  }

  $keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform translateY(0);
      opacity: 1;
    }
    to {
      transform translateY(-30px);
      opacity: 0;
    }
  }
</style>
