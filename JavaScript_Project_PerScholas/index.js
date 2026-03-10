const hand = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;
let humanChoice = "";
let computerChoice = "";
/*
You should have a function named getComputerChoice.
Your getComputerChoice function should return "rock", "paper", or "scissors" at random.
    Hint: The Math.random method returns a random number that is greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.Use console.log() to print the result of the Math.random method to the console and see what you get.

Your game will be played by a human player.You will write a function that takes the user’s choice and returns it.
*/
function getComputerChoice(Array) {
    console.log(Array, Array.length)
    return hand[(Math.floor(Math.random() * Array.length))]
}





function getHumanChoice(humanChoice) {

/*
Create a function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
    Hint: Use the prompt() method to get the user’s input.Take a look at the MDN documentation  for more information.

Your game will keep track of the player’s score.You will write variables to keep track of the player’s score.
*/  while (!humanChoice) {
        humanChoice = prompt(`Round !/nPlease enter "rock", "paper", or "scissors".`);
   
        //const humanChoiceToLower = humanChoice.toLowerCase()
    console.log('humanChoice ', humanChoice)
    if (humanChoice === null) {return "exit"};
    if (humanChoice.toLowerCase() === hand[0] ||
        humanChoice.toLowerCase() === hand[1] ||
        humanChoice.toLowerCase() === hand[2] ) {
        return humanChoice
        } else humanChoice = ""

    }


}


/*🖐✌️✊ */

function playRound(humanChoice, computerChoice,round) {
    const humanChoiceToLower = humanChoice.toLowerCase()
    if (humanChoiceToLower === computerChoice) {
        return "It's a tie!"
    } else if (humanChoiceToLower === hand[0] && computerChoice === hand[1] ||
        humanChoiceToLower === hand[1] && computerChoice === hand[2] ||
        humanChoiceToLower === hand[2] && computerChoice === hand[0]) {
        humanScore++;
    
        return `You win! ${humanChoiceToLower} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoiceToLower}`
    }

}

function playGame() {
    for (let i = 1; i <= 3; i++) {
        computerChoice = getComputerChoice(hand);
        console.log('computerChoice - ', computerChoice);
        humanChoice = getHumanChoice();
        console.log('humanChoice - ', humanChoice)
        if (humanChoice==="exit"){
            return "Game over";
        }
        
        alert(playRound(humanChoice, computerChoice, i));
        console.log('human score -', humanScore, '  computer score - ' , computerScore)
      

    }
    return (humanScore > computerScore) ? "You win the game!" : "You lost the game!"

}

alert(playGame())
