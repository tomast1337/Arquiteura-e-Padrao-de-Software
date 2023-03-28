import CarnivalRide from "../carnival-ride";
import RideState from "./ride-state";

class AbortedState implements RideState {
  private ride: CarnivalRide;

  constructor(ride: CarnivalRide) {
    this.ride = ride;
  }
  get_state(): "aborted" {
    return "aborted";
  }

  start(): void {
    console.log("Não é possível iniciar o brinquedo quando ele foi abortado.");
  }

  stop(): void {
    console.log("Não é possível parar o brinquedo quando ele foi abortado.");
  }

  abort(): void {
    console.log("O brinquedo já foi abortado.");
  }
}

export default AbortedState;