import { WebPageTheme } from "..";

// Concrete Implementor 2
class LightTheme implements WebPageTheme {
  getMainColor(): string {
    return "#f0f0f0";
  }
}

export { LightTheme };
