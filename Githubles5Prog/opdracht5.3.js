var readlineSync=require("readline-sync")

var vragen= readlineSync.question("wil je klikken?")

var nummer= 0
nummer++

while( vragen == "ja")
{
console.log ( nummer++)
 vragen= readlineSync.question("wil je klikken?")

}
if (vragen != "ja"){
    console.log ("Game Over je score was " + nummer)
}