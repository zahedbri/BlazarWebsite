<template>
  <div id="app">
    <!-- <app-home></app-home> -->
    <app-pricing></app-pricing>
  </div>
</template>


<script>
import Home from "./components/Home/Home.vue";
import Pricing from "./components/Pricing/Pricing.vue";

export default {
  components:{
    "app-home":Home,
    "app-pricing":Pricing
  }
}
</script>


<style>

#app{
  width: 100%;
  height:100%;
}

  
</style>