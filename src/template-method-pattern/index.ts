import { MargheritaPizza } from "./entities/margherita-pizza";
import { PepperoniPizza } from "./entities/pepperoni-pizza";

const main = () => {
  const pizzas = [new MargheritaPizza(), new PepperoniPizza()];
  pizzas.forEach((pizza) => pizza.prepare());
};

main();
