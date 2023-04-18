import { Menu } from "./entities/menu";
import { Pizza } from "./entities/pizza";

const main = () => {
  const menu = new Menu();
  menu.addPizza(new Pizza("Margarita", ["Molho tomate", "Muçarela"]));
  menu.addPizza(
    new Pizza("Pepperoni", ["Molho tomate", "Muçarela", "Pepperoni"])
  );
  menu.addPizza(
    new Pizza("Havaiana", ["Molho tomate", "Mozzarella", "Presunto", "Abacaxi"])
  );

  const iterator = menu.getPizzaIterator();
  let result = iterator.next();
  console.log("----------------------------------------------------------");
  while (!result.done) {
    console.log(`Nome: ${result.value.getName()}`);
    console.log(`Ingredientes: ${result.value.getIngredients().join(", ")}`);
    console.log("----------------------------------------------------------");
    result = iterator.next();
  }
};

main();
