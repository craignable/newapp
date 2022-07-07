import { Atom, PageActions } from "@n-able/atoms";
import { Locator } from "@playwright/test";
export class NewAppGrid extends Atom {
  private get cells(): Locator {
    return this.element.locator(".gridcell");
  }
    get drawerContent(): Locator {
    return this.drawerContent.locator(".dx-drawer-content");
  }


   get searchIcon(): Locator{
    return this.drawerContent.locator(".dx-icon-filter-operation-default ").nth(0);
  }

  constructor(element: Locator) {
    super(element);
  }

   async getTitle(): Promise<void> {
    // Get the title of the page
  }

  async clickOnSearchIcon(): Promise<void> {
    await PageActions.click(this.searchIcon)
    // Hover with Page Actions on the search icon element
  }
 
  async countCells(): Promise<number>{
    return PageActions.count(this.cells);
  }
}