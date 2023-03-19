import Animal from "./Animal";

class Cat implements Animal {
  name: string;
  species: string;
  breed?: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.species = "Gato";
    this.age = age;
  }
}

export default Cat;
