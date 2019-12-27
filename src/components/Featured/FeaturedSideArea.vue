<template>
    <div class="side-area">
        <div class="advertisement">advertisement</div>
        
        <div class="appointment">
            <button>Make an appointment</button>
            
            <div class="contact clearfix">
                <h4>Contact details</h4>
                <div class="contact-info">
                    <p><i class="fas fa-map-marker-alt"></i>9 Merritt St, Jersey City, NJ 07305, USA</p>
                    <p><i class="fas fa-phone"></i>+371 123 456 789</p>
                    <a href="#"><i class="fas fa-phone"></i>http://example.com</a>
                </div>
                <h5>-Please don't hesitate to <a href="#">contact us</a></h5>
            </div>

            <div class="timing">
                <h4>Opening hours</h4>
                <table>
                    <thead>
                        <th>Day</th>
                        <th>Timing</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>8:30 AM-8:30 PM</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>8:30 AM-8:30 PM</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>8:30 AM-8:30 PM</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>8:30 AM-8:30 PM</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>8:30 AM-8:30 PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>8:30 AM-8:30 PM</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* Styling the Side area */
.side-area{
    z-index: 100;
}

.side-area .advertisement{
    border: 2px solid black;
    height: 30rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 3rem;
}

.side-area .appointment button{
    background-color: #f25f5c;
    border: none;
    outline: none;
    color: white;
    font-family: var(--primaryFont);
    padding:1.5rem 5rem; 
    font-weight: 600;
    margin-bottom: 2rem;
}


/* Styling the Contact Area */
.side-area .appointment .contact {
    margin-bottom: 6rem;
}


.side-area .appointment .contact h4,.side-area .appointment .timing h4{
    font-size: 1.8rem;
    font-weight: 500;
    font-family: var(--primaryFont);
    color: black;
    margin-bottom: 1rem;
}

.side-area .appointment .contact .contact-info{
   background-color: white;
   border-radius: 5px;
   padding: 2rem; 
}

.side-area .appointment .contact .contact-info p{
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
}
.side-area .appointment .contact .contact-info i{
    margin-right: 1rem;
}

.side-area .appointment .contact .contact-info a{
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--hoverColor);

}

.side-area .appointment .contact .contact-info a i{
    color: var(--accentColor);
}

.side-area .appointment .contact h5{
    margin-top: 1rem;
    float: right;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: var(--primaryFont);
}

.side-area .appointment .contact h5 a{
    text-decoration: none;
    color: var(--hoverColor);
}


/* Styling the Timing table */
.side-area .appointment .timing table{
    background-color: white;
    padding: 1.5rem;
    width: 100%;
    font-family: var(--primaryFont);
}
.side-area .appointment .timing table th{
    text-align: left;
    font-size: 1.4rem;
    font-weight: 600;
}

.side-area .appointment .timing table td{
    padding-top:0.8rem; 
    font-size: 1.2rem;

}








    
</style>