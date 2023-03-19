import Bike, { BikeType } from "./Bike";

class E_Bike implements Bike {
  name: string;
  type: BikeType;
  price: number;
  BatteryCapacity: number;

  constructor(name: string, price: number, BatteryCapacity: number) {
    this.name = name;
    this.type = "Bicicleta Elétrica";
    this.price = price;
    this.BatteryCapacity = BatteryCapacity;
  }
}

export default E_Bike;
