import { Pizza } from "./pizza";
import { Topping } from "./topping";
import { Visitor } from "./visitor";

export class Chef implements Visitor {
  visitPizza(pizza: Pizza) {
    console.log(
      `Chef is making a pizza with ${pizza.getIngredients().join(", ")}`
    );
  }

  visitTopping(topping: Topping) {
    console.log(`Chef is adding ${topping.getName()} to the pizza`);
  }
}
