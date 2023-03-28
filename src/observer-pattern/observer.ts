interface IObserver {
  update: (temperature?: number, humidity?: number) => void;
}

export default IObserver;
