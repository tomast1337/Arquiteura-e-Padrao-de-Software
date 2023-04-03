import { Pizza } from "./pizza";

abstract class PizzaMaker {
  protected nextMaker!: PizzaMaker;

  setNextMaker(maker: PizzaMaker): void {
    this.nextMaker = maker;
  }

  abstract makePizza(name: string, size: string): Pizza;
}

export { PizzaMaker };
