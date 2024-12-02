// Define a class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Define another class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

// Create instances
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

// Use instanceof
console.log(genericAnimal instanceof Animal); // true
console.log(genericAnimal instanceof Dog); // false
console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true

// Check with built-in types
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log("string" instanceof String); // false (primitives are not instances)
console.log(new String("string") instanceof String); // true
