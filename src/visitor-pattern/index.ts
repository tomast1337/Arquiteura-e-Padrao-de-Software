import { Chef } from "./entities/chef";
import { Customer } from "./entities/customer";
import { Pizza } from "./entities/pizza";
import { Topping } from "./entities/topping";

const main = () => {
  const pizza = new Pizza(["tomato sauce", "cheese"]);
  const topping = new Topping("mushrooms");

  const customer = new Customer();
  const chef = new Chef();

  pizza.accept(customer);
  pizza.accept(chef);
  topping.accept(customer);
  topping.accept(chef);
};

main();