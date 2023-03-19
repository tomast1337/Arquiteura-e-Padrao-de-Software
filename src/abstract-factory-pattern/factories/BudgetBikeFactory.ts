import Bike from "../models/Bike";
import CargoBike from "../models/CargoBike";
import E_Bike from "../models/EBike";
import NormalBike from "../models/NormalBike";
import BikeFactory from "./BikeFactory";

class BudgetBikeFactory implements BikeFactory {
  createCargoBike(name: string, price: number): Bike {
    return new CargoBike(`Bicicleta Carga Barata ${name}`, price, 100);
  }

  createE_Bike(name: string, price: number): Bike {
    return new E_Bike(`Bicicleta chinesinha  ${name}`, price, 980);
  }

  createNormalBike(name: string, price: number): Bike {
    return new NormalBike(`Budget Bike ${name}`, price);
  }
}

export default BudgetBikeFactory;
