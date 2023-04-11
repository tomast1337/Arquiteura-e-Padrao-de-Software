import { Context } from "./context";
import { Expression } from "./expression";

export class Pizza implements Expression {
  interpret(context: Context): void {
    const input = context.input.toLowerCase();
    if (input.includes("pizza")) {
      context.addOutput("Criado um ordem para um pizza...\n");
    }
  }
}
