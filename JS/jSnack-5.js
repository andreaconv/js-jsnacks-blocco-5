/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const biciclette = [
  {
    name: "Bianchi",
    peso: generateRandomNumber()
  },
  {
    name: "Atala",
    peso: generateRandomNumber()
  },
  {
    name: "Olmo",
    peso: generateRandomNumber()
  },
  {
    name: "Casati",
    peso: generateRandomNumber()
  },
  {
    name: "Colnago",
    peso: generateRandomNumber()
  },
  {
    name: "Bottecchia",
    peso: generateRandomNumber()
  },
  {
    name: "Cinelli",
    peso: generateRandomNumber()
  },
  {
    name: "Pistidda",
    peso: generateRandomNumber()
  }
];
console.log(biciclette)


//TODO: ciclo che cerca la bici col peso minore

const biciMinore = biciclette.reduce((min, max) => {
  return (min.peso < max.peso) ? min : max;
})

const { peso, name } = biciMinore;
console.log(`La bicicletta ${name} è la più leggera con un peso di ${peso} gr`)

//---------FUNCTIONS------------

function generateRandomNumber() {
  return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}
