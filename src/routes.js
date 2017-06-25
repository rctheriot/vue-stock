import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
  { 
    path: '/vue', 
    component: Home, 
    name: 'home' 
  },
  { 
    path: '/vue/portfolio', 
    component: Portfolio, 
    name: 'portfolio' 
  },
  { 
    path: '/vue/stocks', 
    component: Stocks, 
    name: 'stocks' 
  },
];