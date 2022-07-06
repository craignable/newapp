import { Atom, TreeViewAtom } from "@n-able/atoms";
import { Locator, Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/expander-atoms";
import { NewAppDemoBase } from "./new-app-base.po";

export class NewAppOverview extends NewAppDemoBase {
  private _treeView: NewAppGrid;

  get treeView(): TreeViewAtom {
    return Atom.initialise(
      this._treeView,
      () => new TreeViewAtom(this.demoContainer.locator(`.${TreeViewAtom.CSS_CLASS}`))
    );
  }
  
  
   constructor(page: Page) {
    super(page, `http://localhost:4200/#/pages/new-page`);
  }
}

 
