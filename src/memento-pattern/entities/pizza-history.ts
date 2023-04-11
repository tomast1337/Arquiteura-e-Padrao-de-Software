import { PizzaMemento } from "./memento";

export class PizzaHistory {
  private history: PizzaMemento[] = [];

  public push(memento: PizzaMemento): void {
    this.history.push(memento);
  }

  public pop(): PizzaMemento | undefined {
    return this.history.pop();
  }
}
