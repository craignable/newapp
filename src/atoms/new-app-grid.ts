import { Atom, PageActions } from "@n-able/atoms";
import { Locator } from "@playwright/test";

export class NewAppGrid extends Atom {
  private get cells(): Locator {
    return this.element.locator(".gridcell");
  }

  constructor(element: Locator) {
    super(element);
  }

   async getTitle(): Promise<void> {
    // Get the title of the page
  }

  async searchHover(): Promise<void> {
    // Hover with Page Actions on the search icon element
  }

  async countCells(): Promise<number>{
    return PageActions.count(this.cells);
  }
}