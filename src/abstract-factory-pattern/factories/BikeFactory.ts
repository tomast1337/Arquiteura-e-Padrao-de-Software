import Bike from "../models/Bike";

interface BikeFactory {
  createCargoBike(name: string, price: number): Bike;
  createE_Bike(name: string, price: number): Bike;
  createNormalBike(name: string, price: number): Bike;
}

export default BikeFactory;