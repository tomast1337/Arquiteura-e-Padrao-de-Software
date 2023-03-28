import IObserver from "observer-pattern/observer";
import ISubject from "observer-pattern/subject";

class Thermometer implements ISubject {
  private observers: IObserver[] = [];
  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }
  removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, undefined);
    });
  }
  private temperature: number = 0;

  public setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notifyObservers();
  }

  public getTemperature() {
    return this.temperature;
  }
}

export default Thermometer;
