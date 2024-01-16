//Rock paper scissors in the console

//Globals
let rounds;
let userchoice;
let computerchoice;
let message;
let playerScore;
let computerScore;
let playing = false;

let gamelog = document.getElementById("gamelog");
let playprompt = document.createElement('li');
playprompt.style = 'font-style: italic';
playprompt.textContent = 'Pick your weapon.';

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let computerchoice = num == 0 ? 'rock' : 
    num == 1 ? 'paper' : 'scissors';
    return computerchoice;
}

function playRound(player, computer){

    player = player.toLowerCase();

    let choices = player + ' ' + computer;
    let outcome;

    switch(choices){
        case 'paper rock':
        case 'scissors paper':
        case 'rock scissors':
            outcome = "You Win! " + player + " beats " + computer;
            playerScore+=1;
            rounds-=1;
            break;
        case 'rock paper':
        case 'scissors rock':
        case 'paper scissors':
            outcome = "You Lose! " + computer + " beats " + player;
            computerScore+=1;
            rounds-=1;
            break;
        default:
            outcome = "It's a tie!";
            break;
    }
    playing=rounds>0;
    return outcome;
}

//Start button begins the game
startbutton=document.getElementById("startbutton");
roundsinp=document.getElementById("roundsfield");
startbutton.addEventListener('click', () =>{
    playing=true;
    playerScore=0;
    computerScore=0;
    rounds=roundsinp.value;
    roundsinp.value='';
    let roundannounce=document.createElement("li");
    roundannounce.textContent="Playing to " + rounds + " rounds."
    gamelog.appendChild(roundannounce);
    gamelog.appendChild(playprompt);
})

//weapon buttons play the game until rounds are up
const buttonlist=document.querySelectorAll(".choicebutton");
for (const button of buttonlist){
    button.addEventListener('click', function () { 
        if(playing){
            userchoice=this.id;
            computerchoice=getComputerChoice();
            message = playRound(userchoice, computerchoice);
            let li = document.createElement("li");
            li.textContent=message;
            gamelog.appendChild(li);
            if (!playing){
                gamelog.removeChild(playprompt);
                let resultannounce = document.createElement("li");
                resultannounce.textContent =  "The results are in!";
                let pscoreannounce = document.createElement("li");
                pscoreannounce.textContent = "Player: " + playerScore;
                let cscoreannounce = document.createElement("li");
                cscoreannounce.textContent = "Computer: " + computerScore;
                let winnerannounce = document.createElement("li");
                winnerannounce.textContent = 
                playerScore>computerScore?"Player":"Computer"+" wins!";
                gamelog.appendChild(resultannounce);
                gamelog.appendChild(pscoreannounce);
                gamelog.appendChild(cscoreannounce);
                gamelog.appendChild(winnerannounce);
            }
            else{
                gamelog.appendChild(playprompt);
            }
        }
    });
}