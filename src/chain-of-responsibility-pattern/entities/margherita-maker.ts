import { Pizza } from "./pizza";
import { PizzaMaker } from "./pizza-maker";
import Size from "./sizes";

class MargheritaMaker extends PizzaMaker {
  makePizza(name: string, size: Size): Pizza {
    if (name !== "Margherita") {
      return this.nextMaker.makePizza(name, size);
    }
    if (size === "small") {
      return { name: `Margherita - small`, price: 10 };
    } else if (size === "medium") {
      return { name: `Margherita - medium`, price: 12 };
    } else if (size === "large") {
      return { name: `Margherita - large`, price: 14 };
    } else {
      throw new Error("Invalid size");
    }
  }
}

export { MargheritaMaker };
