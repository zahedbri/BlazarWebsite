<template>
    <section id="Works">
        <div class="content">
            <div class="header">
                <div class="back-heading">It's easy</div>
                <div class="front-heading">How it Works<hr></div>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="back-title">1</div>
                    <div class="front-title">Choose a Location</div>
                    <div class="card-text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus illo expedita, vero est saepe.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="back-title">2</div>
                    <div class="front-title">Choose a Location</div>
                    <div class="card-text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus illo expedita, vero est saepe.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="back-title">3</div>
                    <div class="front-title">Choose a Location</div>
                    <div class="card-text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus illo expedita, vero est saepe.</p> 
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
#Works{
    width: 100%;
}


.content{
    width: 85%;
    height: 100%;
    margin: 0 auto;
    padding: 10rem 0 5rem 0;
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

.content .cards{
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
}

.content .cards .card{
    width: 100%;
    text-align: center;
    /* border: 2px solid black; */
    background-color: white;
    padding: 1rem 3rem 3rem 3rem;
}

.content .cards .card .back-title{
    font-size: 13rem;
    font-weight: 700;
    color: rgba(0,0,0,0.05);
    font-family: var(--secondaryFont);
}

.content .cards .card .front-title{
    font-size: 1.5rem;
    margin-top: -10rem;
}

.content .cards .card .card-text{
    margin-top: 5rem;
    font-size: 1.2rem;
}



</style>