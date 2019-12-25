<template>
  <div id="app">
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>
</template>


<script>
import Home from "./components/Home/Home.vue";
import Pricing from "./components/Pricing/Pricing.vue";
import About from "./components/About Us/About.vue";
import Faq from "./components/FAQ/Faq.vue";

import Header from "./components/Shared/header.vue";
import Footer from "./components/Shared/footer.vue";

export default {
  components:{
    "app-home":Home,
    "app-pricing":Pricing,
    "app-about":About,
    "app-faq":Faq,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>


<style>

#app{
  /* width: 100%;
  height:100%; */
  position: relative;
}

  
</style>