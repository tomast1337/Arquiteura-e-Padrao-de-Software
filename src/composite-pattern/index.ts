import { BeverageComponent } from "./entities/beverage-component";
import { OrderComponent } from "./entities/order-component";
import { PizzaComponent } from "./entities/pizza-component";

const main = () => {
  const order = new OrderComponent();

  const pepperoniPizza = new PizzaComponent("Pizza de Pepperoni", 39.99);
  const margheritaPizza = new PizzaComponent("Pizza de Margherita", 29.99);
  const coca = new BeverageComponent("CocaCola", 6.99);
  const agua = new BeverageComponent("Aguá", 2.99);

  const pizzaCombo = new OrderComponent();
  pizzaCombo.addComponent(pepperoniPizza);
  pizzaCombo.addComponent(coca);
  pizzaCombo.addComponent(coca);

  const fullCombo = new OrderComponent();
  fullCombo.addComponent(pizzaCombo);
  fullCombo.addComponent(margheritaPizza);
  fullCombo.addComponent(agua);

  order.addComponent(fullCombo);

  order.addComponent(new PizzaComponent("Pizza de Calabresa", 39.99));

  console.log("Preço total: R$" + order.getPrice().toFixed(2));
  console.log("Itens: " , order.itemList());
};

main();
