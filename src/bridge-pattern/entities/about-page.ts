import { WebPage } from "./web-page";

// Refined Abstraction 2
class AboutPage extends WebPage {
  getContent(): string {
    return `About page in the color ${this.theme.getMainColor()} and in the view port of ${this.viewport.getViewport()}`;
  }
}

export { AboutPage };
