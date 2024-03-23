function rockPaperScissors(playerChoice) {
    // Generate a random choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Convert player's choice to lowercase for case-insensitive comparison
    playerChoice = playerChoice.toLowerCase();
    
    // Check for valid player choice
    if (!choices.includes(playerChoice)) {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
    
    // Determine the winner
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win! Computer chose " + computerChoice + ".";
    } else {
        return "You lose! Computer chose " + computerChoice + ".";
    }
}

// Example usage:
let playerChoice = 'rock';
console.log(rockPaperScissors(playerChoice));
