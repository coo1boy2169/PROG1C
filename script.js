const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startVerhaal() {
  console.log("Welkom bij het keuzeverhaal!");
  console.log("Je bevindt je op een kruispunt in een mysterieus bos.");

  rl.question("Wat wil je doen? (Typ 'links' of 'rechts'): ", (antwoord) => {
    if (antwoord.toLowerCase() === 'links') {
      console.log("Je hebt het linkerpad gekozen.");
      padLinks();
    } else if (antwoord.toLowerCase() === 'rechts') {
      console.log("Je hebt het rechterpad gekozen.");
      padRechts();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      startVerhaal();
    }
  });
}

function padLinks() {
  console.log("Je komt bij een rivier en moet beslissen hoe je verder wilt gaan.");

  rl.question("Wil je de rivier oversteken of de rivier volgen? (Typ 'oversteken' of 'volgen'): ", (antwoord) => {
    if (antwoord.toLowerCase() === 'oversteken') {
      console.log("Je steekt de rivier over en komt aan bij een grot.");
      grotVerkennen();
    } else if (antwoord.toLowerCase() === 'volgen') {
      console.log("Je volgt de rivier en ontdekt een verborgen schat. Gefeliciteerd!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      padLinks();
    }
  });
}

function padRechts() {
  console.log("Je ziet een oude brug voor je. Wat wil je doen?");

  rl.question("Wil je over de brug lopen of de brug onderzoeken? (Typ 'lopen' of 'onderzoeken'): ", (antwoord) => {
    if (antwoord.toLowerCase() === 'lopen') {
      console.log("Je loopt over de oude brug en komt bij een betoverd meer.");
      meerVerkennen();
    } else if (antwoord.toLowerCase() === 'onderzoeken') {
      console.log("Je onderzoekt de brug en vindt een oude kaart met aanwijzingen.");
      kaartVolgen();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      padRechts();
    }
  });
}

function grotVerkennen() {
  console.log("Je bent bij de ingang van de grot. Wat wil je doen?");

  rl.question("Wil je de grot verkennen of terugkeren? (Typ 'verkennen' of 'terugkeren'): ", (antwoord) => {
    if (antwoord.toLowerCase() === 'verkennen') {
      console.log("Je verkent de grot en vindt oude artefacten.");
      rl.close();
    } else if (antwoord.toLowerCase() === 'terugkeren') {
      console.log("Je keert terug naar het kruispunt in het bos.");
      startVerhaal();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      grotVerkennen();
    }
  });
}

function meerVerkennen() {
  console.log("Je staat aan de oever van het betoverde meer. Wat wil je doen?");

  rl.question("Wil je een duik nemen in het meer of de oever van het meer verkennen? (Typ 'duik' of 'verkennen'): ", (antwoord) => {
    if (antwoord.toLowerCase() === 'duik') {
      console.log("Je neemt een duik in het meer en wordt omgeven door magie.");
      rl.close();
    } else if (antwoord.toLowerCase() === 'verkennen') {
      console.log("Je verkent de oever van het meer en vindt een kostbare schat. Gefeliciteerd!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      meerVerkennen();
    }
  });
}

function kaartVolgen() {
  console.log("Je volgt de aanwijzingen op de kaart en begint een avontuurlijke reis.");

  rl.close();
}

// Start het verhaal
startVerhaal()