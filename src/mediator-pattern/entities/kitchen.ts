import { Mediator } from "./mediator";

export class Kitchen {
  constructor(private mediator: Mediator) {}

  preparePizza(pizza: string) {
    console.log(`Kitchen is preparing ${pizza} pizza.`);
    this.mediator.notifyDeliveryDriver(pizza);
  }
}
