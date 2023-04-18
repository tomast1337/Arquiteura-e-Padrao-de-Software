import { Pizza } from "./pizza";

export class MargheritaPizza extends Pizza {
  prepareDough(): Pizza {
    console.log("Preparing thin dough");
    return this;
  }

  addSauce(): Pizza {
    console.log("Adding tomato sauce");
    return this;
  }

  addToppings(): Pizza {
    console.log("Adding fresh mozzarella and basil");
    return this;
  }

  bake(): Pizza {
    console.log("Baking pizza in wood-fired oven for 90 seconds");
    return this;
  }
}
