import { BasePage } from "@n-able/atoms";
import { Frame, FrameLocator, Locator } from "@playwright/test";

export class NewAppDemoBase extends BasePage {
public readonly demoIFrameLocator: FrameLocator = this.page.frameLocator("#demoFrame");
 get demoIFrame(): Frame {
return this.page.frame({ name: "demo-frame" });
  }

get demoContainer(): Locator {
return this.demoIFrame.locator(".demo-container");
}
protected get demoOverlay(): Locator {
return this.demoIFrame.locator(".dx-overlay-wrapper");
}

 

}