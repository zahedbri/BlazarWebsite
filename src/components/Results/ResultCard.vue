<template>
    <div class="card">
        <div class="card-img">
            <img src="../../assets/f1.jpg" alt="photo">
            <div class="overlay">
                <span class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    Place
                </span>

                <span class="contact">
                    <i class="fas fa-phone"></i>
                    +371 123 456 789
                </span>

            </div>
        </div>

        <div class="card-text">
            <h4>The Morning Hotel</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi!</p>
            <hr>
            <div class="card-footer">
                <h5><i class="far fa-circle"></i>Hotel</h5>            
                <div class="stars">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>


.card .card-img{
    position: relative;
}

/* Styling the Image Overlay Content */
.card .card-img .overlay .location {
    position: absolute;
    bottom: 22%;
    left: 6%;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
}

.card .card-img .overlay .contact{
    position: absolute;
    bottom: 10%;
    left: 6%;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
}

.card .card-img .overlay .location i, 
.card .card-img .overlay .contact i {
    margin-right: 8px;
}

.card .card-img img{
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
}


.card .card-text{
    padding: 1rem;
}

.card .card-text h4{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    /* color: var(--primaryColor); */
}

.card .card-text p {
    font-size:1.5rem;
    font-family: var(--secondaryFont);
    color: var(--accentColor);
    margin-bottom: 2rem;
}

.card .card-text .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem 1rem 1rem;
}

.card .card-text .card-footer h5{
    font-size:1.2rem;
    color: red;
    font-weight: 600;
}

.card .card-text .card-footer h5 i {
    margin-right: 5px;
}

.card .card-text .card-footer .stars{
    font-size: 1.3rem;
    color: var(--hoverColor);
}
    
</style>