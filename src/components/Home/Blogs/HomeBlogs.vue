<template>
    <section id="Blogs">
        <div class="content">
            <div class="header">
                <div class="back-heading">Latest News</div>
                <div class="front-heading">Getting Statred<hr></div>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="card-header">
                        <div class="tags">Fit,Happiness</div>
                        <div class="share"><i class="fas fa-share-alt"></i></div>
                    </div>
                    <div class="card-img">
                        <img @click="toBlog" src="../../../assets/blog1.jpg" alt="photo">
                    </div>
                    <div class="card-text">
                        <h5>December 24, 2019 8:57pm</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dignissimos!</p>
                        <hr>
                        <div class="card-footer">
                            <h5>By John Doe</h5>
                            <span class="category"><i class="far fa-circle"></i>Adventure</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="tags">Fit,Happiness</div>
                        <div class="share"><i class="fas fa-share-alt"></i></div>
                    </div>
                    <div class="card-img">
                        <img @click="toBlog" src="../../../assets/blog2.jpg" alt="photo">
                    </div>
                    <div class="card-text">
                        <h5>December 24, 2019 8:57pm</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dignissimos!</p>
                        <hr>
                        <div class="card-footer">
                            <h5>By John Doe</h5>
                            <span class="category"><i class="far fa-circle"></i>Adventure</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="tags">Fit,Happiness</div>
                        <div class="share"><i class="fas fa-share-alt"></i></div>
                    </div>
                    <div class="card-img">
                        <img @click="toBlog" src="../../../assets/blog3.jpg" alt="photo">
                    </div>
                    <div class="card-text">
                        <h5>December 24, 2019 8:57pm</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dignissimos!</p>
                        <hr>
                        <div class="card-footer">
                            <h5>By John Doe</h5>
                            <span class="category"><i class="far fa-circle"></i>Adventure</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods:{
        toBlog:function(){
            this.$router.push({path:"/Blog"});
        }
    }
}
</script>

<style scoped>
#Blogs{
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

.cards{
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5rem; 
}

/* Styling the Card Header */
.cards .card .card-header{
    background-color: white;
    padding: 1.4rem;
    display: flex;
    justify-content: space-between;
}

.cards .card .card-header .tags{
    font-size: 1.4rem;
    font-weight: 700;
}

.cards .card .card-header .share{
    color: var(--primaryColor);
    font-size: 1.4rem;
}
.cards .card .card-img img{
    width: 100%;
    height: 200px;
    cursor: pointer;
}


/* Styling the Card Body */
.cards .card .card-text {
    padding: 2rem;
    background-color: white;
}   
.cards .card .card-text h5 {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    color: var(--accentColor);
    font-weight: 500;
}

.cards .card .card-text p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 500;
}


/* Styling the card footer */
.cards .card .card-text .card-footer{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem 0rem 1rem;
}

.cards .card .card-text .card-footer h5{
    color: var(--hoverColor);
}

.cards .card .card-text .card-footer .category{
    font-weight: 700;
    color: var(--primaryColor);
    font-size: 1.2rem;
}

.cards .card .card-text .card-footer .category i{
    font-size: 1.5rem;
    vertical-align: middle;
    margin-right: 5px;
}

</style>