
var readlineSync = require('readline-sync');

var leeftijd = readlineSync.question("hoe oud ben je ?");

if( leeftijd<21 ){
    console.log ('je mag er niet in je bent te jong');
}
else{


        
        readlineSync = require('readline-sync');

        idvraag = readlineSync.question("mag ik heel even je ID zien ?");
        if (idvraag === "ja" || idvraag ==="zekker"|| idvraag ==="Ja"){ 
            console.log ("Oke je mag naar binnen")
        
        }
else {
    console.log ("Dan mag je niet naar binnen")
}}
