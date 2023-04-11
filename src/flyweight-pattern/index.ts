import { PizzaFactoryWithFlyweight as PizzaFactory } from "./entities/pizza_factory_with_flyweight";

const main = () => {
  const factory = new PizzaFactory();
  const pizzas = [];
  for (let i = 0; i < 33; i++) {
    const pizza1 = factory.createPizza({
      pepperoni: 50,
      mushrooms: 30,
      olives: 10,
    }); // Pizza com pepperoni (50g), mushrooms (30g) e olives (10g)

    const pizza2 = factory.createPizza({
      peppers: 50,
      mushrooms: 30,
      olives: 10,
    }); // Pizza com peppers (50g), mushrooms (30g) e olives (10g)

    const pizza3 = factory.createPizza({
      onions: 50,
      mushrooms: 30,
      sausage: 10,
    }); // Pizza com onions (50g), mushrooms (30g) e sausage (10g)

    const randomPizza = factory.createPizza({
      pepperoni: Math.floor(Math.random() * 2 + 20),
      mushrooms: Math.floor(Math.random() * 2 + 20),
      olives: Math.floor(Math.random() * 2 + 20),
    }); // Pizza com ingredients aleatórios

    pizzas.push(pizza1, pizza2, pizza3, randomPizza);
  }
  // Counting the number of pizzas created
  const pizzasCount = new Map();
  for (const pizza of pizzas) {
    const description = pizza.describe();
    if (pizzasCount.has(description)) {
      pizzasCount.set(description, pizzasCount.get(description) + 1);
    } else {
      pizzasCount.set(description, 1);
    }
  }
  console.log("Contagem de pizzas criadas:", pizzasCount);
};

main();
