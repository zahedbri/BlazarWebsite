<template>
    <div class="main-area">
        <h3>Quo tale fabulas ad, eum legimus fuisset ea. Pri eu quod vitae, cibo homero albucius te eum. Ad vidit option dolorum vis.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia neque ultricies maximus ultrices. Nunc congue bibendum dui, sit amet mattis erat gravida et. Donec quis rhoncus risus, et auctor ante. Curabitur scelerisque dolor et quam feugiat bibendum. Sed lacinia pulvinar justo, quis viverra leo ullamcorper ut. Vestibulum ornare mollis turpis, ut laoreet justo dictum nec. Cras ex libero, condimentum vel convallis nec, condimentum vitae orci. Nullam a mattis justo, non auctor nibh. Integer euismod dui nec euismod eleifend. Vestibulum rhoncus lacus felis, eu blandit sem finibus at. Curabitur eget nibh dolor. Ut vitae malesuada turpis. In ac arcu neque. Praesent suscipit rhoncus nisi id sollicitudin. Quisque quis lectus libero.</p>
        <p>Aliquam non rutrum purus, a aliquet velit. Duis tortor magna, suscipit in consequat eget, ultrices eu lectus. Nam et urna purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nisi erat, lacinia convallis ex eu, convallis pharetra ligula. Ut ut felis viverra, commodo sapien eleifend, posuere dui. Quisque sed erat faucibus, facilisis arcu id, commodo ex. Vivamus nec scelerisque odio. Donec gravida eleifend nulla. Mauris et tincidunt nibh.</p>
        <p>Nulla rhoncus eleifend lectus, sed maximus mi faucibus id. Mauris vestibulum non purus et lobortis. Etiam condimentum lacus urna, vitae cursus metus feugiat eu. Curabitur sed ligula et tellus lacinia rutrum ultricies at tellus. Pellentesque interdum mi vitae nulla tempus, id fermentum nunc facilisis. Donec ultricies ligula nunc, non volutpat nulla convallis et. Nunc eu arcu semper, sollicitudin felis non, tincidunt nulla. Phasellus purus felis, fringilla et vehicula ac, sodales sit amet tortor.</p>
        <p>Aliquam id ultricies lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec convallis feugiat viverra. Donec vulputate vitae tellus at vehicula. Quisque posuere feugiat elementum. Pellentesque sodales lorem et libero cursus facilisis. Nunc maximus ut massa in lobortis. Donec a diam et diam facilisis egestas sed ac sem. Sed mauris lectus, interdum et rutrum volutpat, vehicula sed lacus.</p>

        <div class="gallery">
            <h3>Photo gallery</h3>
            <div class="row1">
                <div class="image image1">
                    <img src="../../assets/fg1.jpg" alt="photo1">
                </div>
                <div class="image image2">
                    <img src="../../assets/fg2.jpg" alt="photo2">
                </div>
            </div>

            <div class="row2">
                <div class="image image3">
                    <img src="../../assets/fg3.jpg" alt="photo3">
                </div>
                <div class="image image4">
                    <img src="../../assets/fg4.jpg" alt="photo4">
                </div>
                <div class="image image5">
                    <img src="../../assets/fg5.jpg" alt="photo5">
                </div>
            </div>
            
        </div> 

        <p>Nulla rhoncus eleifend lectus, sed maximus mi faucibus id. Mauris vestibulum non purus et lobortis. Etiam condimentum lacus urna, vitae cursus metus feugiat eu. Curabitur sed ligula et tellus lacinia rutrum ultricies at tellus. Pellentesque interdum mi vitae nulla tempus, id fermentum nunc facilisis. Donec ultricies ligula nunc, non volutpat nulla convallis et. Nunc eu arcu semper, sollicitudin felis non, tincidunt nulla. Phasellus purus felis, fringilla et vehicula ac, sodales sit amet tortor.</p>
        <p>Aliquam id ultricies lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec convallis feugiat viverra</p>

        <div class="ammenities-container">
            <h4>Ammenities</h4>
            <div class="ammenities">
                <span class="ammenity">
                    <i class="fas fa-wheelchair"></i>
                    <p>Wheelchair</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-chess"></i>
                    <p>Kids Zone</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-cat"></i>
                    <p>Pets Friendly</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-bicycle"></i>
                    <p>Bike parking</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-credit-card"></i>
                    <p>Accept Credit Card</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-car"></i>
                    <p>Car Parking</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-gift"></i>
                    <p>Gift Wrapping</p>
                </span>
                <span class="ammenity">
                    <i class="fas fa-wifi"></i>
                    <p>Free Wifi</p>
                </span>
            </div>
        </div>
    
        <app-comments></app-comments>
    
    </div>
</template>

<script>
import Comments from "../Shared/comment";

export default {
    components:{
        "app-comments":Comments
    }
}
</script>


<style scoped>
 .main-area{
    background-color: white;
    padding: 6rem 4rem;
    border-radius: 5px;
    z-index: 100;
}

 .main-area h3 {
    font-size: 2.8rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 5rem;
}

 .main-area p {
    font-size: 1.4rem;
    line-height: 1.8;
    font-weight: 400;
    margin-bottom: 4rem;
}


/* Styling the image gallery */
 .main-area .gallery{
    margin-bottom: 5rem;
}
 .main-area .gallery h3{
    text-align: left;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: var(--primaryFont);
}

 .main-area .gallery img{
    width: 100%;
    height: 100%;
}
 .main-area .gallery .row1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 24rem;
    grid-column-gap: 0.4rem;
    margin-bottom: 0.4rem;
}

 .main-area .gallery .row2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 16rem;
    grid-column-gap: 0.4rem;
}


/* Styling the Ammenities Section */
 .main-area .ammenities-container{
    background-color: var(--bodyColor);
    padding: 2rem;
}

 .main-area .ammenities-container h4{
    font-size: 1.6rem;
    font-weight: 500;
    font-family: var(--primaryFont);
    margin-bottom: 2rem;
}


 .main-area .ammenities{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 4rem 4rem;
    grid-column-gap: 0;
    grid-row-gap: 1rem;
}

 .main-area .ammenities .ammenity{
    display: flex;
}

.main-area .ammenities .ammenity i{
    vertical-align: baseline;
    font-size: 2rem;
    margin-right: 1rem;
}
    
</style>
