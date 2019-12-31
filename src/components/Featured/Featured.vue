<template>
    <section id="Featured">
        <div class="banner">
            <img src="../../assets/featured1.jpg" alt="featured1">
            <div class="overlay">
                <div class="title">
                    <h4><i class="far fa-circle"></i>Hotel</h4>
                    <h2>The Morning Hotel</h2>
                </div>
            </div>
        </div>
        <div class="content">
            <main-area></main-area>
            <side-area></side-area>            
        </div>
    </section>
</template>

<script>
import MainArea from "./FeaturedMainArea";
import SideArea from "./FeaturedSideArea";

export default {
    components:{
        "main-area":MainArea,
        "side-area":SideArea
    }
    
}
</script>

<style scoped>

/* Styling the Banner */
.banner{
    width: 100%;
    height: 383px;
    position: relative;
}

.banner img{
    width: 100%;
    height: 100%;
}

.banner .overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 10;
}

.banner .overlay .title{
    position: absolute;
    top: 50%;
    left: 7%;
}

.banner .overlay .title h4{
    font-size: 1.3rem;
    color:  #00a9e8;
    text-transform: uppercase;
    font-weight: 400;
}

.banner .overlay .title h4 i{
    margin-right: 1rem;
}

.banner .overlay .title h2{
    font-size: 3rem;
    font-weight: 600;
    color: white;
}


/* Styling the Content Area */
.content{
    width: 85%;
    margin: -10rem auto 0 auto;
    display: grid;
    grid-template-columns: 10fr 3fr;
    grid-column-gap: 2rem;
    color: var(--accentColor);
    font-family: var(--secondaryFont);
}








.clearfix::after{
    content: "";
    clear: both;
    display: table;
}








    
</style>