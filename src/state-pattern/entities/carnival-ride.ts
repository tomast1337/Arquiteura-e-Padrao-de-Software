import RideState from "./states/ride-state";
import AbortedState from "./states/aborted-state";
import RunningState from "./states/running-state";
import StoppedState from "./states/stopped-state";

class CarnivalRide {
    private state: RideState;
    public stoppedState: RideState;
    public runningState: RideState;
    public abortedState: RideState;
  
    constructor() {
      this.stoppedState = new StoppedState(this);
      this.runningState = new RunningState(this);
      this.abortedState = new AbortedState(this);
  
      this.state = this.stoppedState;
    }
  
    setState(state: RideState): void {
      this.state = state;
    }
  
    start(): void {
      this.state.start();
    }
  
    stop(): void {
      this.state.stop();
    }
  
    abort(): void {
      this.state.abort();
    }
  }

export default CarnivalRide;