// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// -------------------SVOLGIMENTO----------------------


// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente =
    {
        nome: "Andrea",
        cognome: "Sergi",
        età: 25
    }
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    console.log(key + ": " + studente[key]);
}

// Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: "Flavio",
        cognome: "Insigne",
        età: 30
    },
    {
        nome: "Pino",
        cognome: "Insegno",
        età: 45
    },
    {
        nome: "Ibra",
        cognome: "Kadabra",
        età: 38
    },
    {
        nome: "Barbara",
        cognome: "D'Urso",
        età: 98
    },
    {
        nome: "Carlo",
        cognome: "Bravo",
        età: 30
    },
]
console.log(studenti);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    var selezione = studenti[i];
    console.log(selezione.nome + " " + selezione.cognome);
}

studenti.nome = prompt("Inserisci il tuo nome");
studenti.cognome = prompt("inserisci il tuo cognome")
studenti.età = parseInt(prompt("inserisci la tua età")); 
console.log(studenti);
