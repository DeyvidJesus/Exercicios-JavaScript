let firstCard = parseInt(Math.random()*11)
let secondCard = parseInt(Math.random()*11)
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

// If statements

if (sum < 21){
    console.log("Do you want to draw a new card? ")
} else if(sum === 21){
    console.log("You've got Blackjack!! ")
    hasBlackjack = true
} else if(sum >21){
    console.log("You're out of the game!")
    isAlive = false
}