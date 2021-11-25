let firstCard = parseInt(Math.random()*11)
let secondCard = parseInt(Math.random()*11)
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message


if (sum < 21){
    message = "Do you want to draw a new card? "
} else if(sum === 21){
    message = "You've got Blackjack!! "
    hasBlackjack = true
} else if(sum >21){
    message = "You're out of the game!"
    isAlive = false
}

console.log(message)