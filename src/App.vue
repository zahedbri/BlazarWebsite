<template>
  <div id="app">
    <app-header></app-header>
    
    <transition>
      <router-view></router-view>
    </transition>
    
    <app-footer></app-footer>
  </div>
</template>


<script>

import Header from "./components/Shared/header.vue";
import Footer from "./components/Shared/footer.vue";

export default {
  components:{
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>


<style>

#app{
  width: 100%;
  height: 100%;
  position: relative;
}

/* Adding the transition animation */



  
</style>