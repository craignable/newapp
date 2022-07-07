import { Atom, TreeViewAtom } from "@n-able/atoms";
import { Locator, Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/new-app-grid";
import { NewAppDemoBase } from "./new-app-base.po";

export class NewAppOverview extends NewAppDemoBase {


  private _newAppGrid!: NewAppGrid;

get newAppGrid(): NewAppGrid {
   return Atom.initialise(
   this._newAppGrid,
  () => new NewAppGrid(this.overlayWrapper.locator(".gridContainer"))
);
}

constructor(page: Page) {
super(page, `http://localhost:4200/#/pages/new-page`);
}
}


 
