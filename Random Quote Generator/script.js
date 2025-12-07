// Array of 20 random coding-related quotes
const codingQuotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "Java is to JavaScript what car is to Carpet.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Fix the cause, not the symptom.",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it first has to be usable.",
    "Make it work, make it right, make it fast.",
    "The best error message is the one that never shows up.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The most important property of a program is whether it accomplishes the intention of its user.",
    "The cleaner the code, the easier it is to maintain.",
    "You are the programmer and the architect of your code.",
    "Sometimes it's better to leave things as they are, rather than trying to improve what doesn't need improving.",
    "Programming is a skill best acquired by practice and example rather than from books.",
    "Good code is its own best documentation."
];
let randQ = document.querySelector('.js-random-quote')
function displayQuoute() {
    const numberOfQuerts = codingQuotes.length; 
    console.log(numberOfQuerts)

    let randomQuote = Math.floor(Math.random() * numberOfQuerts);
    let x = codingQuotes[randomQuote]
    document.querySelector('.js-random-quote').innerHTML = `${x}`
}
