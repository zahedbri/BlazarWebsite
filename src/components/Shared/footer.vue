<template>
    <div id="Footer">
        <footer>
            <div class="logo">
                <img src="../../assets/logo.png" alt="logo">
                <p>
                    Copyright 2019,Directory <br>
                    All rights reserved.
                </p>
            </div>
            <div class="email">
                <input type="email" placeholder="Your Email">
                <i class="fas fa-paper-plane"></i>
            </div>
            <div class="social-handles">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-google-plus"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <div class="links">
                <a href="#">Pricing</a>
                <a href="#">Explore</a>
                <a href="#">Blog</a>
            </div> 
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
#Footer{
    width: 100%;   
    background-color: white;
    padding: 5rem 0;
    margin-top: 8rem;

}

footer{
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 2fr;
    grid-column-gap: 1rem; 
}

/* Styling the Logo Section */
footer .logo{
    display: flex;
}

footer .logo img{
    margin-right: 2rem;
}

footer .logo p{
    font-size: 1.3rem;
    color: var(--primaryColor);
}


/* Styling the Email section */
footer .email {
    border: 2px solid rgba(144,159,165,.3);
    height: 5rem;
    border-radius: 35px;
    position: relative;
}

footer .email input{
    width: 100%;
    height: 100%;
    background:none;
    border: none;
    outline: none;
    padding: 0 2rem;
    font-family: var(--primaryFont);
}

footer .email i{
    position: absolute;
    top: 35%;
    right: 5%;
    color: rgba(144,159,165,.3);
    font-size: 1.4rem;
    cursor: pointer;
}

footer .email i:hover{
    color: var(--hoverColor);
}


/* Styling the Social Handles */
footer .social-handles{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-right:1px solid rgba(144,159,165,.3); 
}

footer .social-handles i{
    font-size: 2.5rem;
    margin-right: 1.4rem;
    color: rgba(144,159,165,.3);
    cursor: pointer;

}

/* Stlying the Links */
footer .links{
    display: flex;
    justify-content: center;
    align-items: center;
}

footer .links a{
    font-size: 1.4rem;
    text-decoration: none;
    margin-right: 2rem;
    font-weight: 600;
    color: var(--primaryColor);
}

/* Adding the Hover Effects */
footer .social-handles i:hover,footer .links a:hover{
    color: var(--hoverColor);
}

</style>