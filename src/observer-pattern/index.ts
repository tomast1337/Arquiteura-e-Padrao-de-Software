import Display from "./entities/display";
import HumiditySensor from "./entities/humidity-sensor";
import Thermometer from "./entities/thermometer";

const main = () => {
  // Create a thermometer and a humidity sensor
  const thermometer = new Thermometer();
  const humiditySensor = new HumiditySensor();

  // Create a display and connect it to the thermometer and humidity sensor
  const display = new Display(thermometer, humiditySensor);

  // Set some readings on the thermometer and humidity sensor
  thermometer.setTemperature(25);
  humiditySensor.setHumidity(60);
  thermometer.setTemperature(30);
  humiditySensor.setHumidity(70);
  thermometer.setTemperature(35);
  humiditySensor.setHumidity(80);
  thermometer.setTemperature(25);
  humiditySensor.setHumidity(90);
  thermometer.setTemperature(35);
  humiditySensor.setHumidity(100);
};

main();
