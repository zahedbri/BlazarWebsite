<template>
    <div class="gradient">
        <div class="list-links">
            <a href="#"><i class="fas fa-umbrella-beach"></i> <br>Beauty</a>
            <a href="#"><i class="fas fa-glass-martini"></i> <br>Catering</a>
            <a href="#"><i class="fas fa-coins"></i> <br>Finances</a>
            <a href="#"><i class="fas fa-heartbeat"></i> <br>Health</a>
            <a href="#"><i class="fab fa-pagelines"></i> <br>Plant & Deco</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.gradient{
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 4rem;
    z-index: 30;
}

.gradient .list-links{
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.gradient .list-links a{
    text-decoration: none;
    color: white;
    font-size:2rem;
    text-align: center;
}

.gradient .list-links i {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.gradient .list-links a:hover{
    color: var(--hoverColor);
}

</style>