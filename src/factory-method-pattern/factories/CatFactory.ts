import Animal from "../model/Animal";
import Cat from "../model/Cat";
import AnimalFactory from "./AnimalFactory";

class CatFactory extends AnimalFactory {
  createAnimal(name: string, options?: any): Animal {
    const age = options?.age ?? 0;
    return new Cat(name, age);
  }
}

export default CatFactory;
