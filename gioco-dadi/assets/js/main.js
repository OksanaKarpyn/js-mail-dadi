/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */










// function random
let number = document.querySelector('#number');
function random(min, max) {
    return Math.floor(Math.random() * max) + min;
    
}
let giocatore = random(1, 6);
let computer = random(1, 6);
// console.log(giocatore > computer ? 'vincitore e il giocatore' : 'vincitore e il  computer');

if(giocatore > computer){
    number.innerHTML=`${random}`;
}
else{
    number.innerHTML=`${random}`;
}
console.log();