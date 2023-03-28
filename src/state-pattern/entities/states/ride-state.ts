interface RideState {
  start(): void;
  stop(): void;
  abort(): void;
  get_state(): "stopped" | "running" | "aborted";
}

export default RideState;
