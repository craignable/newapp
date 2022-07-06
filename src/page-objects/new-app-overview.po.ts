import { Atom, TreeViewAtom } from "@n-able/atoms";
import { Locator, Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/new-app-grid";
import { NewAppDemoBase } from "./new-app-base.po";

export class NewAppOverview extends NewAppDemoBase {
  private _newAppGrid: NewAppGrid;

  get treeView(): NewAppGrid {
    return Atom.initialise(
      this._newAppGrid,
      () => new NewAppGrid(this.demoContainer.locator(".content"))
    );
  }
  
   constructor(page: Page) {
    super(page, `http://localhost:4200/#/pages/new-page`);
  }
}

 
