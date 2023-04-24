import { PizzaPrototype } from "./pizza-prototype";

export class PizzaPrototypeRegistry {
  private static prototypes: { [key: string]: PizzaPrototype } = {};

  static registerPizza(name: string, prototype: PizzaPrototype) {
    PizzaPrototypeRegistry.prototypes[name] = prototype;
  }

  static clonePizza(name: string): PizzaPrototype {
    return PizzaPrototypeRegistry.prototypes[name].clone();
  }
}
