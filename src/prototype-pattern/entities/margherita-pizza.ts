import { PizzaPrototype } from "./pizza-prototype";

export class MargheritaPizza implements PizzaPrototype {
  toppings: string[];
  constructor(toppings: string[]) {
    this.toppings = toppings;
  }
  clone(): MargheritaPizza {
    return new MargheritaPizza(this.toppings);
  }
}
