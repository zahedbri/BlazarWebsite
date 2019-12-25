<template>
  
  <div id="Home">
      
    <!-- Hero Section -->
    <home-hero></home-hero>
    
    <!-- Featured Section -->
    <home-featured></home-featured>

    <!-- Popular Section -->
    <home-popular></home-popular>    

    <!-- Works Section -->
    <home-works></home-works>

    <!-- Blogs Section -->
    <home-blogs></home-blogs>
    
    <!-- Footer Section -->
    <home-footer></home-footer>

  </div>


</template>


<script>

import Hero from "./Hero/Homehero.vue";
import Featured from "./Featured/HomeFeatured.vue";
import Popular from "./Popular/HomePopular.vue";
import Works from "./Works/HomeWorks.vue";
import Blogs from "./Blogs/HomeBlogs.vue";
import Footer from "../Shared/footer.vue";

export default {
    components:{
        "home-hero":Hero,
        "home-featured":Featured,
        "home-popular":Popular,
        "home-works":Works,
        "home-blogs":Blogs,
        "home-footer":Footer
    }
  
}
</script>


<style scoped>

#Home{
  width: 100%;
  height: 100%;
}

  
</style>