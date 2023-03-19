import Bike, { BikeType } from "./Bike";

class CargoBike implements Bike {
  name: string;
  type: BikeType;
  price: number;
  maxLoad: number;

  constructor(name: string, price: number, maxLoad: number) {
    this.name = name;
    this.type = "Bicicleta de Carga";
    this.price = price;
    this.maxLoad = maxLoad;
  }
}

export default CargoBike;
