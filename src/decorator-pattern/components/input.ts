import IComponent from "./component";

class InputText implements IComponent {
  render():string {
    return `<input type="text" />`;
  }
}

export default InputText;
