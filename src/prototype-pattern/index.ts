import { MargheritaPizza } from "./entities/margherita-pizza";
import { PepperoniPizza } from "./entities/pepperoni-pizza";
import { PizzaPrototypeRegistry } from "./entities/pizza-prototype-registry";

const main = () => {
  const margheritaPrototype = new MargheritaPizza([
    "queijo",
    "molho tomate",
    "manjericão",
  ]);
  const pepperoniPrototype = new PepperoniPizza([
    "queijo",
    "molho tomate",
    "pepperoni",
  ]);

  PizzaPrototypeRegistry.registerPizza("Margherita", margheritaPrototype);
  PizzaPrototypeRegistry.registerPizza("Pepperoni", pepperoniPrototype);

  const margheritaPizza = PizzaPrototypeRegistry.clonePizza("Margherita");
  const pepperoniPizza = PizzaPrototypeRegistry.clonePizza("Pepperoni");

  console.log(margheritaPizza); // Output: MargheritaPizza { toppings: [ 'queijo', 'molho tomate', 'manjericão' ] }
  console.log(pepperoniPizza); // Output: PepperoniPizza { toppings: [ 'queijo', 'molho tomate', 'pepperoni' ] }
};

main();
