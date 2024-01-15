//Rock paper scissors in the console

console.log("Let's play rock, paper, scissors!");

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let computerchoice = num == 0 ? 'rock' : 
    num == 1 ? 'paper' : 'scissors'
    return computerchoice
}

function playRound(player, computer){

    player = player.toLowerCase();

    let outcome = player + ' ' + computer;

    switch(outcome){
        case 'paper rock':
        case 'scissors paper':
        case 'rock scissors':
            message = "You Win! " + player + " beats " + computer;
            break;
        case 'rock paper':
        case 'scissors rock':
        case 'paper scissors':
            message = "You Lose! " + computer + " beats " + player;;
            break;
        default:
            message = "It's a tie!";
            break;
    }

    return message;
}

let userchoice;
let computerchoice;
let message;
let playerScore = 0;
let computerScore = 0;
function game(rounds){
    while(rounds > 0){
        userchoice = prompt("Type in rock, paper, or scissors.");
        computerchoice = getComputerChoice();
        message = playRound(userchoice, computerchoice);
        console.log(message);
        while(message == "It's a tie!"){
            userchoice = prompt("Go again!");
            message = playRound(userchoice, getComputerChoice());
            console.log(message);
        }
        if (message.includes("Win")){
            playerScore+=1
        }
        else{
            computerScore+=1
        }
        rounds-=1;
    }
}

let rounds = prompt("How many rounds do you want to play?");
game(parseInt(rounds));

console.log("The results are in!\nPlayer: " + playerScore 
            + "\nComputer: " + computerScore);