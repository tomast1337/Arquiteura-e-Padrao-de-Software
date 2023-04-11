import { Toppings } from "./toppings";

export class Pizza {
  private toppings: Toppings;

  constructor(toppings: Toppings) {
    this.toppings = toppings;
  }

  public describe(): string {
    let toppingsList = "";
    for (const topping in this.toppings) {
      toppingsList += `${topping} (${this.toppings[topping]}g), `;
    }
    return `Pizza with ${toppingsList.slice(0, -2)}`;
  }
}
