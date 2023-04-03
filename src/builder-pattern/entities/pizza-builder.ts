import { Pizza } from "./pizza";

class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  withDough(dough: string): PizzaBuilder {
    this.pizza.setDough(dough);
    return this;
  }

  withSauce(sauce: string): PizzaBuilder {
    this.pizza.setSauce(sauce);
    return this;
  }

  withToppings(toppings: string[]): PizzaBuilder {
    this.pizza.setToppings(toppings);
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}

export { PizzaBuilder };
