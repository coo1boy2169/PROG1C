let readlineSync=require("readline-sync")


let lijst = []


while(true)
{
    
    console.log(`wil je toevoegen of verwijderen`)
    let tv=readlineSync.keyIn('t or v? ', {limit: 'TV'}); 

    if( tv === `t`){
        lijst.push(readlineSync.question(`wat wil je toevoegen`))
        console.log(lijst)
    }
    if ( tv === `v`){
        let weghalen =readlineSync.question(`wat wil je verwijderen`)
        let weg = weghalen.indexOF
        lijst.splice(weghalen)//hier zit een foutje
        console.log(lijst)
        console.log(tv)
    }



}