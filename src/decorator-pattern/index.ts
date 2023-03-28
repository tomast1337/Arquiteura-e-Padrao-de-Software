import Button from "./components/button";
import InputText from "./components/input";
import WithDivBorder from "./components/decorators/with-div-border";

const main = () => {
  console.log("Decorator Pattern");

  console.log("\n\nNormal Components\n\n");
  const button = new Button();
  console.log(button.render()); // Renderizando botão
  const input = new InputText();
  console.log(input.render()); // Renderizando input

  console.log("\n\nDecorated Components\n\n");

  @WithDivBorder("green", "3px")
  class BorderInput extends InputText {}

  @WithDivBorder("blue", "2px")
  class BorderButton extends Button {}

  const borderButton = new BorderButton();
  console.log(borderButton.render()); // Renderizando botão com borda azul

  const borderInput = new BorderInput();
  console.log(borderInput.render()); // Renderizando input com borda verde
};

main();
