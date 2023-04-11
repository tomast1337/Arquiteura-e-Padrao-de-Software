import { PizzaMemento } from "./memento";

export class Pizza {
  private ingredients: string[];

  constructor(ingredients: string[]) {
    this.ingredients = ingredients;
  }

  public addIngredient(ingredient: string): void {
    this.ingredients.push(ingredient);
  }

  public getIngredients(): string[] {
    return this.ingredients;
  }

  public representation(): string {
    return `Pizza possuindo os ingredientes: ${this.ingredients.join(", ")}`;
  }

  public save(): PizzaMemento {
    return {
      ingredients: [...this.ingredients],
    };
  }

  public restore(memento: PizzaMemento): void {
    this.ingredients = memento.ingredients;
  }
}
