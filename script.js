const questions = [
    {
        question: "Which of the following is a string?",
        answers: ['"Hello World"', "79", "true", "null"],
        correctAnswer: '"Hello World"'
    },
    {
        question: "which is not a primitive data type?",
        answers: ["boolean", "bigint", "number", "string"],
        correctAnswer: "bigint"
    },
    {
        question: "What is used to check if two things are both true?",
        answers: ["||", "!!", "&&", "**"],
        correctAnswer: "&&",
    },
    {
        question: "What attribute does an image need to be accesible?",
        answers: ["img", "href", "src", "alt"],
        correctAnswer: "alt",
    },
    {
        question: "Which type of data is true of false only?",
        answers: ["bigint", "number", "boolean", "string"],
        correctAnswer: "boolean",
    },
    {
        question: "What adds 10px to margin top and bottom only, in CSS",
        answers: ["margin: 10px", "margin: 5px 5px", "padding: 10px 0px", "margin: 10px 0px"],
        correctAnswer: "padding: 10px 0px",
    },
    {
        question: "How do I identify a class called 'container' in CSS?",
        answers: ["#container", ".container", "container;", "*container"],
        correctAnswer: ".container",
    },
    {
        question: "How would I call a function called 'equalityChecker' in my code?",
        answers: ["equalityChecker()", "equalityChecker;", "equalityChecker=", "EQUALITYchecker"],
        correctAnswer: "equalityChecker()",
    },
    {
        question: "What is used to check if one of two values is true?",
        answers: ["&&", "!=", "||", "==="],
        correctAnswer: "||",
    },
    {
        question: "How can you print something from your code to the Console?",
        answers: [".innerHTML", "console.log()", ".textContent", "return"],
        correctAnswer: "console.log()",
    },
    {
        question: "How do you get the first item in an array 'names'?",
        answers: ["array.names.1", "names[0]", "names[1]", ".names[0]"],
        correctAnswer: "b",
    },
    {
        question: "How can you acces any element from document in javascript?",
        answers: ["querySelector()", "querySelectorAll()", "document.querySelectorAll()", "getElementById()"],
        correctAnswer: "document.querySelectorAll()",
    }
]

// variables 
const quizContainer = document.getElementById('quiz')
const questionDiv = document.getElementById('question')
const answerDiv = document.getElementById('choices-div')
const startButton = document.getElementById('start')
const quizTimer = document.getElementById('timer')
const scoreDisplay = document.getElementById('score');
const answerChoices = document.querySelectorAll("choice");

const penalty = 10;

let holdInterval = 0;

// game stats
let score = 0;
let gameTime = 15;
let questionIndex = 0;

let ulCreate = document.createElement('ul');


//FUNCITONS
    


function gameOver(){

    quizContainer.innerHTML = ""
    quizTimer.textContent = "Time's Up!"
    gameTime = 15
    gameOverTxt = document.createElement('h1')
    submit = document.createElement('button')
    initialInput = document.createElement('input')
    initialInput.setAttribute('placeholder', 'enter your initials')

    gameOverTxt.textContent = "GAME OVER!!"
    submit.textContent = "SUBMIT"

    quizContainer.appendChild(gameOverTxt)
    quizContainer.appendChild(initialInput)
    quizContainer.appendChild(submit)

}

function startGame() {

    if (holdInterval === 0) {
        //This is setting the timer
        holdInterval = setInterval(function () {
            gameTime--;
            quizTimer.textContent = `Time: ${gameTime}`;
            scoreDisplay.textContent = score;
            //this is checking the time every time the seconds go down to check to end the game
            if (gameTime <= 0) {
                clearInterval(holdInterval)
                gameOver()
                holdInterval = 0
            }

        }, 1000)
    }
}


function displayQuestions() {
    

    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        const choice = questions[questionIndex].answers[i];

        let choiceButton = document.createElement("button"); 
        quizContainer.appendChild(choiceButton);
        choiceButton.innerHTML = choice;
        

    }
    
}


startButton.addEventListener("click", () => {

 startGame(); displayQuestions();})