<template>
    <section id="Qualities">
        <div class="content">
            <div class="area1">
                <div class="header">
                    <h3>This is the best solution for your needs</h3>
                    <p>Packed full of features so that you can appreciate the numerous benefits that our theme provides</p>    
                </div>
                <div class="banner">
                    <img src="../../../assets/quality.png" alt="banner">
                </div>
            </div>    

            <div class="area2">
                <div class="quality">
                    <h4><i class="fas fa-globe-asia"></i> Available All the time</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
                <div class="quality">
                    <h4><i class="fas fa-headset"></i> Available All the time</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
                <div class="quality">
                    <h4><i class="fas fa-globe-asia"></i> Available All the time</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
                <button class="learn">Learn More</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#Qualities{
    background-color: #4e94b1;
}  

.content{
    width: 85%;
    margin: 0 auto;
    padding: 8rem 0 5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
    color: white;
}

/* Styling the Area1 */
.content .area1 .header h3{
    font-size: 2.8rem;
    font-weight: 400;
    max-width: 60%;
    margin-bottom: 2rem;
}

.content .area1 .header p{
    font-size: 1.5rem;
    max-width: 85%;
    margin-bottom: 8rem;
    /* color: var(--primaryColor); */
}


/* Styling the Area2 */
.content .area2{
    padding: 4rem 0;
}

.content .area2 .quality {
    margin-bottom: 4rem;
}

.content .area2 .quality h4 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2rem;
}

.content .area2 .quality h4 i {
    margin-right: 1.2rem;
    font-size: 3rem;
}

.content .area2 .quality p {
    font-size: 1.4rem;
}


/* Styling the button */
.content .area2 button{
    background-color: #F4524D;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-family: var(--primaryFont);
    padding: 1.5rem 3.5rem;
    font-size:1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 4rem;
}


</style>