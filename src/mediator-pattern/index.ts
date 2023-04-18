import { Customer } from "./entities/customer";
import { DeliveryDriver } from "./entities/delivery-driver";
import { Kitchen } from "./entities/kitchen";
import { PizzaOrderingMediator } from "./entities/pizza-ordering-mediator";

const main = () => {
  const mediator = new PizzaOrderingMediator();

  const customer = new Customer(mediator);
  mediator.setCustomer(customer);

  const kitchen = new Kitchen(mediator);
  mediator.setKitchen(kitchen);

  const deliveryDriver = new DeliveryDriver(mediator);
  mediator.setDeliveryDriver(deliveryDriver);

  customer.orderPizza("Mussarela");
  customer.orderPizza("Pepperoni");

  const customer2 = new Customer(mediator);
  customer2.orderPizza("Calabresa");

  const customer3 = new Customer(mediator);
  customer3.orderPizza("Portuguesa");

  customer.orderPizza("Marguerite");
};

main();
