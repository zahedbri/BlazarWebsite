<template>
  <div id="app">
    <!-- <app-home></app-home> -->
    <!-- <app-pricing></app-pricing> -->
    <app-about></app-about>


  </div>
</template>


<script>
import Home from "./components/Home/Home.vue";
import Pricing from "./components/Pricing/Pricing.vue";
import About from "./components/About Us/About.vue";

export default {
  components:{
    "app-home":Home,
    "app-pricing":Pricing,
    "app-about":About
  }
}
</script>


<style>

#app{
  width: 100%;
  height:100%;
}

  
</style>