console.log ("Mijn naam is olgun hristov")
var readlineSync = require('readline-sync');

var naam = readlineSync.question("hoe heet je?");

console.log( 'Hallo\n' + naam );
console.log ("Ik heb een quizz gemaakt om mij better te leren kennen succes!!!")


var readlineSync = require('readline-sync');
  question = ['turkije', 'nederland', 'bulgerijen', 'servie', 'Macadonie'];
  index = readlineSync.keyInSelect(question , 'Waar ben ik geboren?');
console.log(' Had je Bulgerijen dan heb je gelijk anders FOUTTT!!!.');

 var readlineSync = require('readline-sync');
  question = ['15', '16', '69', '18', '14'];
  index = readlineSync.keyInSelect(question , 'Hoe oud ben ik?');
console.log(' Had je 15 dan heb je gelijk anders FOUTTT!!!.');

var readlineSync = require('readline-sync');
question = [' voetball', 'basketball' , 'Volleyball' , 'ballet' , 'kick-box'];
index = readlineSync.keyInSelect(question , 'Wat voor sport doe ik?!?');
console.log( ' Had je volleyball dan heb je gelijk anders FOUTTT!!!. leuke feit ik moest 2 jaar gaan dansen en daat bij moest ik ook een klein beetje balet kunnen');


var readlineSync = require('readline-sync');
question = ['ik wil niks met programeren doen', 'Game dev worden', 'Web sites maken', 'Voor NASA werken',  'eigen bedrijf'];
index = readlineSync.keyInSelect(question , 'Wat wil ik later voor werk doen ?!?');
console.log(' Had je voor NASA werken dan heb je gelijk anders FOUTTT!!!. Maar vroeger wouw ik wel kok worden');

var readlineSync = require('readline-sync');
question = ['JA', "NEE" ];
index = readlineSync.keyInSelect(question , 'Heb ik een huis dier?!?');
console.log( 'De antw is JA. ik heb een hond en het is een Yorkie.');

console.log('Now ik hoop dat je me better hebt leren kennen en dat je me quizz leuk vond. BEDANKT VOOR HER SPELEN!!!');