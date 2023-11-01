function leeftijd(Jaar , Maand ,Dag){
        console.log( "geboortjeJaar " +Jaar)
        console.log ("geboorteMaand " +Maand )
        console.log    ("geboorteDa " +Dag)
        
        let huidigeTijd = new Date();
        let geboorteDatum  = new Date( Jaar , Maand , Dag); 
        
        let miliseconds = huidigeTijd - geboorteDatum;

        return Math.floor(miliseconds / (1000  * 60 * 60 *24 *365))
}


var mijnJaren = leeftijd(2007 , 11 ,21) 
console.log ( mijnJaren) 

