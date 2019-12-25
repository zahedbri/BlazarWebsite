<template>
    <section id="Faq">
        <div class="content">
            <div class="header">
                <h2>Frequently Asked Questions</h2>
                <hr>
            </div>
            <div class="questions">
                
                <div class="question">
                    <div class="overlay">
                        <div class="text">
                            <i class="fas fa-question"></i>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque.</p>
                        </div>
                    </div>
                    <div class="answer">
                        <h3>Solution</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio harum atque dolor animi accusantium ea. Sed, in odio rerum nihil autem minima corporis. Minima, quibusdam earum repellat quam error labore reiciendis excepturi nostrum a, pariatur aperiam esse laudantium eaque! </p>
                    </div>
                </div>
                
                <div class="question">
                    <div class="overlay">
                        <div class="text">
                            <i class="fas fa-question"></i>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque.</p>
                        </div>
                    </div>
                    <div class="answer">
                        <h3>Solution</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio harum atque dolor animi accusantium ea. Sed, in odio rerum nihil autem minima corporis. Minima, quibusdam earum repellat quam error labore reiciendis excepturi nostrum a, pariatur aperiam esse laudantium eaque! </p>
                    </div>
                </div>
                
                <div class="question">
                    <div class="overlay">
                        <div class="text">
                            <i class="fas fa-question"></i>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque.</p>
                        </div>
                    </div>
                    <div class="answer">
                        <h3>Solution</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio harum atque dolor animi accusantium ea. Sed, in odio rerum nihil autem minima corporis. Minima, quibusdam earum repellat quam error labore reiciendis excepturi nostrum a, pariatur aperiam esse laudantium eaque! </p>
                    </div>
                </div>
                <div class="question">
                    <div class="overlay">
                        <div class="text">
                            <i class="fas fa-question"></i>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque.</p>
                        </div>
                    </div>
                    <div class="answer">
                        <h3>Solution</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio harum atque dolor animi accusantium ea. Sed, in odio rerum nihil autem minima corporis. Minima, quibusdam earum repellat quam error labore reiciendis excepturi nostrum a, pariatur aperiam esse laudantium eaque! </p>
                    </div>
                </div>
                <div class="question">
                    <div class="overlay">
                        <div class="text">
                            <i class="fas fa-question"></i>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque.</p>
                        </div>
                    </div>
                    <div class="answer">
                        <h3>Solution</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio harum atque dolor animi accusantium ea. Sed, in odio rerum nihil autem minima corporis. Minima, quibusdam earum repellat quam error labore reiciendis excepturi nostrum a, pariatur aperiam esse laudantium eaque! </p>
                    </div>
                </div>
                <div class="question">
                    <div class="overlay">
                        <div class="text">
                            <i class="fas fa-question"></i>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, doloremque.</p>
                        </div>
                    </div>
                    <div class="answer">
                        <h3>Solution</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio harum atque dolor animi accusantium ea. Sed, in odio rerum nihil autem minima corporis. Minima, quibusdam earum repellat quam error labore reiciendis excepturi nostrum a, pariatur aperiam esse laudantium eaque! </p>
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
    color: var(--accentColor);
}    

/* General Section Styling */
.content .header h2{
    font-size: 2.8rem;
    font-weight: 400;
    color: var(--primaryColor);
    text-align: center
}

.content  .header hr{
    width: 6rem;
    margin: 0.8rem auto 5rem auto;
    border-bottom: 1px solid var(--hoverColor);
}

.content .questions{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    /* font-family: var(--secondaryFont); */
}

.content .questions .question{
    background-color:white;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    cursor:pointer;

}


/* Styling the overlay question */
.content .questions .question .overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: #4e94b1;
    padding: 3rem;
    transition: all 0.5s ease;

}

.content .questions .question .overlay .text{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    transition: all 0.1s ease-in;
}

.content .questions .question .overlay .text i{
    font-size: 5rem;
    margin-bottom: 2rem;
}

.content .questions .question .overlay .text p{
    font-size: 1.4rem;
}



/* Adding the hover Effect */
.content .questions .question:hover .overlay{
    /* height: 5%; */
    transform:translateY(300px); 
}

.content .questions .question:hover .overlay .text{
    opacity: 0;
}




/* Styling the answer portion */
.content .questions .question .answer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.content .questions .question .answer h3{
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
} 

.content .questions .question .answer p{
    font-size: 1.2rem;
}



    
</style>