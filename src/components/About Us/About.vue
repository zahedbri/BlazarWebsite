<template>
    <section id="About">
        <div class="content clearfix">
            <div class="misison">
                <div class="header">
                    <h2>Our misision</h2>
                    <hr>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga id fugiat similique provident eum excepturi? Fugiat nostrum ad consequuntur unde, architecto labore similique vero vel, saepe voluptas pariatur mollitia veritatis!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi at totam reprehenderit ducimus et voluptate atque temporibus, deleniti sed omnis alias quisquam nisi. At obcaecati quaerat eaque nesciunt sunt! Harum?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quibusdam hic quas nulla harum inventore vel numquam iusto officia nemo ad sint, rem ullam cum praesentium velit, nobis dolores dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit.</p>
                </div>
            </div>
            <div class="team">
                <div class="header">
                    <h2>Meet Our Team</h2>
                    <hr>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore vitae delectus illo ducimus eos praesentium autem impedit, sit molestiae rem voluptas, odio modi. Omnis doloribus molestias recusandae obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos.</p>
                    
                    <div class="members">
                        
                        <div class="member">
                            <div class="member-img">
                                <img src="../../assets/tmember1.png" alt="Member-1">
                            </div>
                            <div class="member-info">
                                <h3>July Doe</h3>
                                <p>July is an amazing person, joined us in 2014 and since the beginning has been major part of our spectacular team. We wouldn’t be today what we are without July.</p>
                                <hr>
                                <div class="member-footer">
                                    <h5>Designer</h5>
                                    <div class="social-handles">
                                        <i class="fab fa-facebook-square"></i>
                                        <i class="fab fa-google-plus"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="member">
                            <div class="member-img">
                                <img src="../../assets/tmember2.png" alt="Member-2">
                            </div>
                            <div class="member-info">
                                <h3>July Doe</h3>
                                <p>July is an amazing person, joined us in 2014 and since the beginning has been major part of our spectacular team. We wouldn’t be today what we are without July.</p>
                                <hr>
                                <div class="member-footer">
                                    <h5>CEO</h5>
                                    <div class="social-handles">
                                        <i class="fab fa-facebook-square"></i>
                                        <i class="fab fa-google-plus"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="member">
                            <div class="member-img">
                                <img src="../../assets/tmember3.png" alt="Member-3">
                            </div>
                            <div class="member-info">
                                <h3>July Doe</h3>
                                <p>July is an amazing person, joined us in 2014 and since the beginning has been major part of our spectacular team. We wouldn’t be today what we are without July.</p>
                                <hr>
                                <div class="member-footer">
                                    <h5>Web Developer</h5>
                                    <div class="social-handles">
                                        <i class="fab fa-facebook-square"></i>
                                        <i class="fab fa-google-plus"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="join-us">
                <h3>What are you waiting for ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolorum, doloremque expedita impedit a dolores libero optio sapiente eaque sed, itaque eius accusamus perferendis blanditiis in consequuntur quos debitis et.</p>
                <button class="join">Join us Now </button>
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

.content .text{
    font-size: 1.4rem;
    font-family: var(--secondary-Font);
    line-height: 1.8;
}


/* Styling the Team Section */
.content .team{
    margin-top: 6rem;
}

.content .team .members{
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
}

.content .team .members .member .member-img{
    height: 203px;
}

.content .team .members .member .member-img img{
    width: 100%;
    height: 100%;
}

.content .team .members .member .member-info {
    background-color: white;
    padding: 2rem 2.5rem;
}

.content .team .members .member .member-info h3 {
    font-size: 1.8rem;
    color: black;
    font-weight: 400;
    margin-bottom: 0.6rem;
}

.content .team .members .member .member-info p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.content .team .members .member .member-info .member-footer{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem 0rem 1rem;
}

.content .team .members .member .member-info .member-footer h5{
    font-size: 1.3rem;
    font-weight: 600;
    font-family: var(--secondaryFont);

}


.content .team .members .member .member-info .member-footer .social-handles i{
    font-size: 1.9rem;
    margin-right: 0.4rem;
    color:rgba(0,0,0,0.2); 
    cursor: pointer;
}

.content .team .members .member .member-info .member-footer .social-handles i:hover{
    color: var(--hoverColor);
}


/* Styling the Join us Section  */
.content .join-us{
 margin-top: 12rem;
}

.content .join-us h3{
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
}

.content .join-us p{
    font-size: 1.4rem;
}

.content .join-us button{
    cursor: pointer;
    color: white;
    padding: 1.5rem 3rem;
    background-color:#FE6C61;
    margin-top:1rem;
    outline: none;
    border:none;
    text-transform: uppercase;
    float: right
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}




</style>