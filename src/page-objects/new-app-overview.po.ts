import { Atom, BasePage } from "@n-able/atoms";
import { Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/expander-atoms";
import { NewAppDemoBase } from "./new-app-base.po";

export class NewAppOverview extends NewAppDemoBase {
  private _likeIcon!: NewAppGrid;
  
get likeIcon(): NewAppGrid {
return Atom.initialise(
this._likeIcon,
() => new NewAppGrid(this.demoContainer .locator(".dx-icon-like"))
);
}
constructor(page: Page) {
super(page, `http://localhost:4200/#/pages/new-page`);
}
}



 
