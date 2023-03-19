
type BikeType = "Bicicleta Normal" | "Bicicleta de Carga" | "Bicicleta Elétrica";

interface Bike {
  name: string;
  type: BikeType;
  price: number;
}


export default Bike;

export { BikeType };