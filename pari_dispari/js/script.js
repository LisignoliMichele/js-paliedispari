// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var userAnswer = prompt("Please chose: write even or odd")
var userNumber = parseInt(prompt("Please enter one number from 1 to 5"));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function cpuNumberRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Sommiamo i due numeri
var sum = cpuNumberRandom(1, 5) + userNumber;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEvenOrFalse(number) {
  if (number % 2 == 0){
    return "even"
  }
  return "odd"
}
// Dichiariamo chi ha vinto.
if(isEvenOrFalse(sum) == userAnswer){
  alert("You're the winner")
}else {
  alert("You lose")
}
