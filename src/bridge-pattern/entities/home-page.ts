import { WebPage } from "./web-page";

class HomePage extends WebPage {
  getContent(): string {
    return `Home page in ${this.theme.getMainColor()} and in the view port of ${this.viewport.getViewport()}`;
  }
}

export { HomePage };
