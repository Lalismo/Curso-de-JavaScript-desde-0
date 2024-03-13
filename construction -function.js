function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}
//Creation of a person
const person1 = new Person("Juan", "Perez", 20);
console.log(person1);

//adding new property a person1
person1.nationality = "Mexican";
console.log(person1);

//Creation of a person 2
const person2 = new Person("Diego", "De Granda", 35);
console.log(person2);

//Adding new methods a an construction function
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} ${this.lastName}`);
}

person1.greet();
person2.greet();
