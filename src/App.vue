<template>
  <div id="app">
    <clock></clock>
    <clock></clock>
  </div>
</template>

<script>
// import Clock from './clock/Clock.vue';
export default {
  name: 'app',
  // components:{ Clock },
  data () {
    return {
      msg: '说白了.vue跟正常的组件一样，之所以能Vue.use取决于index.js的install()'
    }
  }
}
</script>
