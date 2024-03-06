//Social Media Profile
const username='codingAdventurer'
const fullName='Jhon Doe'
const age=25
const isStudent=true

//address
const address={street:'123 Main Street',
city:'Techville',
state:'Codingland',
zipCode:54321}

//Hobbies
const hobbies=['Coding','Reading','Gaming']

//Generating personazed bio
const personalizedBio=`Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`

//Print the user profile and bio
console.log(personalizedBio)