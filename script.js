// Oppgave 1
var tall1 = 8;
var tall2 = 4;

console.log(tall1, "+", tall2, "=", tall1 + tall2);
console.log(tall1, "-", tall2, "=", tall1 - tall2);
console.log(tall1, "*", tall2, "=", tall1 * tall2);
console.log(tall1, "/", tall2, "=", tall1 / tall2);

// Oppgave 2 
var lengde = 6;
var bredde = 8;

console.log(lengde, "*", bredde, "=", lengde * bredde);

// Oppgave 3
prompt("Skriv inn navnet ditt:")
var alder = prompt("Skriv inn alderen din:")

console.log("Det er", 100 - alder, "år", "til du er 100 år gammel.");

// Oppgave 4
var tall = 0
if (tall > 0) {
  console.log("Tall", tall, "er et positivt tall");
} else if (tall < 0) {
  console.log("Tall", tall, "er et negativt tall");
} else {
  console.log("Tall", tall, "er 0 (null)");
}

// Oppgave 5
var brukerTall = prompt("Skriv inn et tall:")
sum = 0;
for (let i = 0; i < brukerTall; i++) {
  sum = sum + i;
}
console.log(sum);

// Oppgave 6
var navn1 = prompt("Skriv inn et navn:")
var navn2 = prompt("Skriv inn et navn:")
var navn3 = prompt("Skriv inn et navn:")
var navn4 = prompt("Skriv inn et navn:")
var navn5 = prompt("Skriv inn et navn:")

var thisList = [];
thisList.push(navn1)
thisList.push(navn2)
thisList.push(navn3)
thisList.push(navn4)
thisList.push(navn5)

console.log(thisList);

// Oppgave 7
var thisList2 = []

for (let i = 0; i < 5; i++) {
  etNavn = prompt("Skriv inn et navn:")
  thisList2.push(etNavn)
}
console.log(thisList2);

// Oppgave 8
var functionList = []

for (let i = 0; i < 6; i++) {
  funcTall = Number(prompt("Skriv inn et tall:"))
  functionList.push(funcTall)
  functionList.sort()
}
console.log(functionList);
let summ = 0;
for (const element of functionList) {
  summ = summ + element
  
}
console.log(summ/(functionList.length));

// Oppgave 9
var snuList = []

for (let i = 0; i < 6; i++) {
  snuTall = prompt("Skriv inn et tall:")
  snuList.push(snuTall)
  }
  snuList.reverse()
console.log(snuList);
