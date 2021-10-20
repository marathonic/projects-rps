function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3);
    if (computerMove == 0) return 'rock';
    else if (computerMove == 1) return 'paper';
    else if (computerMove == 2) return 'scissors';
}


/*

    

function singleRound(playerSelection, computerSelection) {
        
    
    computerSelection = computerPlay();

}

function pressRock() {
    document.getElementById('demoRock').textContent = 'YO!'
}

function pressPaper() {
    document.getElementById('idPaper').setAttribute('style',' border: solid antiquewhite 9px');
    document.getElementById('demoPaper').textContent = 'YO!'

}

*/

let playerChoice;

const playerSelection = function(pressed)  {
    playerChoice = pressed;
}

let playerPoints = 0;
let cpuPoints = 0;
let draw = 0;

let playerCounter = 0;
let cpuCounter = 0;
    
function playChime() {
    let chime = document.getElementById('chime');
    chime.play();
}

function singleRound(playerPlays, computerPlays)    {
   
    playerPlays = playerChoice;
    computerPlays = computerPlay();
    console.log(playerPlays);
    console.log(computerPlays);


    if (playerPlays == computerPlays) draw++;
     else if (playerPlays == 'rock' && computerPlays == 'scissors') {
        playChime();
        playerPoints++;
        playerCounter++;
        document.getElementById('humanScore').innerHTML = playerCounter;
     }
     else if (playerPlays == 'paper' && computerPlays == 'rock') {
        playChime();
        playerPoints++;
        playerCounter++;
        document.getElementById('humanScore').innerHTML = playerCounter;
     } 
     else if (playerPlays == 'scissors' && computerPlays == 'paper') {
        playChime();
        playerPoints++;
        playerCounter++;
        document.getElementById('humanScore').innerHTML = playerCounter;
     }
     else {
        cpuPoints++;
        cpuCounter++;
        document.getElementById('cpuScore').innerHTML = cpuCounter;
     } 

     console.log('player: ' + playerPoints + ' , cpu: ' + cpuPoints);

     

     if (draw == 3) {
        document.getElementById('overlayText').textContent = "It's a draw!";
        document.getElementById('overlay').style.display = 'block';
     }  else if (playerPoints == 3) {
        document.getElementById('overlayText').textContent = "Human wins!";
        document.getElementById('overlay').style.display = 'block';

        }   else if (cpuPoints == 3) {
            document.getElementById('overlayText').textContent = "Computer wins!";
            document.getElementById('overlay').style.display = 'block';
    
        }

    }

    
function refreshPage()  {
    window.location.reload();
};