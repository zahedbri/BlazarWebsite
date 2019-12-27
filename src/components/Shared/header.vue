<template>
    <div class="navigation">
        <header>
            <span><router-link to="/"><img src="../../assets/logo.png" alt="Logo"></router-link></span>
            <nav>
                <ul>
                    <li>
                        <a href="#">Pages <i class="fas fa-angle-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Split Slider</a></li>
                        </ul>
                    </li>
                    
                    <li >
                        <a href="#">Explore <i class="fas fa-angle-down"></i></a>
                        <ul class="dropdown" >
                            <li><a href="#">Beauty</a></li>
                            <li><a href="#">Catering</a></li>
                            <li><a href="#">Finances</a></li>
                            <li><a href="#">Health</a></li>
                            <li ><a href="#">Plants & Deco</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#">Help <i class="fas fa-angle-down"></i></a>
                        <ul class="dropdown">
                            <li><router-link to="/Pricing">Pricing</router-link></li>
                            <li><router-link to="/About">About Us</router-link></li>
                            <li><router-link to="/Faq">FAQ</router-link></li>
                        </ul>
                    </li>

                    <li><a href="#">How it Works</a></li>
                </ul>
            </nav>
            <button class="register"><i class="fas fa-unlock"></i> Sign In/Register</button>
            <button class="createListing">Create a Listing</button>
            <button class="hamburger-menu">Menu<i class="fas fa-bars"></i></button>
        </header>
    </div>
</template>


<script>
export default {
    data(){
        return{

        };
    }
}
</script>

<style scoped>

.navigation{
    width: 100%;
    padding: 2rem 0;
    z-index: 50;
    background-color: white;
    top: 0;
}

header{
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

header span{
    margin-right: auto;
}

header span a img{
    cursor: pointer;
}

nav{
    margin-right: 5rem;
}

nav ul li {
    display: inline-block;
    list-style: none;
    padding: 0.8rem;
    margin-right:3rem;
    position: relative;
    transition: all 0.1s ease-out;
}


nav ul li a {
    text-decoration: none;
    color: var(--primaryColor);
    font-size: 1.4rem;
    font-weight: 600;
}

nav ul li a i{
    margin-left: 1.5rem;
}

/* Styling the Dropdown */
nav ul li .dropdown {
    display: none;
    position: absolute;
    top: 3rem;
    left: 0;
    width: 16rem;
    background-color:white;
    padding: 1.5rem;
    z-index: 50;

}

nav ul li .dropdown li{
    margin-bottom: 0.8rem;
    padding: 0;
    padding: 0.15rem;
}

nav ul li .dropdown li a {
    color:var(--primaryColor);
}

nav ul li .dropdown li a:hover{
    color: var(--hoverColor);
}

/* Adding the Hover Effects */
nav ul li:hover {
    background-color: white;
}
nav ul li:hover a{
    color:var(--hoverColor);
}

nav ul li:hover .dropdown{
    display: block;
}



/* Styling the Buttons */
header .register{
    background:none;
    border:none;
    outline: none;
    padding: 1rem;
    font-family: var(--primaryFont);
    font-weight: 600;
    color:var(--primaryColor);
    cursor: pointer;
    margin-right: 1.5rem;
}

header .register i {
    margin-right: 0.5rem;
}

header .createListing {
    width: 15%;
    background:none;
    outline: none;
    padding: 1rem;
    font-family: var(--primaryFont);
    font-weight: 600;
    color: var(--hoverColor);
    border: 2px solid var(--hoverColor);
    border-radius: 5px;
    cursor: pointer;
}

header .createListing:hover {
   background-color: var(--hoverColor);
   color: white;
}

/* Styling the Hamburger Menu */
header .hamburger-menu{
    display: none;
    background:none;
    font-family: var(--primaryFont);
    border:none;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.6rem;
    text-transform: uppercase;
}

header .hamburger-menu i {
    font-size: 2.5rem;
    vertical-align: middle;
    margin-left: 0.8rem;
}

header .hamburger-menu:hover{
    color: var(--hoverColor);
    background-color: white; 
    font-weight: 600;
}





</style>