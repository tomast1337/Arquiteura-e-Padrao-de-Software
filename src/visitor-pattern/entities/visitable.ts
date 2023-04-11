import { Visitor } from "./visitor";

export interface Visitable {
  accept(visitor: Visitor): void;
}
