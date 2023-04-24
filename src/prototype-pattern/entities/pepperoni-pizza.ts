import { PizzaPrototype } from "./pizza-prototype";

export class PepperoniPizza implements PizzaPrototype {
  toppings: string[];
  constructor(toppings: string[]) {
    this.toppings = toppings;
  }
  clone(): PepperoniPizza {
    return new PepperoniPizza(this.toppings);
  }
}
