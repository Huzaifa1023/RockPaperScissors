const game = ()=>{
    let playerScore = 0;
    let computerScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.playBtn');
        const intro = document.querySelector('.intro');
        const game = document.querySelector('.game');
        // fade out intro screen and fade in game screen
        playBtn.addEventListener('click',()=>{
            intro.classList.add('fadeOut');
            game.classList.remove('fadeOut')
            game.classList.add('fadeIn')
        })
    }

    const playGame = ()=>{
        const options = document.querySelectorAll('.options button');
        const computerOptions = ['rock','paper','scissors'];
        options.forEach(option=> {
            option.addEventListener('click',()=>{
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                const playerChoice = option.getAttribute('data-choice');
                compareHands(playerChoice,computerChoice);
                setScore(playerScore,computerScore);
                setOption(playerChoice,computerChoice);
            })
        })
    }

    const endGame = ()=>{
        const endGameBtn = document.querySelector('.endGameBtn');
        endGameBtn.addEventListener('click',()=>{
            window.top.location = window.top.location
        })
    }
    const compareHands = (playerChoice,computerChoice)=>{
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie"
            return
        }else if (playerChoice == 'rock' && computerChoice == "paper") {
            winner.textContent = 'Computer Won';
            computerScore++
            return
        }else if (playerChoice == 'rock' && computerChoice == 'scissors'){
            winner.textContent = 'Player Won';
            playerScore++;
            return
        }else if (playerChoice == 'paper' && computerChoice == 'rock'){
            winner.textContent = 'Player Won';
            playerScore++
            return
        }else if (playerChoice == 'paper' && computerChoice == 'scissors'){
            winner.textContent = "Computer Won";
            computerScore++
            return
        }else if(playerChoice == 'scissors' && computerChoice == "rock") {
            winner.textContent = 'Computer Won';
            computerScore++
            return
        }else if (playerChoice == "scissors" && computerChoice == 'paper'){
            winner.textContent = "Player Won";
            playerScore++
            return
        }
    }
    const setScore = (pScore,cScore)=>{
        const playerScore = document.querySelector('.player p');
        const computerScore = document.querySelector('.computer p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const setOption = (playerOption,computerOption)=>{
        const playerHand = document.querySelector('.player_hand img');
        const computerHand = document.querySelector('.computer_hand img');
        playerHand.setAttribute("src",`./assets/${playerOption}.png`) 
        computerHand.setAttribute("src",`./assets/${computerOption}.png`) 
    }
    startGame();
    playGame();
    endGame();
}  
game()