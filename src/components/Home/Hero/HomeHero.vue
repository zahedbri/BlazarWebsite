<template>
 
    <section id="Hero">
        <div class="overlay"></div>
        <div class="content">
          
            <div class="herobox">
                <h2>Welcome to the <span>Ultimate</span> Buisness Directory</h2>
                <p>
                    This is the <span>premium Destination</span> for decison makers.<br>
                    Find a product,service,or company you're looking for.
                </p>
            </div>

            <home-search-box></home-search-box>
        </div>

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
    background-attachment: fixed;
    background-size: 100% 100%;
    position: relative;
}

.overlay {
    z-index: 20;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* background-color:rgba(0,0,0,0.4); */
}

.content{
    width: 85%;
    height: 100%;
    z-index: 30;
    margin: 0 auto;
    position: relative;
}


.herobox{
    color: white;
    position: absolute;
    top: 18%;
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