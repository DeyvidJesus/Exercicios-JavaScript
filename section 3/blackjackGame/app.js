let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false
let message
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById('player-el')
let player

function startGame(){
    cards = []
    sum = 0
    let firstCard = Math.floor(Math.random()*11) + 1
    let secondCard = Math.floor(Math.random()*11) + 1
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    player = {
        name: prompt('Write your name:'),
        coins: 145
    }
    playerEl.textContent = player.name + ": $" + player.coins
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
    if (isAlive === true && hasBlackjack === false) {
    let newCard = Math.floor(Math.random()*11) + 1
    cards.push(newCard)
    sum += newCard
    playGame()
    }
}