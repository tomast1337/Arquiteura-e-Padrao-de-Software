import { Mediator } from "./mediator";

export class DeliveryDriver {
  constructor(private mediator: Mediator) {}

  deliverPizza(pizza: string) {
    console.log(`Delivery driver is delivering ${pizza} pizza.`);
    this.mediator.notifyCustomer(pizza);
  }
}
