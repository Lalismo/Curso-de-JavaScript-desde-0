// Methods that modify the original array (mutability)

// push ()

const countries = ['USA', 'Canada', 'UK']

const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)

// pop ()
const removedContry = countries.pop()
console.log(countries)
console.log(removedContry)

// Exercise: Managin a Stack

let bookCart = []

const Add_action = 'addToCart'
const Remove_action= 'removeFromCart'
const View_action = 'viewCart'

function viewCart(){
    console.log('Current Cart of Books:',  bookCart )
}

function performCartAction (action, newBook){
    switch(action){
        case Add_action:
            bookCart.push(newBook)
            break;
        case Remove_action:
            if(bookCart === 0){
                console.log('Cart is emptyArray. Noo books to remove')
            }else{
                const removeBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removeBook}`)
            }
            break;
        case View_action:
            viewCart()
            break;
        default:
            console.log('Invalid action. Please choose a vaid option.')
            break;
    }
}

performCartAction(Add_action, 'Dune')
performCartAction(View_action )
performCartAction(Add_action, 'Ego is the enemy')
performCartAction(View_action )