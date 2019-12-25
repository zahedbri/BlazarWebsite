<template>
  <div id="app">
    <app-home></app-home>
    <!-- <app-pricing></app-pricing> -->
    <!-- <app-about></app-about> -->
    <!-- <app-faq></app-faq> -->

  </div>
</template>


<script>
import Home from "./components/Home/Home.vue";
import Pricing from "./components/Pricing/Pricing.vue";
import About from "./components/About Us/About.vue";
import Faq from "./components/FAQ/Faq.vue";

export default {
  components:{
    "app-home":Home,
    "app-pricing":Pricing,
    "app-about":About,
    "app-faq":Faq
  }
}
</script>


<style>

#app{
  width: 100%;
  height:100%;
}

  
</style>