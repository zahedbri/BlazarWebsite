<template>
    <div class="searchBox">
        
        <div class="category">
            <h3>What are you looking for</h3>
            <input type="text" list="dropdown-categories" placeholder="Ex. food,service,barber,hotel">
            <datalist id="dropdown-categories">
                <option value="Beauty">Beauty</option>
                <option value="Fitness">Fitness</option>
                <option value="Finances">Finances</option>
                <option value="Health">Health</option>
                <option value="Plants">Plants and Deco</option>
            </datalist>    
        </div>

        <div class="location">
            <h3>location</h3>
            <i class="fas fa-map-marker-alt"></i>
            <input type="text" list="dropdown-locations" placeholder="Location">
            <datalist id="dropdown-locations">
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
            </datalist>    
        </div>
        
        <button class="search">Search</button>
    
    </div>

</template>


<script>
export default {
    
}
</script>


<style scoped>

.searchBox{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: grid;
    width: 55%;
    /* height: 10%; */
    grid-template-columns: 4fr 2fr 2fr;   
    color: var(--primaryColor);
    background-color:white;
    border-radius: 4px;
}

.category,.location,.search{
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.category{
    border-right:1px solid var(--primaryColor);
}

.location{
    position: relative;
}

.location i {
    position: absolute;
    top: 35%;
    right: 5%;
    font-size: 1.5rem;
    transition: all 0.2s ease;
}

.searchBox input{
    width: 100%;
    background:none;
    border: none;
    outline: none;
    font-family: var(--primaryFont);
}

.searchBox input::-webkit-calendar-picker-indicator {
	display: none;
}

.searchBox h3{
    text-transform: uppercase;
    margin-bottom: 0.5rem;    
}


/* Adding the Hover Effect */
.searchBox .category:hover h3,.searchBox .location:hover h3 {
    color: var(--hoverColor);
}

.searchBox .search{
    background-color: #f25f5c;
    color: white;
    border: none;
    outline: none;
    text-transform: uppercase;    
    font-weight: 500;
    cursor: pointer;
}

.location i:hover {
    color: var(--hoverColor);    
}


</style>