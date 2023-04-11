import { Pizza } from "./pizza";
import { Topping } from "./topping";
import { Visitor } from "./visitor";

export class Customer implements Visitor {
  visitPizza(pizza: Pizza) {
    console.log(
      `Customer is ordering a pizza with ${pizza.getIngredients().join(", ")}`
    );
  }

  visitTopping(topping: Topping) {
    console.log(`Customer wants ${topping.getName()} on their pizza`);
  }
}
