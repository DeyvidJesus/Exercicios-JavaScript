let firstCard = parseInt(Math.random()*11)
let secondCard = parseInt(Math.random()*11)
let sum = firstCard + secondCard

// If statements

if (sum < 21){
    console.log("Do you want to draw a new card? ")
} else if(sum === 21){
    console.log("You've got Blackjack!! ")
} else if(sum >21){
    console.log("You're out of the game!")
}