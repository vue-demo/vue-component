<template>
  <div class="clock">
    <span>{{h}}</span>:
    <span>{{m}}</span>:
    <span>{{s}}</span>
  </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      h: 0,
      m: 0,
      s: 0
    }
  },
  mounted(){
    this.clock();
    setInterval(()=>{
      this.clock();
    },1000);
  },
  methods:{
    clock(){
      var oDate = new Date();
      this.h = oDate.getHours();
      this.m = oDate.getMinutes();
      this.s = oDate.getSeconds();
    }
  }
}
</script>

<style scoped>
.clock{
  width: 100px;
  margin:20px auto;
  font-size: 20px;
}
</style>
