/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
*/

const squadre = [
  {
    nome: "Atalanta",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Bologna",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Cremonese",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Empoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Fiorentina",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lecce",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Monza",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Salernitana",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Sampdoria",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Sassuolo",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Spezia",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Torino",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Udinese",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Verona",
    puntiFatti: 0,
    falliSubiti: 0
  },
];
console.log("squadre", squadre)

//aggiungo un numero random ai punti e ai falli subiti
squadre.forEach(squadra => {
  squadra.puntiFatti = generateRandomNumber();
  squadra.falliSubiti = generateRandomNumber();
})


//destrutturazione
const squadreNew = squadre.map(team => {
  const { nome, falliSubiti } = team;
  const obj = {
    nome,
    falliSubiti
  }
  return obj;
})

console.log("squadreNew", squadreNew)

//---------FUNCTIONS------------

function generateRandomNumber() {
  return Math.floor(Math.random() * (50 - 1 + 1) + 1);
}
