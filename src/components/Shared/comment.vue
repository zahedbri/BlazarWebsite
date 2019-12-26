<template>
    <div id="comments">
       <!-- <div class="read-comments"></div> -->
       <div class="write-comments">
           <fieldset>
               <legend>Leave your Review</legend>
               <form>
                   <input type="text" placeholder="Title of your Review*">
                   <input type="text" placeholder="Enter your Name*">
                   <input type="email" placeholder="Your Email*">
                   
                   <div class="comment">
                        <textarea cols="30" rows="10" placeholder="Your Review*"></textarea>
                        <i class="fas fa-paper-plane"></i>
                    </div>
               </form>
           </fieldset>

       </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#comments{
    margin-top: 6rem;
    font-family: var(--primaryFont);
    background-color: #f1f5f8;
    padding: 4rem 2rem;
}

.write-comments fieldset{
    border: none;
}

.write-comments fieldset legend{
    font-size: 1.8rem;
    margin-bottom: 2rem;
}

.write-comments form  input {
    width: 100%;
    height: 4rem;
    font-family: var(--primaryFont);
    padding: 0 2rem;
    margin-bottom: 2rem;
    border: none;
    outline: none;
    border-radius: 4px;
}

.write-comments form .comment {
    position: relative;
}

.write-comments form .comment textarea {
    width: 100%;
    height: 100%;
    font-family: var(--primaryFont);
    padding: 1rem 2rem;
    border: none;
    outline: none;
    border-radius: 4px;


}

.write-comments form .comment i {
    position: absolute;
    bottom: 8%;
    right: 4%;
    cursor: pointer;
    font-size: 1.8rem;
}

.write-comments form .comment i:hover {
    color: var(--hoverColor);
}





</style>