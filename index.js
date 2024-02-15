const computerChoiceDisplay =  document.getElementById('pc-choice')
const userChoiceDisplay =  document.getElementById('user-choice')
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

if (randomNumber === 1) {
    computerChoice = 'rock'
}
if (randomNumber === 2) {
    computerChoice = 'scissors'
}
if (randomNumber === 1) {
    computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice

}

function getResults (){
    if (computerChoice===userChoice)
    {
        result = 'Draw Mate'
    }
if (computerChoice === 'rock' && userChoice === 'paper' ) {
    result = 'You won'
}
if (computerChoice === 'paper' && userChoice === 'rock' ) {
    result = 'Your Opponents won'
}
if (computerChoice === 'scissors' && userChoice === 'paper' ) {
    result = 'Your Opponents won'
}
if (computerChoice === 'paper' && userChoice === 'scissors' ) {
    result = 'You won'
}
if (computerChoice === 'rock' && userChoice === 'scissors' ) {
    result = 'Your Opponents won'
}
if (computerChoice === 'scissors' && userChoice === 'rock' ) {
    result = 'You won'
}



resultDisplay.innerHTML = result

}