<template>
    <section id="Blog">
        <div class="banner">
            <div class="overlay">
                <div class="title">
                    <h4><i class="far fa-circle"></i>Adventurer Explorer</h4>
                    <h2>The best clubs in Las Vegas</h2>
                </div>
            </div>
        </div>
        <blog-content></blog-content>
    </section>
</template>

<script>
import Content from "./BlogContent";

export default {
    components:{
        "blog-content":Content
    }    
}
</script>

<style scoped>
.banner {
    width: 100%;
    height: 120vh;
    background:url(../../assets/b1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    /* background-attachment: fixed;     */
    background-size: cover;
    position: relative;
}

.banner .overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.02);
    z-index: 10;
}

.banner .overlay .title{
    position: absolute;
    top: 48%;
    left: 7%;
}

.banner .overlay .title h4{
    font-size: 1.3rem;
    color:  #ffe066;
    text-transform: uppercase;
    font-weight: 500;
}

.banner .overlay .title h4 i{
    margin-right: 1rem;
}

.banner .overlay .title h2{
    font-size: 3rem;
    font-weight: 600;
    color: white;
}

    
</style>