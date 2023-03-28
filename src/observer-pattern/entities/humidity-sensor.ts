import IObserver from "observer-pattern/observer";
import ISubject from "observer-pattern/subject";

class HumiditySensor implements ISubject {
  private observers: IObserver[] = [];
  private humidity: number = 0;

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
      observer.update(undefined, this.humidity);
    });
  }

  public setHumidity(humidity: number) {
    this.humidity = humidity;
    this.notifyObservers();
  }

  public getHumidity() {
    return this.humidity;
  }
}

export default HumiditySensor;
