<template>
    <div class="navigation">
        <header>
            <img src="../../../assets/logo2.png" alt="Logo">
            <nav>
                <ul>
                    <li><a href="#">Pages <i class="fas fa-angle-down"></i></a></li>
                    <li><a href="#">Explore <i class="fas fa-angle-down"></i></a></li>
                    <li><a href="#">Help <i class="fas fa-angle-down"></i></a></li>
                    <li><a href="#">How it Works</a></li>
                </ul>
            </nav>
            <button class="register">Sign In/Register</button>
            <button class="createListing">Create a Listing</button>
        </header>
    </div>
</template>


<script>
export default {

}
</script>

<style scoped>

.navigation{
    width: 100%;
    padding: 2rem;
    z-index: 50;
}

header{
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* padding: 3rem; */
}

img{
    margin-right: auto;
    cursor: pointer;
}

nav{
    margin-right: 5rem;
}

nav ul li {
    display: inline-block;
    list-style: none;
    margin-right:3rem;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
}

nav ul li  a i {
    margin-left: 5px;
}

header .register{
    background:none;
    border:none;
    outline: none;
    padding: 1rem;
    font-family: var(--primaryFont);
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-right: 1.5rem;
}

header .createListing {
    width: 15%;
    background:none;
    outline: none;
    padding: 1rem;
    font-family: var(--primaryFont);
    font-weight: 600;
    color: white;
    border: 1px solid white;
    cursor: pointer;
}



</style>