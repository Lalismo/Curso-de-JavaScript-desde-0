class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
    makeSound() {
      console.log("The animal makes a sound");
    }
}

// Extending and inheriting properties as methods
class Dog extends Animal {
    constructor(name, type, breed) {
      super(name, type);
      this.breed = breed;
    }
    makeSound() {
      console.log("The dog barks");
    }
    run() {
      console.log(`${this.name} runs happily`);
    }
}

const dog1 = new Dog("Bobby", "Dog", "Pug");

console.log(dog1);
dog1.run();
dog1.makeSound();

// Creating a method for the instance named dog1
dog1.newMethod = function () {
  console.log("This is a method");
};

// Creating a method for the Dog constructor class
Dog.prototype.secondMethod = function () {
  console.log("This is another new method");
};

// Creating a method for the Animal constructor class
Animal.prototype.thirdMethod = function () {
  console.log("One more method");
};
