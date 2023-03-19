import BikeFactory from "./factories/BikeFactory";
import BudgetBikeFactory from "./factories/BudgetBikeFactory";
import HighEndBikeFactory from "./factories/HighEndBikeFactory";
import Bike from "./models/Bike";

class BikeStore {
  private bikeFactory: BikeFactory;

  constructor(bikeFactory: BikeFactory) {
    this.bikeFactory = bikeFactory;
  }

  orderBike(type: string, name: string, price: number): Bike {
    let bike: Bike;
    if (type === "cargo") {
      bike = this.bikeFactory.createCargoBike(name, price);
    } else if (type === "e-bike") {
      bike = this.bikeFactory.createE_Bike(name, price);
    } else if (type === "normal") {
      bike = this.bikeFactory.createNormalBike(name, price);
    } else {
      throw new Error(`Tipo de bicicleta inválido: ${type}`);
    }
    console.log(`Encomendada uma ${bike.type}
Nome: ${bike.name}
Preço: ${bike.price}
Dados Gerais:`,bike);
    return bike;
  }
}

const main = () => {
  const highEndBikeStore = new BikeStore(new HighEndBikeFactory());
  const budgetBikeStore = new BikeStore(new BudgetBikeFactory());

  const highEndCargoBike = highEndBikeStore.orderBike(
    "cargo",
    "Cargo Bike",
    2000
  );
  const budgetE_Bike = budgetBikeStore.orderBike("e-bike", "E-Bike", 1000);
  const highEndNormalBike = highEndBikeStore.orderBike(
    "normal",
    "Normal Bike",
    1500
  );
  const budgetNormalBike = budgetBikeStore.orderBike(
    "normal",
    "Normal Bike",
    1000
  );
  const highEndE_Bike = highEndBikeStore.orderBike("e-bike", "E-Bike", 2000);
  const budgetCargoBike = budgetBikeStore.orderBike("cargo", "Cargo Bike", 500);
};


main();