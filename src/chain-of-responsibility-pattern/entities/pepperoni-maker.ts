import { Pizza } from "./pizza";
import { PizzaMaker } from "./pizza-maker";
import Size from "./sizes";

class PepperoniMaker extends PizzaMaker {
  makePizza(name: string, size: Size): Pizza {
    if (name !== "Pepperoni") {
      return this.nextMaker.makePizza(name, size);
    }
    if (size === "small") {
      return { name: `Pepperoni - small`, price: 12 };
    } else if (size === "medium") {
      return { name: `Pepperoni - medium`, price: 14 };
    } else if (size === "large") {
      return { name: `Pepperoni - large`, price: 16 };
    } else {
      throw new Error("Invalid size");
    }
  }
}

export { PepperoniMaker };
