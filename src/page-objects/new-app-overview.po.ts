import { Atom, BasePage } from "@n-able/atoms";
import { Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/expander-atoms";
import { NewAppDemoBase } from "./new-app-base.po";

export class NewAppOverview extends NewAppDemoBase {
  private _treeView: NewAppGrid;
  
  get treeView(): NewAppGrid {
    return Atom.initialise(
      this._treeView,
      () => new NewAppGrid(this.demoContainer .locator(".dx-treeview-node-container"))
    );
  }
  
   constructor(page: Page) {
    super(page, `http://localhost:4200/#/pages/new-page`);
  }
}

 
