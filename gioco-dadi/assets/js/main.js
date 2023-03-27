/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */










// function random

// function random(min, max) {
//  return Math.floor(Math.random() * max) + min;
// }

// let giocatore = random(1, 6);
// let computer = random(1, 6);
// // console.log(giocatore > computer ? 'vincitore e il giocatore' : 'vincitore e il  computer');

let number = document.querySelector('#number');

function random() {

    let giocatore = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;
    if (giocatore > computer) {
        number.innerHTML = `vincitore è il giocatore con${giocatore} punti`;
    } else {
        number.innerHTML = `vincitore è il computer con${computer} punti`;
    }
}