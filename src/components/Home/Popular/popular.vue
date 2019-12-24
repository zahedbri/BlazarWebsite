<template>
    
    <section id="Popular">
        <div class="content">
            <div class="header">
                <div class="back-heading">Popular Cities</div>
                <div class="front-heading">Popular Cities around the World<hr></div>
            </div>
            <div class="gallery">
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../assets/background1.jpg" alt="photo">
                    <div class="overlay">
                        <h4>New York</h4>
                    </div>
                </div>
            </div>
        </div>  
    </section>

</template>

<script>
export default {
    
}
</script>

<style scoped>
#Popular{
    width: 100%;
}

.content{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 10rem 5rem 5rem 5rem;
}

.content .header{
    text-align: center;
}

.content .header .back-heading{
    font-size: 12rem;
    font-weight: 600;
    text-transform: capitalize;
    color: rgba(0,0,0,0.05);
}

.content .header .front-heading{
    font-size: 2rem;
    margin-top: -8rem;
    color:var(--primaryColor);
}

.content .header .front-heading hr{
    width: 7rem;
    margin: 1rem auto;
    border-bottom: 1px solid var(--hoverColor);
}

.content .gallery{
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
}

.content .gallery .image{
    position: relative;
    cursor: pointer;
    overflow: hidden;
    height: 260px;
}

.content .gallery .image img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
}

.content .gallery .image .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease;
}

.content .gallery .image .overlay h4{
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
}


/* Adding the Hover Effects */
.content .gallery .image:hover .overlay{
    /* background-color: rgba(35,123,160,0.5); */
    background-color: rgba(0,0,0,0.5);
}
</style>