let images = ['😕', '👍', '🤷‍♀️', '😎', '😁', '😭', '🤦‍♀️', '👏', '🤐', '😛'];
let locateCellId = [];
let firstValue;
let secondValue;
let removeFirstValue;
let removeSecondValue;
let imagePair;
let cell;
let countAttempts = 0;
let filledBox = 0;
let shuffledList = shuffle([...images, ...images]);

// Click on a cell
function pressed(cellId) {
    cell = document.getElementById(cellId);
    const cellIndex = Number(cellId);
    const insertImage = shuffledList[cellIndex];
    cell.innerHTML = insertImage;

    locateCellId.push(cellId);

    if (locateCellId[0] == locateCellId[1]) {
        locateCellId.splice(1);
    } else {
        if (locateCellId.length == 2) {
            countAttempts++;
            document.getElementById('attempts').innerHTML = `Attempts : ${countAttempts}`;
            getValues();
            compareValues();
            locateCellId = [];
        }
    }
    gameOver();
}

// Shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get clicked values
function getValues() {
    imagePair = locateCellId;
    firstValue = shuffledList[imagePair[0]];
    secondValue = shuffledList[imagePair[1]];
}

// Compare clicked cells
function compareValues() {
    if (firstValue === secondValue) {
        filledBox++;
    } else {
        setTimeout(() => {
            removeFirstValue = imagePair[0];
            removeSecondValue = imagePair[1];
            document.getElementById(removeFirstValue).innerHTML = '';
            document.getElementById(removeSecondValue).innerHTML = '';
        }, 700);
    }
}

// Check game over
function gameOver() {
    if (filledBox === images.length) {
        document.getElementById('popUpbox').style.display = 'block';
    }
}

// Play again
function playAgain() {
    document.getElementById('popUpbox').style.display = 'none';
    restartGame();
}

// Restart game
function restartGame() {
    const table = document.getElementById("myTable");
    const cells = table.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    locateCellId = [];
    firstValue = null;
    secondValue = null;
    removeFirstValue = null;
    removeSecondValue = null;
    imagePair = [];
    cell = null;
    countAttempts = 0;
    filledBox = 0;

    document.getElementById('attempts').innerHTML = `Attempts : ${countAttempts}`;
    shuffledList = shuffle([...images, ...images]);
}
