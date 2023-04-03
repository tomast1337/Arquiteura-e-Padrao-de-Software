import { WebPageViewPort } from "..";

class DesktopViewPort implements WebPageViewPort {
  public getViewport(): string {
    return "16:9";
  }
}

export { DesktopViewPort };
