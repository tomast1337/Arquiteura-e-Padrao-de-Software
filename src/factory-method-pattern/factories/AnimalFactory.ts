import Animal from "factory-method-pattern/model/Animal";

abstract class AnimalFactory {
  abstract createAnimal(name: string, options?: any): Animal;

  orderAnimal(name: string, options?: any): void {
    const animal = this.createAnimal(name, options);
    console.log(`Encomendado um ${animal.species} chamado ${animal.name}`);
  }
}

export default AnimalFactory;
