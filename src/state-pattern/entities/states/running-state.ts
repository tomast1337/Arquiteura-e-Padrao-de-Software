import RideState from "./ride-state";
import CarnivalRide from "../carnival-ride";

class RunningState implements RideState {
  private ride: CarnivalRide;

  constructor(ride: CarnivalRide) {
    this.ride = ride;
  }
  get_state(): "running" {
    return "running";
  }

  start(): void {
    console.log("O brinquedo já está em execução.");
  }

  stop(): void {
    console.log("Parando o brinquedo...");
    this.ride.setState(this.ride.stoppedState);
  }

  abort(): void {
    console.log("Abortando o brinquedo...");
    this.ride.setState(this.ride.abortedState);
  }
}

export default RunningState;
