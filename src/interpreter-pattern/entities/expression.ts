import { Context } from "./context";

export interface Expression {
  interpret(context: Context): void;
}
