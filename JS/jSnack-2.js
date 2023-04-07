const studenti = [
  {
    firstname: "Tullio",
    lastname: "Miguel",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Topolino",
    lastname: "Minnie",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Clark",
    lastname: "Kent",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Mirko",
    lastname: "Licia",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Pali",
    lastname: "Dispari",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Capsula",
    lastname: "Nucleo",
    matricola: randomNumber5(),
    voti: votiRandom
  },
  {
    firstname: "Mila",
    lastname: "Shiro",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Bella",
    lastname: "Bestia",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Pikachu",
    lastname: "Raichu",
    matricola: randomNumber5(),
    voti: votiRandom()
  },
  {
    firstname: "Arsenio",
    lastname: "Lupin",
    matricola: randomNumber5(),
    voti: votiRandom()
  }
];
console.log("Array studenti", studenti)

//TODO: trovare il modo per prendere l'array dei voti di ogni singolo studente
//TODO: prendere gli elementi di questo array in modo da sommarli fra di loro e dividerli per quanti sono per avere come risultato la MEDIA dei voti
//TODO: creare un elenco array nuovo che deve contenere gli studenti ma in questo il nome e cognome sono uniti col cognome per primo e al posto dei voti c'è solo la media dei voti

const studentiNew = studenti.map(studente => {
  const obj = {
    nomeCompleto: `${studente.firstname} ${studente.lastname}`,
    matricola: studente.matricola,
    mediaVoto: mediaVoti(studente)
  };
  return obj;
});

console.log("studentiNew", studentiNew)

//------------------------------FUNCTIONS----------------------------
//TODO: creare una funzione che genera la media dei voti

function mediaVoti(studente) {
  let somma = 0;
  const { voti } = studente;
  for (let i = 0; i < voti.length; i++){
    somma += voti [i];
  }
  const media = somma / studente.voti.length;
  return media;
}

//genera 1 numero random di 5 cifre
function randomNumber5() {
  return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
}

//genera 5 numeri random
function votiRandom() {
  let voti = []
  for (let i = 0; i < 5; i++) {
    const numeroRandom = generateRandomNumber(voti, 18, 30);
    voti.push(numeroRandom);
  }
  return voti;
}


/**
 *  questa funzione ti genera un numero random, la lista serve nel caso in cui si voglia generare più di un numero ed evitare che questi siano uguali fra di loro;
 * @param {lista} arrList 
 * @param {numero minimo} min 
 * @param {numero massimo} max 
 * @returns numero random
 */

function generateRandomNumber(arrList, min, max) {

  let randomNumber;
  let isValidNumber = false;

  while (!isValidNumber) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (!arrList.includes(randomNumber)) {
      isValidNumber = true;
    }
  }
  return randomNumber;
}