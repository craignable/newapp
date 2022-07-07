import { Atom, PageActions } from "@n-able/atoms";
import { Locator } from "@playwright/test";

export class NewAppGrid extends Atom {
 

  private get likeIcon(): Locator {
    return this.element.locator(".dx-icon-like");
  }

  private get cells(): Locator {
    return this.element.locator(".gridcell");
  }


  constructor(element: Locator) {
    super(element);
  }

  async getTennisPlayerTable(): Promise<void>{
    return PageActions.click(this.likeIcon);
  }

  async countCells(): Promise<number>{
    return PageActions.count(this.cells);
  }
}