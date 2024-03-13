// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability).

//find()
const multipleof5 = [5,10,15,20]

const firstNumberGreaterThan10 = multipleof5.find(number => number > 10)

console.log(multipleof5)
console.log(firstNumberGreaterThan10)

// findIndex()

const randomNumbers = [5,35,843,13,3]

const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers)
console.log(indexNumber)

// Exercise: Raffle Winner Verification Program

const winningParticipants = [
    { id: 1, name: 'Jennifer', ticketNumber: 001 },
    { id: 8, name: 'Michael', ticketNumber: 008 },
    { id: 15, name: 'Emily', ticketNumber: 015 },
    { id: 47, name: 'Charlie', ticketNumber: 047 }
  ]
  
  function findWinnerByName (name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name.'
  }
  
  function findIndexWinnerByTicket (ticketNumber) {
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found with that ticket number.'
  }
  
  function displayWinnerInformation (winner) {
    if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
      console.log('Winner information: ', winner)
    } else {
      console.log('No winner found.')
    }
  }
  
  const winnerByName = findWinnerByName('Emily')
  const indexWinnerByTicket = findIndexWinnerByTicket(008)
  
  displayWinnerInformation(winnerByName)
  console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)