/*
Imagine you'are building a simple card game.
You have an array representing a deck of cards,
and you want to perform the following operations:

1. Shuffle the Deck: Randomly rearrange the order
of the cards in the deck.
2. Deal Cards: Deal a specific number of cards
the players from the top of the deck


this ecercise involves using the splice() method
to shuffle the deck and deal cards
*/

const deck = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']


//Fisher-Yates Algorithm
function shufleedeck(){
    for(let i = deck.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i+ 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCards(numCard){
    const dealCards = deck.splice(0,numCard)
    return dealCards
}

shufleedeck()
const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('Player 1 Hand: ',player1Hand)
console.log('Player 2 Hand: ',player2Hand)
console.log('Player 3 Hand: ',player3Hand)


