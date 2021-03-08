// É O NON É PALINDROMA (una parola PALINDROMA e' una parola che puo essere letta da entrambe le parti)
// faccio inserire la parola all'utente
var userWord = prompt("Please enter one word, I'll check if it'a a palindrome")
// controllo se la parola é PALINDROMA
function isPalindrome(word) {
  // inverto la parola inserita dall'utente
  var reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
  // ritorno vero o falso se la parola é palidroma o meno
  if (word == reversedWord) {
    return true;
  }
  return false
}
// riporto il risultato all'utente con un messaggio
if (isPalindrome(userWord)) {
  alert("It's a palindrome!!!!!!");
}else{
  alert(" NOT a palindrome!");
}
