function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3);
    console.log(computerMove);
    if (computerMove == 0) return 'rock';
    else if (computerMove == 1) return 'paper';
    else if (computerMove == 2) return 'scissors';
}


/*
$("button").click(function() {
    let firedButton = $(this).val();
    console.log(firedButton);
});


function singleRound(playerSelection, computerSelection) {
        
    
    computerSelection = computerPlay();

}
*/

function pressRock() {
    document.getElementById('demoRock').textContent = 'YO!'
}

function pressPaper() {
    document.getElementById('idPaper').setAttribute('style',' border: solid antiquewhite 9px');
    document.getElementById('demoPaper').textContent = 'YO!'

}


function playerSelection(pressed)  {
    alert(pressed);
}