import { Atom, TreeViewAtom } from "@n-able/atoms";
import {  Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/expander-atoms";
import { TreeViewAtom } from "../../../../src/atoms/tree-view/tree-view-atom";
import { NewAppDemoBase } from "./new-app-base.po";

export class NewAppOverview extends NewAppDemoBase {
  private _treeView:treeViewAtom;;

  get treeView(): TreeViewAtom {
    return Atom.initialise(
      this._treeView,
      () => new TreeViewAtom(this.demoContainer.locator(""))
    );
  }
  
  
   constructor(page: Page) {
    super(page, `http://localhost:4200/#/pages/new-page`);
  }
}



 
