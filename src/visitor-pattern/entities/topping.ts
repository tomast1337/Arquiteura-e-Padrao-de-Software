import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class Topping implements Visitable {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  accept(visitor: Visitor) {
    visitor.visitTopping(this);
  }
}
