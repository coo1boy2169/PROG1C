console.log ("Mijn naam is olgun hristov")
var readlineSync = require('readline-sync');

var naam = readlineSync.question("hoe heet je?");

console.log ("Ik heb een quizz gemaakt om mij better te leren kennen succes!!!")



let antw = 'bulgerijen';
 question = ['turkije', 'nederland', 'bulgerijen', 'servie', 'Macadonie'];

  index = readlineSync.keyInSelect(question , 'Waar ben ik geboren?');
  console.log ('jouw antword was ' + question[index]  );
 
  while ( antw != question[index] ) {-
    console.log('het is niet goed gedaan');
    index = readlineSync.keyInSelect(question , 'Waar ben ik geboren?');
    
  } 
   if (antw === question[index] ) {
    console.log("goed gedaan het is goed");
  }
  
    



 antw= '15';  
 question = ['15', '16', '69', '18', '14'];
  index = readlineSync.keyInSelect(question , 'Hoe oud ben ik?');
  console.log ('jouw antword was' + question[index]  );

  if ( antw === question[index] ) {
    console.log('het is goed');
  } else {
    console.log('het is fout');
  }


antw= 'Volleyball';
 question = [' voetball', 'basketball' , 'Volleyball' , 'ballet' , 'kick-box'];
index = readlineSync.keyInSelect(question , 'Wat voor sport doe ik?!?');
console.log ('jouw antword was' + question[index]  );
if ( antw === question[index] ) {
  console.log('het is goed');
} else {
  console.log('het is fout');
}

 antw= 'Voor NASA werken';
question = ['ik wil niks met programeren doen', 'Game dev worden', 'Web sites maken', 'Voor NASA werken',  'eigen bedrijf'];
index = readlineSync.keyInSelect(question , 'Wat wil ik later voor werk doen ?!?');
console.log ('jouw antword was' + question[index]  );
if ( antw === question[index] ) {
  console.log('het is goed');
} else {
  console.log('het is fout');
}

antw = 'JA';
question = ['JA', "NEE" ];
index = readlineSync.keyInSelect(question , 'Heb ik een huis dier?!?');
console.log ('jouw antword was' + question[index]  );
if ( antw === question[index] ) {
  console.log('het is goed');
} else {
  console.log('het is fout');
}

console.log('Now ik hoop dat je me better hebt leren kennen en dat je me quizz leuk vond. BEDANKT VOOR HER SPELEN!!!');