import { Atom, PageActions } from "@n-able/atoms";
import { Locator } from "@playwright/test";

export class NewAppGrid extends Atom {
 
  private get tennisPlayers(): Locator {
    return this.element.locator(".dx-treeview-node >> nth=3");
  }

  private get cells(): Locator {
    return this.element.locator(".gridcell");
  }

   private get icon(): Locator {
    return this.element.locator(".dx-icon");
  }


  constructor(element: Locator) {
    super(element);
  }

  async getTennisPlayerTable(): Promise<void>{
    return PageActions.click(this.tennisPlayers);
  }

  async countCells(): Promise<number>{
    return PageActions.count(this.cells);
  }

  async clickIcon(): Promise<void>{
    return PageActions.click(this.icon);
  }

}