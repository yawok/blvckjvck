let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let statsEl = document.querySelector(".stats-el")
let cards = []
let isAlive = false
let hasBlackjack = false
let sum = 0
let gameStats = {
    played: 0,
    blackjacks: 0
}


function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have blackjack!"
        gameStats.blackjacks++
        hasBlackjack = true
    } else {
        isAlive = false
        message = "You are out of the game."
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    statsEl.textContent = "Games Played/Blackjacks: " + gameStats.played + "/" + gameStats.blackjacks
}

function getRandomCard () {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        randomCard = 11
    } 
    sum += randomCard
    cards.push(randomCard)
    return randomCard
}

function startGame () {
    sum = 0
    cards = [getRandomCard(), getRandomCard()]
    isAlive = true
    hasBlackjack = false
    gameStats.played++
    renderGame()
}

function newCard () {
    if (isAlive && !hasBlackjack) {
        getRandomCard()
        renderGame()
    }
}