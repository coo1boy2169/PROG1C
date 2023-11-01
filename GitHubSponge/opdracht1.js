function zin(deHeleZin) {

    let newzin = ""

    for (let index = 0; index < deHeleZin.length; index++) {
        let element = deHeleZin[index];


        if ( 1 === getRandomInt()) {
            element = element.toUpperCase()

        }
        newzin += element
    }
    return newzin;

}

function getRandomInt() {
    return Math.floor(Math.random() * 2);
}

console.log(zin("ik wil kip"))     