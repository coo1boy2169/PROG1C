

function geschudWoord(woordDatGeschudtMoetWorden){ 
    const characters = woordDatGeschudtMoetWorden.split('');
for (let i = characters.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [characters[i], characters[j]] = [characters[j], characters[i]];
 } const geschudWoord = characters.join('');
   return geschudWoord;
} 


var woord1 = geschudWoord("Boekenkast");
console.log(woord1);

var woord2 = geschudWoord("auto")
console.log(woord2)

var woord3 = geschudWoord("school")
console.log(woord3)
