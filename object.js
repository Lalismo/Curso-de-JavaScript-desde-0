/*

data structure

key / value

object {
  property: value,
  property: value,
  property: value,
  Methods
}

*/

const person = {
    name: "John",
    age: 30,
    address: {
      street: "Av Insurgentre 187",
      city: "CDMX",
    },
    greeting() {
      console.log(`hello, my name is ${person.name}`);
    },
  };
  //Show object
  console.log(person);
  
  //Show name
  console.log(person.name);
  
  //Show function on object
  person.greeting();
  
  //Add value an property
  person.phone = "555-555-5555";
  
  //Show the added property
  console.log(person.phone);
  //Adding a new fuction to an object
  person.sayGoodbye = () => {
    console.log("Goodbye");
  };
  
  //Show the added function
  person.sayGoodbye();
  
  //Displaying a value of an object within an object
  console.log(person.address.street);
  
  //Delete a property of the object
  delete person.phone;
  
  //Delete a function of the object
  delete person.sayGoodbye;
