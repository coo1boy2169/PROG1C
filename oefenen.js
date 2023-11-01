console.log ("Mijn naam is olgun hristov")
var readlineSync = require('readline-sync');

var naam = readlineSync.question("hoe heet je?");

console.log ("Ik heb een quizz gemaakt om mij better te leren kennen succes!!!")



let antw = 'bulgerijen';
 question = ['turkije', 'nederland', 'bulgerijen', 'servie', 'Macadonie'];

  index = readlineSync.keyInSelect(question , 'Waar ben ik geboren?');
  console.log ('jouw antword was ' + question[index]  );
 
  if ( antw != question[index] ) {
    console.log('het is niet goed  ?' )


    antw = "ja",  "nee"
    question = [ "ja","nee"]
    index = readlineSync.keyInSelect(question , 'wil je weer proberen?');
  }

    else if (antw === "ja" || "JA"){
        index = readlineSync.keyInSelect(question , 'Waar ben ik geboren?');
        
    }

    else if (antw != "nee" || "NEE"){

    }

   else (antw === question[index] ) 
    console.log("goed gedaan het is goed");
  
  
  
  
  
  antw= '15';  
 question = ['15', '16', '69', '18', '14'];
  index = readlineSync.keyInSelect(question , 'Hoe oud ben ik?');
  console.log ('jouw antword was' + question[index]  );

  if ( antw === question[index] ) {
    console.log('het is goed');
  } else {
    console.log('het is fout');
  }
