var questions = [
{
    question:  "Which of the following is a string?",
    answers: ['"Hello World"', "79", "true", "null"],
    correctAnswer: '"Hello World"'
},
{ 
    question: "which is not a primitive data type?",
    answers: ["boolean","bigint", "number", "string"],
    correctAnswer: "bigint"   
},
{
    question: "What is used to check if two things are both true?",
    answers: ["||", "!!" , "&&" , "**"],
    correctAnswer: "&&",
},
{
    question: "What attribute does an image need to be accesible?",
    answers: ["img","href","src","alt"],
    correctAnswer: "alt",
},
{
    question: "Which type of data is true of false only?",
    answers: ["bigint",  "number","boolean", "string"],
    correctAnswer: "boolean",
},
{
    question: "What adds 10px to margin top and bottom only, in CSS",
    answers: ["margin: 10px","margin: 5px 5px","padding: 10px 0px","margin: 10px 0px"],
    correctAnswer: "padding: 10px 0px",
},
{
    question: "How do I identify a class called 'container' in CSS?", 
    answers: ["#container",".container", "container;", "*container"],
    correctAnswer: ".container",
},
{
    question: "How would I call a function called 'equalityChecker' in my code?",
    answers:  ["equalityChecker()","equalityChecker;","equalityChecker=","EQUALITYchecker"],
    correctAnswer: "equalityChecker()",
},
{
    question: "What is used to check if one of two values is true?",
    answers: ["&&", "!=", "||", "==="],
    correctAnswer: "||",
},
{
    question: "How can you print something from your code to the Console?", 
    answers: [".innerHTML","console.log()",".textContent","return"],
    correctAnswer: "console.log()",
},
{
    question: "How do you get the first item in an array 'names'?", 
    answers: ["array.names.1", "names[0]", "names[1]",  ".names[0]"],
    correctAnswer: "b",
},
{
    question: "How can you acces any element from document in javascript?",
    answers: ["querySelector()",  "querySelectorAll()", "document.querySelectorAll()", "getElementById()"],
    correctAnswer: "document.querySelectorAll()",
}
]

// variables 
const quizContainer = document.getElementById('quiz') 
const resultDisplay = document.getElementById('results')
const startButton = document.getElementById('start')
const quizTimer = document.getElementById('timer')

let penalty = 10;
let holdInterval = 0;

const gameStats = {
    score: 0,
    gameTime: 15,
    questionIndex: 0
}



//FUNCITONS
startButton.addEventListener('click', function(){
    
    if(holdInterval === 0){
        holdInterval = setInterval(function(){
            gameStats.gameTime--;
            quizTimer.textContent = `Time: ${gameStats.gameTime}`;

            if(gameStats.gameTime <= 0){
                clearInterval(holdInterval)
                gameOver()
                holdInterval = 0
            }

        },1000)
    //displayGame(gameStats.questionIndex);
    }
    
})

function gameOver(){

    quizContainer.innerHTML = ""
    quizTimer.textContent = "Time's Up!"
    gameStats.gameTime = 15
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




function gameOver(){

    quizContainer.innerHTML = ""
    quizTimer.textContent = "Time's Up!"
    gameStats.gameTime = 15
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






















































































































































































//startButton.addEventListener('click', startQuiz)
//submitButton.addEventListener('click', displayResults)


// var startBtn = document.getElementById('start')
// var qText = document.getElementById('question')
// var a1Text = document.getElementById('option1')
// var a2Text = document.getElementById('option2')
// var a3Text = document.getElementById('option3')
// var a4Text = document.getElementById('option4')
// var answerBtn = document.getElementsByClassName('answerBtn')
// var score = document.getElementById('score')
// var currentScore = 0;
// var selectedAnswer = ""
// var timeLimit = 180;
// var timer = document.getElementById('timer')

// event listener that runs the function startGame() when startBtn in clicked



// Function to display question and answer choices based on the parameters given

// function displayQandA(q,a1,a2,a3,a4){
    
//     qText.textContent = q;  
//     a1Text.textContent = a1;
//     a2Text.textContent = a2;
//     a3Text.textContent = a3;
//     a4Text.textContent = a4;

// }
//Function that will add 50 to current score and display it on the score section

// function displayQandA(questionIndex) {

//     qText.textContent = questionIndex.question;  
//     a1Text.textContent = questionIndex.answers.a;
//     a2Text.textContent = questionIndex.answers.b;
//     a3Text.textContent = questionIndex.answers.c;
//     a4Text.textContent = questionIndex.answers.d;
    
// }

// function gameTime(maxTime) {

//         timer = setInterval( function (){
//             for(i = maxTime; i > 0; i--){
//             timer.textContent = i;
            
//         }
//     }, 1000)}




// function startQuiz() {

//     for (let i = 0; i < questions.length;) {
//         const questionIndex = questions[i];

//         console.log(questions[0].answers.a)
//         displayQandA(questionIndex)

            

    
        
//     }
    
// }




// startBtn.addEventListener("click", startQuiz)




















































// function setScore() {
//     console.log('score');
//     currentScore+=50;
//     score.innerHTML = currentScore;

// }

// function gameTime(maxTime) {

//     timer = setInterval( function (){
//         for(i = maxTime; i > 0; i--){
//         timer.textContent = i;
        
//     }
// }, 1000)}


// function startGame() {

//     gameTime(timeLimit);        
// for(i = 0; i < questions.length;){
// // Variables
// let i = 0;
// var questionIndex = questions[i];
// //called display function with parameters using index
// displayQandA(questionIndex.question, questionIndex.answers.a, questionIndex.answers.b, questionIndex.answers.c, questionIndex.answers.d)
      


// for (let j = 0; j < answerBtn.length; j++) {
//     const option = answerBtn[j];

//     option.addEventListener('click', function() {

//        console.log("clicked")
       
//         selectedAnswer = this.innerHTML;
//         console.log(selectedAnswer); 
//         console.log(questionIndex.correctAnswer);
//         if (selectedAnswer === questionIndex.correctAnswer) {
//             setScore();
//         }
//         else {

//         }   
//     })
// }
// }
// }

   





























































//I want to run a function here that will listen for clicks on all buttons and will take the innerHTML from the button clicked
    // and store it in a variable called [var selectedAnswer = a1text.innerHTML or a2Text.innerHTML or a3Text.innerHTML or a4text.innerHTML
    // a1.addEventListener("click", function { })


 //}






// "start button" to run functions displayQuestion() displayAnswers() beginTimer()






/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
// useful code

    
        //  option1.addEventListener("click", function() {
        //     selectedAnswer = option1.innerHTML
        //    console.log(selectedAnswer)

// functions that I'll probably need to make 
// function startTimer()
// function checkAnswer()  -----with this in it---> function takeTime() and function addPoints()
// function 
