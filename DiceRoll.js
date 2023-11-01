function RollDice (){
    let getal= Math.ceil(Math.random() * 6) ;
    return getal;

}

function RollStats(){
    let d1= RollDice()
    let d2= RollDice()
    let d3= RollDice()
    let d4= RollDice()
    console.log (d1, d2, d3, d4)

    let array = [d1 ,d2 ,d3 ,d4]
    array.sort()   
    return array[1] + array[2] + array [3]
}

console.log("STR", RollStats());
console.log("DEX", RollStats());
console.log("CON", RollStats());
console.log("INT", RollStats());
console.log("WIS", RollStats());
console.log("CHA", RollStats());
