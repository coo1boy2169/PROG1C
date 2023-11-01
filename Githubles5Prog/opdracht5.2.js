var readlineSync=require("readline-sync")//import the library
//pak random nummer, dit is het einddoel

var randomNummer = (Math.ceil(Math.random()*100) )


//laat de speler raden
var Zeggen= readlineSync.question("Raad het nummer 1-100!")

//check of zeggen gelijk is aan randomnumm

//zo ja => gefeliciteerd
//zo nee => overnieuw

while(Zeggen != randomNummer )
{
console.log("sorry het is FOUT")
Zeggen= readlineSync.question("Raad het nummer 1-100!")
}
if (Zeggen === randomNummer)
{
  console.log ("Het is GOED!!!")
}



    
