import { WebPageTheme } from "..";

// Concrete Implementor 1
class DarkTheme implements WebPageTheme {
  getMainColor(): string {
    return "#252525";
  }
}

export { DarkTheme };
