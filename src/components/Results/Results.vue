<template>
    <section id="Results">
        <app-header></app-header>
        <div class="content">
            <div class="maps">Space For Google Maps</div>
            <div class="results">
                <div class="options">
                    <div class="row1">
                        <div class="category">Category</div>
                        <div class="location">Location</div>
                    </div>  
                    <div class="row2">
                        <div class="search-radius">Radius</div>
                    </div>
                </div>
                <div class="cards">
                   <result-card></result-card>
                </div>   
            </div>
        </div>

    </section>
</template>

<script>
import Header from "../Shared/header.vue";
import Result from "./ResultCard.vue";

export default {
    components:{
        "app-header":Header,
        "result-card":Result
    }
}
</script>

<style scoped>
#Results{
    width: 100%;
    height: 84vh;
}

.content{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}


/* Styling the Maps Area */
.content .maps{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border: 2px solid black;
}


/* Styling the Results Area */
.content .results{
    padding: 4rem 2rem;
}

.content .results .options{
    margin-bottom: 2rem;
}


.content .results .options .row1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    margin-bottom: 2rem;
}

.content .results .options .row2{
    display: grid;
    grid-template-columns: 1fr;
}


.content .results .options .row1 div,
.content .results .options .row2 div{
    background-color:white;
    padding: 1.5rem 3rem;
    text-align: center;
}


/* Styling the Result Cards */
.content .results .cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
}




    
</style>