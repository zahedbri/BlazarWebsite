<template>
    <section id="Reviews">
        <div class="content">
            <i class="fas fa-comment-alt"></i>
            <component :is="selectedReview"></component>
            
            <div class="users">
                <div class="user">
                    <div class="user-img" @click="selectedReview='Review1'">
                        <img src="../../../assets/user1.png" alt="user-1">
                    </div>
                    <div class="user-info">
                        <h3>Michael</h3>
                        <h4>Musician</h4>
                    </div>
                </div>
                
                <div class="user">
                    <div class="user-img" @click="selectedReview='Review2'">
                        <img src="../../../assets/user2.png" alt="user-2">
                    </div>
                    <div class="user-info">
                        <h3>Olivia</h3>
                        <h4>Art Director</h4>
                    </div>
                </div>
                
                <div class="user">
                    <div class="user-img" @click="selectedReview='Review3'">
                        <img src="../../../assets/user3.png" alt="user-3">
                    </div>
                    <div class="user-info">
                        <h3>Jeniffer</h3>
                        <h4>CEO</h4>
                    </div>
                </div>
            
            </div> 
        </div>
    </section>
</template>


<script>
import Review1 from "./Review1";
import Review2 from "./Review2";
import Review3 from "./Review3";

export default {
    data(){
        return{
            selectedReview:Review1,
        };
    },
    components:{
        Review1:Review1,
        Review2:Review2,
        Review3:Review3
    }
    
}
</script>

<style scoped>
#Reviews{
    background-color: white;
}   

.content{
    width: 85%;
    margin:0 auto;
    padding: 10rem 0 12rem 0;
    text-align: center;
    color: var(--accentColor);
}

.content i{
    font-size: 8rem;
    margin-bottom: 4rem;
}

.content .users{
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}

.content .users .user{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.content .users .user .user-img{
    cursor: pointer;
}


.content .users .user .user-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
}

.content .users .user .user-info h3{
    font-size: 1.8rem;
    font-weight: 500;
}

.content .users .user .user-info h4{
    font-size: 1.4rem;
    font-weight: 500;
}





</style>