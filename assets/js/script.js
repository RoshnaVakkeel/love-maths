    // Wait or the DOM to be loaded before running the game
// Get the buttons elements and add event liseners to them

document.addEventListener("DOMContentLoaded",function() {
let buttons = document.getElementsByTagName("button");

for (let button of buttons){
    button.addEventListener("click", function (){
        if (this.getAttribute("data-type") === "submit"){
            checkAnswer();
        } else {
            let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener ("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    })

    runGame("addition");
})


/**
 * Th main game loop, called hen script is first loaded 
 * and after user's answer is processed.
 */
function runGame(gameType) {

    document.getElementById("answer-box").value ="";
    document.getElementById ("answer-box").focus();

    // creates two random numbers between 1 and 25
   let num1 = Math.floor(Math.random()*25) + 1;
   let num2 = Math.floor(Math.random()*25) + 1;

   if (gameType === "addition"){
    displayAdditionQuestion(num1, num2);
   } else if (gameType === "multiply"){
    displaySubtractQuestion(num1, num2);
   } else {
    alert(`Unknown game type: ${gameType}.`)
    throw(`Unknown game type: ${gameType}. Aborting!`);
   }
}


/** 
 * Checks if the userAnswer is equal to the calculateCorrectAnswer
*/
 
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert ("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1])
}

/**
 * Gets operanads and operator from DOM
 * and returns correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator=== "+"){
        return [operand1 + operand2, "addition"];
    } else if (operator=== "x"){
        return [operand1 + operand2, "multiply"];
    } else {
        alert (`Unimplemented operator $(operator)`);
        throw (`Unimplemented operator $(operator). Aborting!`);
    }

}

/**
 * Get answer from DOM and increments the score by one
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore;
}


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById ("operand1").textContent = operand1;
    document.getElementById ("operand2").textContent = operand2;
    document.getElementById ("operator").textContent = "+";
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    document.getElementById ("operand1").textContent = operand1;
    document.getElementById ("operand2").textContent = operand2;
    document.getElementById ("operator").textContent = "x";
}