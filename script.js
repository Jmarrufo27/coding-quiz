var questions = [
{
    question:  "Which of the following is a string?",
    answers: {
        a: '"Hello World"',
        b: "79",
        c: "true", 
        d: "null"
    },
    correctAnswer: "a"
},
{ 
    question: "which is not a primitive data type?",
    answers: {
        a: "boolean", 
        b: "bigint", 
        c: "number", 
        d: "string",
    },
    correctAnswer: "b"   
},
{
    question: "What is used to check if two things are both true?",
    answers: {
        a: "||", 
        b: "!!", 
        c: "&&", 
        d: "**"
    },
    correctAnswer: "c",
},
{
    question: "What attribute does an image need to be accesible?",
    answers: {
        a: "img", 
        b: "href", 
        c: "src", 
        d: "alt"
    },
    correctAnswer: "d",
},
{
    question: "Which type of data is true of false only?",
    answers: {
        a: "bigint", 
        b: "number", 
        c: "boolean", 
        d: "string"
    },
    correctAnswer: "c",
},
{
    question: "What adds 10px to margin top and bottom only, in CSS",
    answers: {
        a: "margin: 10px", 
        b: "margin: 5px 5px", 
        c: "padding: 10px 0px", 
        d: "margin: 10px 0px"
    },
    correctAnswer: "c",
},
{
    question: "How do I identify a class called 'container' in CSS?", 
    answers: {
        a: "#container", 
        b: ".container", 
        c: "container;", 
        d: "*container"
    },
    correctAnswer: "b",
},
{
    question8: "How would I call a function called 'equalityChecker' in my code?",
    answers8: {
        a: "equalityChecker()", 
        b: "equalityChecker;", 
        c: "equalityChecker=", 
        d: "EQUALITYchecker"
    },
    correctAnswer: "a",
},
{
    question: "What is used to check if one of two values is true?",
    answers: {
        a: "&&", 
        b: "!=", 
        c: "||", 
        d: "==="
    },
    correctAnswer: "c",
},
{
    question: "How can you print something from your code to the Console?", 
    answers: {a: ".innerHTML", 
    b: "console.log()", 
    c: ".textContent", 
    d: "return"
    },
    correctAnswer: "a",
},
{
    question: "How do you get the first item in an array 'names'?", 
    answers: {
        a: "array.names.1", 
        b: "names[0]", 
        c: "names[1]", 
        d: ".names[0]"
    },
    correctAnswer: "b",
},
{
    question: "How can you acces any element from document in javascript?",
    answers: {
        a:"querySelector()", 
        b: "querySelectorAll()", 
        c: "document.querySelectorAll()", 
        d: "getElementById()"
    },
    correctAnswer: ["c"],
}
]
// Function to display question and answer choices based on the parameters given
function displayQandA(q,a1,a2,a3,a4){
    var qText = document.querySelector('.question')
    var a1Text = document.querySelector('.option1')
    var a2Text = document.querySelector('.option2')
    var a3Text = document.querySelector('.option3')
    var a4Text = document.querySelector('.option4')

    qText.innerHTML = q;  
    a1Text.innerHTML = a1;
    a2Text.textContent = a2;
    a3Text.textContent = a3;
    a4Text.textContent = a4;

}
// Called display function
displayQandA(questions[0].question, questions[0].answers.a, questions[0].answers.b, questions[0].answers.c, questions[0].answers.d)





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
