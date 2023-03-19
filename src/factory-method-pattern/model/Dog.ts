import Animal from "./Animal";

class Dog implements Animal {
  name: string;
  species: string;
  breed: string;
  age: number;

  constructor(name: string, breed: string, age: number) {
    this.name = name;
    this.species = "Cão";
    this.breed = breed;
    this.age = age;
  }
}

export default Dog;
