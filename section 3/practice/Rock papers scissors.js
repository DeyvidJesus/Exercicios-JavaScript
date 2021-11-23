let hands = ["rock", "paper", "scissor"]
let number = parseInt(Math.random()*3)

function playGame(){
    let move = hands[number]
    console.log(move)
}

playGame()