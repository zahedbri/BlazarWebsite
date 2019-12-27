<template>
    <div class="content">
        
        <div class="author">
            <div class="author-img">
                <img src="../../assets/user1.png" alt="">
            </div>
            <div class="details">by <span>John Doe</span> / December 20,2019 </div>
            <div class="social-handles">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
            </div>
        </div>
        
        <div class="container">
            
            <div class="header">
                Quo tale fabulas ad, eum legimus fuisset ea. Pri eu quod vitae, cibo homero albucius te eum. Ad vidit option dolorum vis, nec at putant melius. Delicata intellegebat cu quo, nemore virtute iuvaret eu nec, malis sadipscing scriptorem sea ad
            </div>

            <p>Illum equidem cu ius. An alienum signiferumque usu, ad dicunt adipiscing nam, debet probatus nam ne. Eu rationibus dissentias quo, quo malis iuvaret cu, usu ex partem maluisset. Pri amet ponderum ut.<br>
            Quod expetendis ei eos. In consul aliquid partiendo sit, labores scriptorem ex est. Cum ut invidunt incorrupte definitionem, id qui blandit omittantur. In idque vocent nostrud per, et dolor iudico vel, mea altera abhorreant et. Vim viris interpretaris ea, eos cu iusto prompta. Id nec utinam diceret laboramus.</p>
            <p>Quo ea unum consequuntur, verear propriae scaevola ei vim, cu mei omnes essent. Ne vero aliquam scripserit mei. Fierent comprehensam ne sed, scaevola erroribus eu eos. At suscipit iracundia pri, ei eos perfecto conclusionemque, alii essent detracto at vis. In nostrum constituam usu, mea altera salutatus definitiones et. Vel errem graeco intellegam at.
            Utroque meliore deseruisse an quo, ne qui decore aliquam sententiae. Id nam ipsum elitr necessitatibus. Eos id minim vivendo. Cu magna iusto paulo pri. Ius quod omnium corrumpit cu, nam stet mundi definitionem et. Oratio necessitatibus per no, in qui virtute iudicabit, molestie copiosae id per.</p>

            <div class="highlight">
                <div class="text">
                    This is a quote. Possim probatus mei ne, at mel falli semper vivendo. Eam ut autem saperet maiorum, et incorrupte referrentur mei, usu te adolescens.
                </div>
            </div>
            
            <p>Vocent theophrastus cum ea, an pro duis dignissim hendrerit. Ius ut velit dissentias, at probo nemore laoreet his. An vis copiosae efficiendi. At propriae singulis atomorum duo. Qui et nihil mentitum, mel quod sapientem splendide ne. Mea ignota vocibus persequeris ad.</p>
            <p>Choro utroque invenire ex pro, ei mea nostro deseruisse. Possim probatus mei ne, at mel falli semper vivendo. Eam ut autem saperet maiorum, et incorrupte referrentur mei, usu te adolescens delicatissimi. Indoctum salutandi theophrastus ei eam, sea timeam viderer epicurei ut. Molestiae argumentum cu vim, cu diceret honestatis mea.
            Per aeque dolorem omittantur no, ea cibo oratio cum, eos no modo oportere. Usu no propriae erroribus reformidans, deserunt oportere imperdiet cu vis, per ad ipsum mentitum. Mea et nisl ubique aliquando. Id iudico nostro est, cu pri patrioque necessitatibus. Vis te idque habemus.</p>
            <p>Eirmod ponderum eu quo, te vis summo interesset reprehendunt, ea detraxit perfecto vix. Per cu mandamus comprehensam, mel ad populo audiam verear, ex sed liber tantas. Libris audire id duo, omittam ponderum ius at. Ei delenit debitis duo, eu vis tritani scaevola. Cu case malorum gloriatur pro.</p>

        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.content{
    width: 85%;
    margin: -16rem auto 0 auto;
    background-color: white;
    border-radius: 5px;
    color: var(--accentColor);
    position: relative;
} 



/* Styling the author area */
.author .author-img  {
    background-color: white;
    border-radius: 50%;
    padding: 0.3rem;
    position: absolute;
    top: 0;
    right: 4%;
    margin-top: -5rem;
}

.author .details{
    position: absolute;
    top: 25%;
    right: 0%;
    transform: rotate(-90deg);
    font-size: 1.2rem;
    font-style: italic;
}

.author .details span{
    color: var(--hoverColor);
}

.author .social-handles{
    position: absolute;
    top: 44%;
    right: 7%;
    display: flex;
    flex-direction: column;
    color: rgba(0,0,0,0.2)
}

.author .social-handles i{
    font-size: 2.5rem;
    margin-bottom: 2rem;
    cursor: pointer;
}

.author .social-handles i:hover{
    color: var(--hoverColor);
}



/* Styling the header and content */
.container{
    width: 68%;
    margin: 0 auto;
    padding: 8rem 0;

}

.container .header{
   font-size: 2.5rem; 
   text-align: center;
   margin-bottom: 6rem;
   font-weight: 300;
}

.container p {
    font-size: 1.4rem;
    line-height: 1.8;
   font-weight: 400;

}

.container .highlight{
    margin: 5rem 0;
    border-top: 2px solid rgba(0,0,0,0.12);
    border-bottom: 2px solid rgba(0,0,0,0.12);
    padding: 3rem 0;
}

.container .highlight .text{
    width:65%; 
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;
}


</style>