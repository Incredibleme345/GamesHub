const apiUrl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

let questionsList = [];
let currentIndex = 0;
let selectedText = "";
let userScore = 0;

function option(buttonId) {
    resetOptionStyles();

    const selectedButton = document.getElementById(buttonId);
    selectedText = selectedButton.innerHTML;

    selectedButton.style.backgroundColor = "#444";
    selectedButton.style.color = "white";
}

fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        questionsList = data.results;
        displayQuestion();

        const nextButton = document.getElementById("next");
        nextButton.addEventListener("click", handleNext);
    });

function handleNext() {
    if (selectedText === "") {
        alert("Please choose an answer first!");
        return;
    }

    const correctAnswer = questionsList[currentIndex].correct_answer;
    markAnswers(correctAnswer);

    if (selectedText === correctAnswer) {
        userScore++;
    }

    setTimeout(() => {
        currentIndex++;

        if (currentIndex >= questionsList.length) {
            showScoreScreen();
        } else {
            selectedText = "";
            resetOptionStyles();
            displayQuestion();
        }
    }, 1200);
}

function displayQuestion() {
    const pageText = document.getElementById("pageNumeber");
    pageText.innerHTML = (currentIndex + 1) + " / " + questionsList.length;

    const questionData = questionsList[currentIndex];

    const allAnswers = [questionData.correct_answer, ...questionData.incorrect_answers];
    const randomOrder = shuffleAnswers(allAnswers);

    document.getElementById("question").innerHTML = questionData.question;
    document.getElementById("firstOption").innerHTML = randomOrder[0];
    document.getElementById("secondOption").innerHTML = randomOrder[1];
    document.getElementById("thirdOption").innerHTML = randomOrder[2];
    document.getElementById("forthOption").innerHTML = randomOrder[3];
}

function markAnswers(correctAnswer) {
    const buttonIds = ["firstOption", "secondOption", "thirdOption", "forthOption"];

    buttonIds.forEach(id => {
        const btn = document.getElementById(id);

        if (btn.innerHTML === correctAnswer) {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        } else if (btn.innerHTML === selectedText) {
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
    });
}

function shuffleAnswers(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
}

function resetOptionStyles() {
    const ids = ["firstOption", "secondOption", "thirdOption", "forthOption"];
    ids.forEach(id => {
        const btn = document.getElementById(id);
        btn.style.backgroundColor = "";
        btn.style.color = "";
    });
}

function showScoreScreen() {
    document.getElementById("question").innerHTML = "Quiz Finished!";
    document.getElementById("firstOption").innerHTML = "";
    document.getElementById("secondOption").innerHTML = "";
    document.getElementById("thirdOption").innerHTML = "";
    document.getElementById("forthOption").innerHTML = "";

    document.getElementById("pageNumeber").innerHTML = "";

    const nextButton = document.getElementById("next");
    nextButton.innerHTML = "Your Score: " + userScore + " / " + questionsList.length;
    nextButton.disabled = true;
}
