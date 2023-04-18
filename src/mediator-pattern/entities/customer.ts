import { Mediator } from "./mediator";

export class Customer {
  constructor(private mediator: Mediator) {}

  orderPizza(pizza: string) {
    this.mediator.orderPizza(pizza);
  }

  receiveDelivery(pizza: string) {
    console.log(`Customer received ${pizza} pizza.`);
  }
}
