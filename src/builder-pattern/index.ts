import { PizzaBuilder } from "./entities/pizza-builder";

const main = () => {
  const pizza1 = new PizzaBuilder()
    .withDough("fina")
    .withSauce("tomate")
    .withToppings(["queijo", "tomate", "azeitona"])
    .build();

  const pizza2 = new PizzaBuilder()
    .withDough("grossa")
    .withSauce("tomate")
    .withToppings(["queijo", "cebola", "calabresa", "pimentão", "orégano"])
    .build();

  console.log(`Pizza 1: ${pizza1.toString()}`);
  console.log(`Pizza 2: ${pizza2.toString()}`);
};

main();
