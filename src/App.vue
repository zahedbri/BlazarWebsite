<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>


<script>
import Home from "./components/Home/Home.vue";

export default {
  components:{
    "app-home":Home
  }
}
</script>


<style>

#app{
  height:100%;
  width: 100%;
}
  
</style>