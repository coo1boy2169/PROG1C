// dit rekent uit hoevel dmg je pakt 

function dmg() {
    let dmgrek = Math.floor(Math.random() * 25)
    return dmgrek
}

function dmguit() {
    let dmgrek = Math.floor(Math.random() * 25)
    return dmgrek
}


let enemy = 50

let dmggg = dmguit()


let dmgg = dmg()

const readlineSync = require("readline-sync")

console.log(`er komt een enemy wat doe je !?!`)
//enemy hp bijhouden
while (true) {
    // vraagt wat je wilt doen
    question = ["Vechten", "Rennen"];
    index = readlineSync.keyInSelect(question, 'Welke kies je ?!?  ');
    console.log('jouw antword was ' + question[index]);


    if (question[index] === "Vechten") {
        console.log(`je geeft hem een hit met je zwaart en je geeft hem ${dmgg} dmg `)
        enemy -= dmgg
        console.log(`ememy heeft nog ${enemy} hp over`)
    
// hier rekent hij uit hoeveel 
        if (enemy <= 0) {
            console.log(`monster dood goed gedaan`)
        break;
        }

        

    }
    else {
        (question[index] === "Rennen")
        console.log(`je rent weg maar dat is niet goed gegaan hij trapt jouw en geeft je ${dmggg} dmg `)
        break;
    }

    console.log("hij is niet dood ")
    //als dood feliciteer of gameover => if
}

//question = ["Doorblijven" , "Rennen"];
//  index = readlineSync.keyInSelect(question , 'Welke kies je ?!?  ');
//  console.log ('jouw antword was ' + question[index]  );
//
//  if (question[index] === "Doorblijven"){
//    console.log(`je gaat door vechten en je geeft hem een smack op zijn gezicht en dat doet ${dmgg} en hij gaat dood  `)
//  }
//  else { (question[index] === "Rennen") 
//    console.log ( `je gaat weg rennen en je ontsnapt maar je krijgt wel ${dmggg} dmg omdat je weg rende`)  
//}



console.log(`GG Wana play again !?!?`)

question = ["play agian"];
index = readlineSync.keyInSelect(question, 'Welke kies je ?!?  ');
console.log('jouw antword was ' + question[index]);

while (question[index] === "play again") {
    console.log(index = readlineSync.keyInSelect(question, 'Welke kies je ?!?  ')
        ('jouw antword was ' + question[index]));
}
if (question[index] != "play again") {
    console.log(` Game over  `)
}