import { Pizza } from "./entities/pizza";
import { PizzaHistory } from "./entities/pizza-history";

const main = () => {
  const pizza = new Pizza(["Queijo", "Molho de tomate"]);
  console.log(`Pizza inicial:\n${pizza.representation()}\n`);

  const pizzaHistory = new PizzaHistory();

  pizza.addIngredient("Champignon");
  console.log("Adicionando ingrediente...");
  pizzaHistory.push(pizza.save());
  console.log(pizza.representation());

  pizza.addIngredient("Pepperoni");
  console.log("Adicionando ingrediente...");
  pizzaHistory.push(pizza.save());
  console.log(pizza.representation());

  console.log("Restaurando pizza...");
  pizza.restore(pizzaHistory.pop()!);
  console.log(pizza.representation());

  console.log("Restaurando pizza...");
  pizza.restore(pizzaHistory.pop()!);
  console.log(pizza.representation());
};

main();
