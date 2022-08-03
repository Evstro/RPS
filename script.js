








const playGame = () => {

    // initial scores for player and computer
    let playerScore = 0;
    let computerScore = 0;

    // function to get computer and player to choose
    function choose() {

          // function to generate a random choice for computer
        const getComputerChoice = () => {


            // return the computers selection
            return computerSelection;
        };

        // run function to get computer choice
        getComputerChoice();
   

    
    };

    // function to battle
    function battle(playerSelection, computerSelection) {
        // display results
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

    // function to play round
    function playRound() {

        // function to get player choice
        let playerSelection = prompt('Choose Rock, Paper, or Scissors');
        console.log(playerSelection);

        const choices = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random() * choices.length);
   
        // set a variable to choose randomly
        let computerSelection = choices[random];
        console.log(computerSelection);

        battle(playerSelection, computerSelection);

        console.log(`Player Score: ${playerScore}; Computer Score: ${computerScore}`)
    };


    for(let round = 1; round < 6; round++) {
        console.log(`Round ${round}`);
        playRound();
    };

    function restartGame() {
        let playAgain = prompt('Play again?')
        if(playAgain.toLowerCase() == 'yes') {
            newGame()
        }
    };

    if(playerScore > computerScore) {
        console.log('You won the game!')
        restartGame()
    } else if(playerScore < computerScore) {
        console.log('You lost the game!')
        restartGame()
    } else if(playerScore == computerScore) {
        console.log('You tied the game!')
        restartGame()        
    };

    function newGame() {
        playGame()
    };

};

playGame()