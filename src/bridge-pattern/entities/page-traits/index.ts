// Implementor interface
interface WebPageTheme {
  getMainColor(): string;
}

interface WebPageViewPort {
  getViewport(): string;
}

export { WebPageTheme, WebPageViewPort };
