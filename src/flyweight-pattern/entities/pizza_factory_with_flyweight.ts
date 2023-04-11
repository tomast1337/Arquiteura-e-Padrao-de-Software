import { Pizza } from "./pizza";
import { Toppings } from "./toppings";

export class PizzaFactoryWithFlyweight {
  private pizzas: { [description: string]: Pizza } = {};

  public createPizza(toppings: Toppings): Pizza {
    const description = this.getDescription(toppings);

    if (!this.pizzas[description]) {
      this.pizzas[description] = new Pizza(toppings);
    }

    return this.pizzas[description];
  }

  private getDescription(toppings: Toppings): string {
    let toppingsList = "";
    for (const topping in toppings) {
      toppingsList += `${topping}-${toppings[topping]}-`;
    }
    return toppingsList.slice(0, -1);
  }
}
