import { AboutPage } from "./entities/about-page";
import { HomePage } from "./entities/home-page";
import { DarkTheme } from "./entities/page-traits/theme/dark-theme";
import { LightTheme } from "./entities/page-traits/theme/light-theme";
import { DesktopViewPort } from "./entities/page-traits/view-port/desktop-view-port";
import { MobileViewPort } from "./entities/page-traits/view-port/mobile-view-port";

const main = () => {
  const darkTheme = new DarkTheme();
  const lightTheme = new LightTheme();

  const desktopViewPort = new DesktopViewPort();
  const mobileViewPort = new MobileViewPort();

  const homePageDesktop = new HomePage(darkTheme, desktopViewPort);
  console.log(homePageDesktop.getContent());

  const homePageMobile = new HomePage(lightTheme, mobileViewPort);
  console.log(homePageMobile.getContent());

  const aboutPageDesktop = new AboutPage(lightTheme, desktopViewPort);
  console.log(aboutPageDesktop.getContent());

  const aboutPageMobile = new AboutPage(darkTheme, mobileViewPort);
  console.log(aboutPageMobile.getContent());
};

main();
