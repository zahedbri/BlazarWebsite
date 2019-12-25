<template>
 
    <section id="Hero">

        <home-header></home-header>
        
        <div class="herobox">
            <h2>Welcome to the <span>Ultimate</span> Buisness Directory</h2>
            <p>
                This is the <span>premium Destination</span> for decison makers.<br>
                Find a product,service,or company you're looking for.
            </p>
        </div>

        <home-search-box></home-search-box>
        <home-gradient></home-gradient>
     
    </section>

</template>


<script>

import Header from "../../Shared/header";
import SearchBox from "./HomeHeroSearchBox";
import Gradient from "./HomeHeroGradient";


export default {
    components:{
        "home-header":Header,
        "home-search-box":SearchBox,
        "home-gradient":Gradient    
    }
  
}

</script>


<style scoped>
#Hero{
    width: 100%;
    height: 130vh;
    background: url("../../../assets/background2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 100% 100%;
    position: relative;
    z-index: 10;
}

/* .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.01);
    z-index: 20;

} */

.herobox{
    color: white;
    z-index: 30;
    position: absolute;
    top: 28%;
    left: 8%;
}

.herobox h2 {
    font-size:4.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.herobox span{
    font-weight: 700;
}

.herobox p {
    font-size: 2rem;
}

</style>