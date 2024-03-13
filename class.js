class Person {
    constructor(name, lastName, relation, consequence) {
      this.name = name;
      this.lastName = lastName;
      this.relation = relation;
      this.consequence = consequence;
    }
    greeting() {
      console.log(`Hello, my name is ${this.name} ${this.lastName}. You ${this.relation}, get ready for the ${this.consequence}.`);
    }
}

const person1 = new Person('Íñigo', 'Montoya', 'are invited', 'party');

person1.greeting();
