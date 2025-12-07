let points = 0;
let attempt = 0;
const maxAttempts = 5;

function startGame() {
    points = 0; // Reset points
    attempt = 0; // Reset attempts
    document.querySelector('.results').innerHTML = ''; // Clear previous results
    document.querySelector('.gameOver').innerHTML = ''; // Clear game over message
    document.addEventListener('keydown', handleRandomKey); // Start listening for key events
}

function handleRandomKey(event) {
    if (event.key === 'Enter' && attempt < maxAttempts) {
        checkNumber();
    }
}

function checkNumber() {
    const guessNumber = document.querySelector('.inputElement');
    let guessedNumber = Number(guessNumber.value);
    let randomNumber = Math.floor(Math.random() * 50);
    console.log(randomNumber); 
    

    let theDifference = Math.abs(guessedNumber - randomNumber);

    if (theDifference === 0) {
        document.querySelector('.results').innerHTML = `You will get 5 points`;
        points += 5;
    } else if (theDifference === 1) {
        document.querySelector('.results').innerHTML = `You will get 4 points`;
        points += 4;
    } else if (theDifference === 2) {
        document.querySelector('.results').innerHTML = `You will get 3 points`;
        points += 3;
    } else if (theDifference === 3) {
        document.querySelector('.results').innerHTML = `You will get 2 points`;
        points += 2;
    } else if (theDifference === 4) {
        document.querySelector('.results').innerHTML = `You will get 1 point`;
        points += 1;
    } else {
        document.querySelector('.results').innerHTML = `You will get 0 points`;
    }

    attempt++;
    if (attempt >= maxAttempts) {
        document.querySelector('.gameOver').innerHTML = `Game over! YourPoints are ${points}`;
        document.removeEventListener('keydown', handleRandomKey); // Stop listening
    }
}

// Call startGame to begin playing
startGame();

