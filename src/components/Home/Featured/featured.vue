<template>

    <section id="About">
        <div class="content">
            <div class="header">
                <div class="back-heading">Featured</div>
                <div class="front-heading">Featured Listings<hr></div>
            </div>
            <div class="cards">
                <div class="card">
                    
                    <div class="card-img">
                        <img src="../../../assets/background1.jpg" alt="photo">
                        <div class="overlay">
                            <span class="featured-tag">Featured</span>
                            <span class="thumbs-up"><i class="fas fa-thumbs-up"></i></span>

                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                9 Merritt St, Jersey City, NJ 07305, USA
                            </span>

                            <span class="contact">
                                <i class="fas fa-phone"></i>
                                +371 123 456 789
                            </span>

                        </div>
                    </div>

                    <div class="card-text">
                        <h4>The Morning Hotel</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius exercitationem vitae deserunt iusto ducimus veritatis quia dolores provident quo et!</p>
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

                <div class="card">
                    <div class="card-img">
                        <img src="../../../assets/background1.jpg" alt="photo">
                        <div class="overlay">
                            <span class="featured-tag">Featured</span>
                            <span class="thumbs-up"><i class="fas fa-thumbs-up"></i></span>

                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                9 Merritt St, Jersey City, NJ 07305, USA
                            </span>

                            <span class="contact">
                                <i class="fas fa-phone"></i>
                                +371 123 456 789
                            </span>

                        </div>
                    </div>                    
                    
                    <div class="card-text">
                        <h4>The Morning Hotel</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius exercitationem vitae deserunt iusto ducimus veritatis quia dolores provident quo et!</p>
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

                <div class="card">
                    <div class="card-img">
                        <img src="../../../assets/background1.jpg" alt="photo">
                        <div class="overlay">
                            <span class="featured-tag">Featured</span>
                            <span class="thumbs-up"><i class="fas fa-thumbs-up"></i></span>

                            <span class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                9 Merritt St, Jersey City, NJ 07305, USA
                            </span>

                            <span class="contact">
                                <i class="fas fa-phone"></i>
                                +371 123 456 789
                            </span>

                        </div>
                    </div>
                    <div class="card-text">
                        <h4>The Morning Hotel</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius exercitationem vitae deserunt iusto ducimus veritatis quia dolores provident quo et!</p>
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

            </div>
        
        </div>

    </section>

</template>

<script>
export default {
    
}
</script>


<style scoped>
#About{
    width: 100%;
    /* height: 100vh; */
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


.cards{
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5rem; 
}

.cards .card .card-img{
    position: relative;
}

/* Styling the Image Overlay Content */
.cards .card .card-img .overlay .featured-tag{
    position: absolute;
    top: 7%;
    left: 6%;
    background: red;
    font-size: 1.1rem;
    padding: 0.4rem 0.6rem;
    color: white;
    border-radius: 4px;
}
.cards .card .card-img .overlay .thumbs-up {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 7%;
    right: 6%;
}


.cards .card .card-img .overlay .location {
    position: absolute;
    bottom: 22%;
    left: 6%;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
}

.cards .card .card-img .overlay .contact{
    position: absolute;
    bottom: 10%;
    left: 6%;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
}

.cards .card .card-img .overlay .location i, 
.cards .card .card-img .overlay .contact i {
    margin-right: 8px;
}

.cards .card .card-img img{
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
}


.cards .card .card-text{
    padding: 1rem;
}

.cards .card .card-text h4{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    /* color: var(--primaryColor); */
}

.cards .card .card-text p {
    font-size:1.5rem;
    font-family: var(--secondaryFont);
    color: var(--accentColor);
    margin-bottom: 2rem;
}

.cards .card .card-text hr {
    margin: 0 auto;
}

.cards .card .card-text .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem 1rem 1rem;
}
.cards .card .card-text .card-footer h5{
    font-size:1.2rem;
    color: red;
    font-weight: 600;
}

.cards .card .card-text .card-footer h5 i {
    margin-right: 5px;
}

.cards .card .card-text .card-footer .stars{
    font-size: 1.3rem;
    color: var(--hoverColor);
}

</style>