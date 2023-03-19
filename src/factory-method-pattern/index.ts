import CatFactory from "./factories/CatFactory";
import DogFactory from "./factories/DogFactory";

// Exemplo de uso:
let dogFactory = new DogFactory();
dogFactory.orderAnimal("Rex", { breed: "Labrador", age: 2 });
// Output: Encomendado um Cão chamado Rex

let catFactory = new CatFactory();
catFactory.orderAnimal("Whiskers", { age: 1 });
// Output: Encomendado um Gato chamado Whiskers

dogFactory = new DogFactory();
dogFactory.orderAnimal("Zeus", { breed: "Labrador" });
// Output: Encomendado um Cão chamado Rex

catFactory = new CatFactory();
catFactory.orderAnimal("Miau", { age: 1 });
// Output: Encomendado um Gato chamado Whiskers
