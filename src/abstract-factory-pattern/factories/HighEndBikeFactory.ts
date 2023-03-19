import Bike from "../models/Bike";
import CargoBike from "../models/CargoBike";
import E_Bike from "../models/EBike";
import NormalBike from "../models/NormalBike";
import BikeFactory from "./BikeFactory";

class HighEndBikeFactory implements BikeFactory {
  createCargoBike(name: string, price: number): Bike {
    return new CargoBike(`Bicicleta BakFiets ${name}`, price + 500, 125);
  }

  createE_Bike(name: string, price: number): Bike {
    return new E_Bike(`E-Roller ${name}`, price + 1000, 1980);
  }

  createNormalBike(name: string, price: number): Bike {
    return new NormalBike(`Fiets da Holanda ${name}`, price + 250);
  }
}

export default HighEndBikeFactory;
