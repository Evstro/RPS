let playerScore = 0;
let computerScore = 0;


const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', e => {
    e.preventDefault();
    const playerSelection = 'rock';

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[random];
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    nextRound(playerScore, computerScore);
});

paper.addEventListener('click', e => {
    e.preventDefault();
    const playerSelection = 'paper';

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[random];
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    nextRound(playerScore, computerScore);
});

scissors.addEventListener('click', e => {
    e.preventDefault();
    const playerSelection = 'scissors';

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[random];
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    nextRound(playerScore, computerScore);
});

function computerSelects () {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[random];

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    console.log(`You chose ${playerSelection}, computer chose ${computerSelection}!`);
    switch (true) {

        
        case playerSelection.toLowerCase() === computerSelection:
            console.log('You both chose the same! Draw!');

            break

        case playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors':
        case playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper':
        case playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock':
            console.log('You win!')
            
            return playerScore++;

        case computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors':
        case computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper':
        case computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock':
            console.log('You lose!')
            
            return computerScore++;

        default:
            console.log('Invalid choice! You forfeit!');
    
            return computerScore++;
    };
};

function updateScore (playerScore, computerScore) {
    const score = document.getElementById('score');
    score.innerHTML = `Player Score: ${playerScore}; Computer Score: ${computerScore}`
}

function nextRound(playerScore, computerScore) {
    const final = document.getElementById('final');

    if (playerScore === 5) {
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';

        final.innerHTML = 'You win!'
    } else if (computerScore === 5) {
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';

        final.innerHTML = 'You Lose!'
    } else {
        
    }
}