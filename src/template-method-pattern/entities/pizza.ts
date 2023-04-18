export abstract class Pizza {
  prepare(): void {
    this.prepareDough().addSauce().addToppings().bake().cut();
  }

  abstract prepareDough(): Pizza;
  abstract addSauce(): Pizza;
  abstract addToppings(): Pizza;
  abstract bake(): Pizza;

  cut(): void {
    console.log("Cutting pizza into slices");
  }
}
