import RideState from "./ride-state";
import CarnivalRide from "../carnival-ride";

class StoppedState implements RideState {
  private ride: CarnivalRide;

  constructor(ride: CarnivalRide) {
    this.ride = ride;
  }
  get_state(): "stopped" {
    return "stopped";
  }

  start(): void {
    console.log("Iniciando o brinquedo...");
    this.ride.setState(this.ride.runningState);
  }

  stop(): void {
    console.log("O brinquedo já está parado.");
  }

  abort(): void {
    console.log("Não é possível abortar o brinquedo quando ele está parado.");
  }
}

export default StoppedState;
