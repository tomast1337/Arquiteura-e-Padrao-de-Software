import { WebPageTheme, WebPageViewPort } from "./page-traits";

// Abstraction
abstract class WebPage {
  protected theme: WebPageTheme;
  protected viewport: WebPageViewPort;

  constructor(theme: WebPageTheme, viewport: WebPageViewPort) {
    this.theme = theme;
    this.viewport = viewport;
  }

  abstract getContent(): string;
}

export { WebPage };
