import IComponent from "./component";

class Button implements IComponent {
  render(): string {
    return `<button><span>Click me!</span></button>`;
  }
}

export default Button;
