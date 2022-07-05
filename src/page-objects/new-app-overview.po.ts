import { Atom, BasePage } from "@n-able/atoms";
import { Page } from "@playwright/test";
import { NewAppGrid } from "../atoms/expander-atoms";

export class NewAppOverview extends BasePage {

  private _appIcon!: NewAppGrid;

  get tennisLogo(): NewAppGrid {
    return Atom.initialise(this._appIcon, () => new NewAppGrid(this.page.locator(".dx-item")));
  }
  
   constructor(page: Page) {
    super(page, `http://localhost:4200/#/pages/new-page`);
  }
}

 
