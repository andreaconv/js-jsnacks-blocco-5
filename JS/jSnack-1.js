

//array utenti
const utenti = [
  {
    firstname: "Mario",
    lastname: "Rossi",
    age: 70
  },
  {
    firstname: "Ugo",
    lastname: "de Ughi",
    age: 50
  },
  {
    firstname: "Cip",
    lastname: "Ciop",
    age: 6
  },
  {
    firstname: "Bud",
    lastname: "Spencer",
    age: 93
  },
  {
    firstname: "Terence",
    lastname: "Hill",
    age: 84
  },
  {
    firstname: "Franco",
    lastname: "Ciccio",
    age: 47
  },
  {
    firstname: "Holly",
    lastname: "Benji",
    age: 12
  },
  {
    firstname: "Gianni",
    lastname: "Pinotto",
    age: 38
  },
  {
    firstname: "Bugo",
    lastname: "Morgan",
    age: 15
  },
  {
    firstname: "Homer",
    lastname: "Simpson",
    age: 66
  }
]
console.log("utenti", utenti)

const minorenni = utenti.filter(utente => utente.age < 18);
console.warn("minorenni", minorenni)

const senior = utenti.filter(utente => utente.age > 65);
console.warn("senior", senior)

//alternativa
console.log("↓ ciclo direttamente gli utenti senza inserirli in una variante ↓")

for (let i in utenti) {
  const utente = utenti[i];

  if(utente.age < 18){
    console.log("MINORENNE", utente.firstname, utente.lastname, utente.age)
  }else if(utente.age > 64){
    console.log("SENIOR", utente.firstname, utente.lastname, utente.age)
  }
}
