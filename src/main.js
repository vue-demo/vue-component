import Vue from 'vue';
import Clock from './clock/';
Vue.use(Clock);

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
})
