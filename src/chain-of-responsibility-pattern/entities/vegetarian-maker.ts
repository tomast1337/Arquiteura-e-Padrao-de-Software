import { Pizza } from "./pizza";
import { PizzaMaker } from "./pizza-maker";
import Size from "./sizes";

class VegetarianMaker extends PizzaMaker {
  makePizza(name: string, size: Size): Pizza {
    if (name !== "Vegetarian") {
      return this.nextMaker.makePizza(name, size);
    }
    if (size === "small") {
      return { name: `Vegetarian - small`, price: 11 };
    } else if (size === "medium") {
      return { name: `Vegetarian - medium`, price: 13 };
    } else if (size === "large") {
      return { name: `Vegetarian - large`, price: 15 };
    } else {
      throw new Error("Invalid size");
    }
  }
}

export { VegetarianMaker };
