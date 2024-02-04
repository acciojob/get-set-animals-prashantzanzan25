class Animal {
  constructor(private species: string) {}

  getSpecies(): string {
    return this.species;
  }

  makeSound(): void {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  bark(): void {
    console.log("woof");
  }
}