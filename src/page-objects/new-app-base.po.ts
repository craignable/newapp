import { BasePage } from "@n-able/atoms";
import { Frame, Locator } from "@playwright/test";

export class NewAppDemoBase extends BasePage {
   get overlayWrapper(): Locator {
    return this.overlayWrapper.locator(".dx-overlay-wrapper");
  }
  
}