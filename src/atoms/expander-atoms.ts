import { Atom, PageActions } from "@n-able/atoms";
import { Locator } from "@playwright/test";

export class NewAppGrid extends Atom {
 

  private get content(): Locator {
    return this.element.locator(".dx-treeview-item-without-checkbox >> nth=2");
  }

  private get cells(): Locator {
    return this.element.locator(".gridcell");
  }


  constructor(element: Locator) {
    super(element);
  }

  async getTennisPlayerTable(): Promise<void>{
    return PageActions.click(this.content);
  }

  async countCells(): Promise<number>{
    return PageActions.count(this.cells);
  }
}