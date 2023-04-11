import { Pizza } from "./pizza";
import { Topping } from "./topping";

export interface Visitor {
  visitPizza(pizza: Pizza): void;
  visitTopping(topping: Topping): void;
}
