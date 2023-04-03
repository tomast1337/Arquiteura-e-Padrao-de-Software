import { WebPageViewPort } from "..";

class MobileViewPort implements WebPageViewPort {
  public getViewport(): string {
    return "9:16";
  }
}

export { MobileViewPort };
