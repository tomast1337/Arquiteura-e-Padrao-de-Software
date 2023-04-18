import { Pizza } from "./pizza";
import { PizzaIterator } from "./pizza-iterator";

export class Menu {
  private pizzas: Pizza[];

  constructor() {
    this.pizzas = [];
  }

  public addPizza(pizza: Pizza) {
    this.pizzas.push(pizza);
  }

  public getPizzas(): Pizza[] {
    return this.pizzas;
  }

  public getPizzaIterator(): Iterator<Pizza> {
    return new PizzaIterator(this.pizzas);
  }
}
