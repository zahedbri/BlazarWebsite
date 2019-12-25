<template>
  
  <div id="Home">
      
    <!-- Hero Section -->
    <home-hero></home-hero>
    
    <!-- Featured Section -->
    <home-featured></home-featured>

    <!-- Popular Section -->
    <home-popular></home-popular>    

    <!-- Reviews Section -->
    <home-reviews></home-reviews>

    <!-- Works Section -->
    <home-works></home-works>

    <!-- Qualities Section -->
    <home-qualities></home-qualities>

    <!-- Blogs Section -->
    <home-blogs></home-blogs>

  </div>


</template>


<script>

import Hero from "./Hero/Homehero.vue";
import Featured from "./Featured/HomeFeatured.vue";
import Popular from "./Popular/HomePopular.vue";
import Reviews from "./Reviews/HomeReviews.vue";
import Works from "./Works/HomeWorks.vue";
import Qualities from "./Qualities/HomeQualities.vue";
import Blogs from "./Blogs/HomeBlogs.vue";

export default {
    components:{
        "home-hero":Hero,
        "home-featured":Featured,
        "home-popular":Popular,
        "home-reviews":Reviews,
        "home-works":Works,
        "home-qualities":Qualities,
        "home-blogs":Blogs,
        // "home-footer":Footer
    }
  
}
</script>


<style scoped>
/* 
#Home{
  width: 100%;
  height: 100%;
} */

  
</style>