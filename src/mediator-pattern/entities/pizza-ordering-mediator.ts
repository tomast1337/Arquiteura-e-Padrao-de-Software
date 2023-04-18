import { Customer } from "./customer";
import { DeliveryDriver } from "./delivery-driver";
import { Kitchen } from "./kitchen";
import { Mediator } from "./mediator";

export class PizzaOrderingMediator implements Mediator {
  private customer: Customer | null;
  private kitchen: Kitchen | null;
  private deliveryDriver: DeliveryDriver | null;

  constructor() {
    this.customer = null;
    this.kitchen = null;
    this.deliveryDriver = null;
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  setKitchen(kitchen: Kitchen) {
    this.kitchen = kitchen;
  }

  setDeliveryDriver(deliveryDriver: DeliveryDriver) {
    this.deliveryDriver = deliveryDriver;
  }

  orderPizza(pizza: string) {
    if (!this.customer) throw new Error("Customer is not set.");
    if (!this.kitchen) throw new Error("Kitchen is not set.");
    this.kitchen.preparePizza(pizza);
  }

  notifyDeliveryDriver(pizza: string) {
    if (!this.deliveryDriver) throw new Error("Delivery driver is not set.");
    this.deliveryDriver.deliverPizza(pizza);
  }

  notifyCustomer(pizza: string) {
    if (!this.customer) throw new Error("Customer is not set.");
    this.customer.receiveDelivery(pizza);
  }
}
