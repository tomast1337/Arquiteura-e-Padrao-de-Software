import { Pizza } from "./pizza";

export class PizzaIterator implements Iterator<Pizza> {
  private pizzas: Pizza[];
  private currentIndex: number;

  constructor(pizzas: Pizza[]) {
    this.pizzas = pizzas;
    this.currentIndex = 0;
  }

  public next(): IteratorResult<Pizza> {
    if (this.currentIndex < this.pizzas.length) {
      const pizza = this.pizzas[this.currentIndex];
      this.currentIndex++;
      return { value: pizza, done: false };
    } else {
      return { value: null, done: true };
    }
  }
}
