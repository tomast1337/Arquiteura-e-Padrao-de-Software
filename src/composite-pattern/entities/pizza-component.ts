import { Component } from "./component";

export class PizzaComponent implements Component {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  itemList(): string[] {
    return [this.name];
  }

  getPrice(): number {
    return this.price;
  }
}
