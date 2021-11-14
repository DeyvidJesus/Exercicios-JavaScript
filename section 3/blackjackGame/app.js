let firstCard = Math.floor(Math.random()*11) + 1
let secondCard = Math.floor(Math.random()*11) + 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
    playGame()
}

function playGame() {
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${cards}`
    if (sum < 21){
        message = "Do you want to draw a new card? "
    } else if(sum === 21){
        message = "You've got Blackjack! "
        hasBlackjack = true
    } else if(sum >21){
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let thirdCard = Math.floor(Math.random()*11) + 1
    cards.push(thirdCard)
    sum += thirdCard

    playGame()
}