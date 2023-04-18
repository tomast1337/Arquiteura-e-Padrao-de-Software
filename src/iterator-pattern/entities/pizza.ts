export class Pizza {
  private name: string;
  private ingredients: string[];

  constructor(name: string, ingredients: string[]) {
    this.name = name;
    this.ingredients = ingredients;
  }

  public getName(): string {
    return this.name;
  }

  public getIngredients(): string[] {
    return this.ingredients;
  }
}
