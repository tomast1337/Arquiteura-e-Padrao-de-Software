import { Pizza } from "./pizza";

export class PepperoniPizza extends Pizza {
  prepareDough(): Pizza {
    console.log("Preparing thick dough");
    return this;
  }

  addSauce(): Pizza {
    console.log("Adding tomato sauce");
    return this;
  }

  addToppings(): Pizza {
    console.log("Adding pepperoni and cheese");
    return this;
  }

  bake(): Pizza {
    console.log("Baking pizza in electric oven for 15 minutes");
    return this;
  }
}
