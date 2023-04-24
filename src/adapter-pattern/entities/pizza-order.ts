export class PizzaOrder {
  constructor(
    public name: string,
    public size: string,
    public toppings: string[]
  ) {}

  public getDescription(): string {
    return `Tamanho: ${this.size}, Nome: ${
      this.name
    } Ingredientes:${this.toppings.join(", ")}.`;
  }
}
