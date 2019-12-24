<template>
  
  <div id="Home">
      
    <!-- Hero Section -->
    <home-hero></home-hero>
    
    <!-- Featured Section -->
    <home-featured></home-featured>

  </div>


</template>


<script>

import Hero from "./Hero/hero.vue";
import Featured from "./Featured/featured.vue"

export default {
    components:{
        "home-hero":Hero,
        "home-featured":Featured
    }
  
}
</script>


<style scoped>

#Home{
    width: 100%;
    height: 100%;
}
  
</style>