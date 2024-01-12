//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("purr");
    // You can uncomment the line below if you want to include the generic sound message
    // super.makeSound();
  }

  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("woof");
    // You can uncomment the line below if you want to include the generic sound message
    // super.makeSound();
  }

  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
