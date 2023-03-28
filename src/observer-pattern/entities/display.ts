import IObserver from "observer-pattern/observer";
import HumiditySensor from "./humidity-sensor";
import Thermometer from "./thermometer";

class Display implements IObserver {
  private thermometer: Thermometer;
  private humiditySensor: HumiditySensor;
  private temperature: number = 0;
  private humidity: number = 0;

  constructor(thermometer: Thermometer, humiditySensor: HumiditySensor) {
    this.thermometer = thermometer;
    this.humiditySensor = humiditySensor;
    this.thermometer.registerObserver(this);
    this.humiditySensor.registerObserver(this);
  }

  public update(temperature?: number, humidity?: number) {
    this.temperature = temperature || this.temperature;
    this.humidity = humidity || this.humidity;
    console.log(
      `Temperature: ${this.temperature}°C, Humidity: ${this.humidity}%`
    );
  }
}

export default Display;
