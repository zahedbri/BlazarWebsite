<template>
    <section id="Pricing">        
        <div class="content">

            <div class="header">
                <h2>Pricing</h2>
                <hr>
            </div>

            <div class="pricing-cards">
                <div class="pricing-card">
                    <div class="card-header">
                        <h4>Basic</h4>
                        <img src="../../assets/pricing1.png" alt="prize1">
                        <h3>Free</h3>
                        <p>The best choice if you are ok with the basic features.</p>
                    </div>
                    <div class="card-body">
                        <p>One Time Payment</p>
                        <p>Run Listing For 1 Year</p>
                        <p>1 Image allowed</p>
                        <p>Stciky Listing</p>
                        <button class="add_list">Add Listing</button>
                    </div>
                </div>
                
                <div class="pricing-card ultimate">
                    <div class="card-header">
                        <h4>Ultimate</h4>
                        <img src="../../assets/pricing2.png" alt="prize2">
                        <h3>Free</h3>
                        <p>The best choice if you are ok with the basic features.</p>
                    </div>
                    <div class="card-body">
                        <p>One Time Payment</p>
                        <p>Run Listing For 1 Year</p>
                        <p>1 Image allowed</p>
                        <p>Stciky Listing</p>
                        <button class="add_list">Add Listing</button>
                    </div>
                </div>
                
                <div class="pricing-card">
                    <div class="card-header">
                        <h4>Basic</h4>
                        <img src="../../assets/pricing3.png" alt="prize3">
                        <h3>Free</h3>
                        <p>The best choice if you are ok with the basic features.</p>
                    </div>
                    <div class="card-body">
                        <p>One Time Payment</p>
                        <p>Run Listing For 1 Year</p>
                        <p>1 Image allowed</p>
                        <p>Stciky Listing</p>
                        <button class="add_list">Add Listing</button>
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

.content{
    width: 85%;
    margin: 8rem auto;
}


/* Styling the Header */
.content .header{
    text-align: center
}

.content .header h2 {
    font-size: 2.8rem;
    font-weight: 400;
    color: var(--accentColor);
}

.content .header hr{
    width: 6rem;
    margin: 0.8rem auto;
    border-bottom: 1px solid var(--hoverColor);
}

/* Styling the Card section */
.content .pricing-cards{
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
}

.content .pricing-cards .pricing-card{
    background-color: white;
    text-align: center;
    padding: 3rem;
    font-family: var(--secondaryFont);
    border-radius: 4px;
}


/* Styling the Card header */
.content .pricing-cards .pricing-card .card-header h4 {
    font-size: 1.8rem;
    font-weight: 500;
}

.content .pricing-cards .pricing-card .card-header img {
    margin-top: 2.5rem;
}

.content .pricing-cards .pricing-card .card-header h3 {
    margin-top: 2rem;
    font-size: 3.5rem;
    font-weight: 500;
}

.content .pricing-cards .pricing-card .card-header p {
    margin: 2rem auto;
    font-size: 1.6rem;
    max-width: 70%;
}


/* Styling the Card Body */
.content .pricing-cards .pricing-card .card-body p {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
}

.content .pricing-cards .pricing-card .card-body button {
    margin-top: 4rem;
    background: none;
    outline:none;
    border: 2px solid var(--primaryColor);
    border-radius: 6px;
    padding: 1.2rem 2.5rem;
    font-family: var(--secondaryFont);
    font-weight: 600;
    color: var(--primaryColor);
    cursor: pointer;
    transition: all 0.4s ease;
}

.content .pricing-cards .pricing-card .card-body button:hover {
    background-color: var(--primaryColor);
    color: white;
}


/* Styling the Ultimate pricing Card */
.content .pricing-cards .ultimate{
    color: white;
    background-color: #4e94b1;
}

.content .pricing-cards .ultimate .card-body button {
    color: white;
    border-color: white;
}

.content .pricing-cards .ultimate .card-body button:hover {
    background-color: white;
    color: var(--hoverColor);
}


</style>