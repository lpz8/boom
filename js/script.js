let randomNumber;
let countdown;

function startGame() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    countdown = 5;
    document.getElementById('result').innerHTML = '';
    document.getElementById('countdown').innerHTML = `Cuenta atrás: ${countdown} segundos`;

    let timer = setInterval(() => {
        countdown--;
        document.getElementById('countdown').innerHTML = `Cuenta atrás: ${countdown} segundos`;
        if (countdown <= 0) {
            clearInterval(timer);
            checkNumber();
        }
    }, 1000);
}

function checkNumber() {
    let userInput = document.getElementById('userInput').value;
    if (userInput == randomNumber) {
        document.getElementById('result').innerHTML = `¡Enhorabuena, has salvado el mundo! 😊<br>Tu número ${userInput} es el mismo que el número ${randomNumber}`;
    } else {
        document.getElementById('result').innerHTML = `¡La bomba ha estallado! 😞<br>Tu número ${userInput} no es el mismo que el número ${randomNumber}`;
    }
}

function reiniciarJuego() {
    document.getElementById('userInput').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('countdown').innerHTML = '';
    startGame();
}


startGame();


document.getElementById('userInput').addEventListener('change', checkNumber);


document.getElementById('restart').addEventListener('click', reiniciarJuego);