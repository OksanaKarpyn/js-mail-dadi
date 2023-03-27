/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// prendo elem dal html
let form = document.querySelector('.form');
let buttonContainer = document.querySelector('.btn-control');

let arrayEmail = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com',
    'email4@gmail.com',
    'email5@gmail.com'
];



document.querySelector('.btn').addEventListener('click',

    function arrayFunction() {
        let input = document.querySelector('#email').value;
        let email = false;
        for (let i = 0; i < arrayEmail.length; i++) {
            console.log(arrayEmail[i]);

            if (input == arrayEmail[i]) {
                email = true;

                break;
            }


        }
        if (email) {
            buttonContainer.innerHTML += `${input} email corretta `;
            buttonContainer.style.color = 'green';
        }else{
            buttonContainer.innerHTML += `${input} email non corretta `;
            buttonContainer.style.color = 'red';

        }
    });