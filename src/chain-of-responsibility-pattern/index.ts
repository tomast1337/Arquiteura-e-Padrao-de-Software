import { MargheritaMaker } from "./entities/margherita-maker";
import { PepperoniMaker } from "./entities/pepperoni-maker";
import { VegetarianMaker } from "./entities/vegetarian-maker";

const main = () => {
  // Create the pizza makers
  const margheritaMaker = new MargheritaMaker();
  const pepperoniMaker = new PepperoniMaker();
  const vegetarianMaker = new VegetarianMaker();

  // Set the next maker for each pizza maker
  margheritaMaker.setNextMaker(pepperoniMaker);
  pepperoniMaker.setNextMaker(vegetarianMaker);

  // Try to order pizzas of different sizes
  console.log(margheritaMaker.makePizza("Margherita", "small")); // { name: "Margherita - small", price: 10 }
  console.log(margheritaMaker.makePizza("Pepperoni", "large")); // { name: "Pepperoni - large", price: 16 }
  console.log(margheritaMaker.makePizza("Vegetarian", "medium")); // { name: "Vegetarian - medium", price: 13 }
};

main();
