import IObserver from "./observer";

interface ISubject {
  // Register an observer to the subject
  registerObserver(observer: IObserver): void;

  // Remove an observer from the subject
  removeObserver(observer: IObserver): void;

  // Notify all registered observers when the state of the subject changes
  notifyObservers(): void;
}

export default ISubject;
