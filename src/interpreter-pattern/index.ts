import { Context } from "./entities/context";
import { Pizza } from "./entities/pizza";
import { Topping } from "./entities/topping";

const main = () => {
  const context = new Context("Eu quero uma pizza de pepperoni com queijo");
  const pizza = new Pizza();
  const cheeseTopping = new Topping("queijo");
  const pepperoniTopping = new Topping("pepperoni");

  pizza.interpret(context);
  cheeseTopping.interpret(context);
  pepperoniTopping.interpret(context);

  console.log(context.output.join(""));
};

main();
