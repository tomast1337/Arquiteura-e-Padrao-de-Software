import Bike, { BikeType } from "./Bike";

class NormalBike implements Bike {
  name: string;
  type: BikeType;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.type = "Bicicleta Normal";
    this.price = price;
  }
}

export default NormalBike;