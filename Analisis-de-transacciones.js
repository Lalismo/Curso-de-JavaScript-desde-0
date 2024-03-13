// Exercise: Transaction analysis

const transactions = [

    { id:1, description: 'Sueldo', amount: 1200 },
    
    { id:2, description: 'Pizza personal', amount: -12 },
    
    { id:3, description: 'Emprendimiento', amount: 1900 },
    
    { id:4, description: 'Coca Cola 1L', amount: -18 },
    
    { id:5, description: 'Cremolada', amount: -15 }
    
    ]

//1. Calculate Total Balance:

const totalBalance = transactions.reduce((sum,transaction) =>sum+transaction.amount,0)
console.log('1. Calculate Total Balance')
console.log('Total Balance:', totalBalance)

//2. Find The Largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((Maxtransaction,transaction)=> {
    return Math.abs(transaction.amount) > Math.abs(Maxtransaction.amount) ? transaction: Maxtransaction
}, transactions[0])
console.log('2. Find The Largest Transaction (Income or Expense)')
console.log('Largest Transaction: ',largestTransaction)

//3. Filter Purchase Transactions
const purchaseTransactions=transactions.filter(transaction=>transaction.amount<0)
console.log('3. Filter Purchase Transactions')
console.log(' Purchase Transactions: ',purchaseTransactions)

//4. Find a Transaction by description

function findTransitionByDescription (description){
    const findTransition = transactions.find(transaction => transaction.description === description)
    return findTransition
}
console.log('4. Find a Transaction by description')
console.log('Found transition: ', findTransitionByDescription('Pizza personal'))
//4.1 Find a Transaction by description in constant

const specificTransaction = transactions.find(transaction => transaction.description === 'Sueldo')

console.log('Specific Transaction: ', specificTransaction)

//5.Find the Index of a Transaction by Amount:

const specificAmount = transactions.findIndex(transaction => transaction.amount === -18)
console.log('5. Find the Index of a Transaction by Amount')
console.log('Specific Transaction With Index Amount -18: ', specificAmount)

//6. Uptate rtansaction Descriptions

transactions.forEach(transaction =>{
    if (transaction.amount<0){
        transaction.description = `Expense: ${transaction.description}`
    }else{
        transaction.description = `Income: ${transaction.description}`
    }
})
console.log('6. Update Transaction Descriptions')
console.log('Updated Transactions: ', transactions)
