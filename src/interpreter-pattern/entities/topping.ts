import { Context } from "./context";
import { Expression } from "./expression";

export class Topping implements Expression {
  private _topping: string;

  constructor(topping: string) {
    this._topping = topping;
  }

  interpret(context: Context): void {
    const input = context.input.toLowerCase();
    if (input.includes(this._topping)) {
      context.addOutput(`Adicionado ${this._topping} a pizza...\n`);
    }
  }
}
