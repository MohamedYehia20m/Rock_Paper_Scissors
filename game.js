console.log("Hello from JavaScript!");

playGame()

function getComputerChoice() {
    let x = Math.random() * 3;
    //console.log("x: ",x)
    let y = Math.floor(x);
    //console.log("y: ",y)

    if (y === 2)
    {
        return "rock";
    }
    else if (y === 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }


}
function getHumanChoice() {
    let choice = prompt("What's your choice?");
    return choice.toLowerCase();
}





function playGame () {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                return "Paper beats rock. You lose!";

            } else { // computerChoice === "scissors"
                humanScore += 1;
                return "Rock beats scissors. You win!";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore += 1;
                return "Scissors beats paper. You lose!";
            } else { // computerChoice === "rock"
                humanScore += 1;
                return "Paper beats rock. You win!";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore += 1;
                return "Rock beats scissors. You lose!";
            } else { // computerChoice === "paper"
                humanScore += 1;
                return "Scissors beats paper. You win!";
            }
        } else {
            return "Invalid choice!";
        }

    }

    for (let i = 0 ;i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Human: ", humanSelection);
        console.log("Computer: ", computerSelection);

        console.log("result: ",playRound(humanSelection, computerSelection));

        console.log("humanScore: ",humanScore);
        console.log("computerScore: ",computerScore);

    }
    if (computerScore > humanScore) {
        console.log("the winner is computer");
    }
    else if (computerScore < humanScore){
        console.log("the winner is human");
    }
    else {
        console.log("It's a tie!");
    }
}