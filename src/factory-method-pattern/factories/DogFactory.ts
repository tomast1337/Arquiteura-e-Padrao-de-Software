import Animal from "../model/Animal";
import Dog from "../model/Dog";
import AnimalFactory from "./AnimalFactory";

class DogFactory extends AnimalFactory {
  createAnimal(name: string, options?: any): Animal {
    const breed = options?.breed ?? "Desconhecido";
    const age = options?.age ?? 0;
    return new Dog(name, breed, age);
  }
}

export default DogFactory;
