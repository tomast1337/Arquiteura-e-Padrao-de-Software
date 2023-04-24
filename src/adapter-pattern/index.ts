import { DeliveryOrderAdapter } from "./entities/delivery-order-adapter";
import { PizzaOrder } from "./entities/pizza-order";

const main = () => {
  const ordemPizza = new PizzaOrder("Calabresa", "Grande", [
    "molho de tomate",
    "calabresa",
    "cebola",
    "azeitona",
    "orégano",
    "queijo",
  ]);
  const preço = 49.99;
  const ordemEntrega = new DeliveryOrderAdapter(ordemPizza, preço);

  console.log(
    `Feito uma nova ordem de entrega: ${ordemEntrega.pizzaType} (${
      ordemEntrega.pizzaSize
    }) com os ingredientes ${ordemEntrega.pizzaToppings.join(
      ", "
    )}. Preço total: $${ordemEntrega.totalPrice}`
  );
};

main();
