import { BasePage } from "@n-able/atoms";
<<<<<<< HEAD
import { Frame, FrameLocator, Locator } from "@playwright/test";
=======
import { Frame, Locator } from "@playwright/test";
>>>>>>> a722e50be24a5b3779b04f4bbb29b3de468e66d0

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

 

   get overlayWrapper(): Locator {
    return this.page.locator(".dx-overlay-wrapper");
  }
}