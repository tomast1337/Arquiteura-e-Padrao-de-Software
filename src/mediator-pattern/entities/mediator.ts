export interface Mediator {
  orderPizza(pizza: string): void;
  notifyDeliveryDriver(pizza: string): void;
  notifyCustomer(pizza: string): void;
}
