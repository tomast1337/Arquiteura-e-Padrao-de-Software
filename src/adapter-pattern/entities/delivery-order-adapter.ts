import { PizzaOrder } from "./pizza-order";

interface DeliveryOrder {
  pizzaType: string;
  pizzaSize: string;
  pizzaToppings: string[];
  totalPrice: number;
}

export class DeliveryOrderAdapter implements DeliveryOrder {
  public pizzaType: string;
  public pizzaSize: string;
  public pizzaToppings: string[];
  public totalPrice: number;

  constructor(pizzaOrder: PizzaOrder, totalPrice: number) {
    this.pizzaType = pizzaOrder.name;
    this.pizzaSize = pizzaOrder.size;
    this.pizzaToppings = pizzaOrder.toppings;
    this.totalPrice = totalPrice;
  }
}
