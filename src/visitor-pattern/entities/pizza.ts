import { Visitable } from "./visitable";
import { Visitor } from "./visitor";

export class Pizza implements Visitable {
  private ingredients: string[];

  constructor(ingredients: string[]) {
    this.ingredients = ingredients;
  }

  getIngredients(): string[] {
    return this.ingredients;
  }

  accept(visitor: Visitor) {
    visitor.visitPizza(this);
  }
}
