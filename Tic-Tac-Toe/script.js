const red = 'rgba(255, 255, 255, 1)ff';
const blue = '#ffffffff';
let isRed = true;
let player = '';
let check;    
let loopList;
let listRed = []; // Array to store Red player moves
let listBlue = []; // Array to store Blue player moves
let gameOver = false; // Game over flag
let blueScore = 0;
let redScore = 0;
//const popupBox = document.getElementById('popUpBox')

const mainContainer = document.getElementById('mainBox')
console.log(mainContainer)

function pressed(cellId) {
    if (gameOver) {
        console.log('hello world')
        return; // Prevent moves if the game is over

    }

    const cell = document.getElementById(cellId);
    if (cell.innerHTML !== '') {
        return; // Ignore if the cell is already clicked
    }


    const mainContainer = document.getElementById('mainContainer')
    // Mark the cell based on current player
    if (isRed) {
        cell.innerHTML = 'X';
        mainContainer.style.backgroundColor = "#eb3e3eff";
        player = 'playRed';
        listRed.push(Number(cellId)); // Push the cell ID as a number to listRed
    } else {
        cell.innerHTML = 'O';
        mainContainer.style.backgroundColor = "#5586f1ff";
        player = 'playBlue';
        listBlue.push(Number(cellId)); // Push the cell ID as a number to listBlue
    }

    // Switch player
    isRed = !isRed;

    // Check game logic after each move
    gameLogic(); 

}

// Function to check for a winning combination
function gameLogic() {
    // Sort the lists of clicked cells
    listRed.sort((a, b) => a - b);
    listBlue.sort((a, b) => a - b);

    if (player === 'playRed') {
        loopList = listRed;
    } else {
        loopList = listBlue;
    }

    // Check for win conditions (rows, columns, diagonals)
    if (
        (loopList.includes(1) && loopList.includes(2) && loopList.includes(3)) ||
        (loopList.includes(4) && loopList.includes(5) && loopList.includes(6)) ||
        (loopList.includes(7) && loopList.includes(8) && loopList.includes(9)) ||
        (loopList.includes(1) && loopList.includes(4) && loopList.includes(7)) ||
        (loopList.includes(2) && loopList.includes(5) && loopList.includes(8)) ||
        (loopList.includes(3) && loopList.includes(6) && loopList.includes(9)) ||
        (loopList.includes(1) && loopList.includes(5) && loopList.includes(9)) ||
        (loopList.includes(3) && loopList.includes(5) && loopList.includes(7))
        
    ) {
        // Announce the winner
        document.getElementById('winner').innerHTML = `${player === 'playRed' ? 'Red' : 'Blue'} wins!🎉🎉🎉`;
        // 
        //popupBox.style.display = 'block'
        function box() {
            const popUpbox = document.getElementById('popUpbox');
            if (player === 'playRed' || player === 'playBlue') {
                if (player == 'playBlue') {
                    blueScore += 1;
                    console.log('blue color')
                    document.getElementById('scoreForBlue').innerHTML = `Blue: ${blueScore}`;
                } if (player === 'playRed') {
                    redScore += 1;
                    console.log('red color')
                    console.log(redScore)
                    document.getElementById('scoreForRed').innerHTML = `Red: ${redScore}`;
                }
                setTimeout(() => {
                    popUpbox.style.display = 'block'
                }, 400)

            } 


        }
        box();
        // updateScore();

        gameOver = true; // Set game over flag
        return player;
    }

    // Check for draw (all cells filled and no winner)
    if (listRed.length + listBlue.length === 9 && !gameOver) {
        document.getElementById('winner').innerHTML = 'It\'s a draw!';
        setTimeout(() => {
            popUpbox.style.display = 'block'
            gameOver = true;
        }, 1000)

    }
    console.log(player)
        return player;
}

// Function to restart the game
function restartGame() {
    // Clear the board (assuming IDs are 1–9)
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).textContent = '';
    }

    // Reset variables
    isRed = true;
    gameOver = false;
    listRed = [];
    listBlue = [];
    // document.body.style.backgroundColor = red;

}

function updateScore() {
    if (player == 'playBlue') {
        blueScore += 1;
        document.getElementById('scoreForBlue').innerHTML = `Blue: ${blueScore}`;
    } else if (player == 'playRed') {
        redScore += 1;
        document.getElementById('scoreForRed').innnerHTML = `Red: ${redScore}`;
    }
}

function optionButton(choice) {
    if (choice === 'play') {
        restartGame();
    }
    if (choice === 'quit') {
        window.location.href = "../main-folder/main-page.html"
    }
}

function playAgain() {
    setTimeout(() => {
        popUpbox.style.display = 'none'
        restartGame();
    }, 700)

}




gameLogic();




