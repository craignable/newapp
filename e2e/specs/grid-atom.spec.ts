import { PageActions } from "@n-able/atoms";
import { test, Page, expect } from "@playwright/test";
import { NewAppOverview } from "../../src/page-objects/new-app-overview.po";


test.describe("expanded grid >",async ()=>   {
  let page: Page;
  let newApp: NewAppOverview;

  test.beforeAll(async ({ browser }) => {
    page = await PageActions.openNewBrowserAndTab(browser);
  });

  test.describe("Default State >", () => {
    test.beforeAll(async () => {
      newApp = new NewAppOverview(page);
    });

    test.only("click expander for data",async () => {
      expect(await newApp.treeView.hover()); 
      expect(await newApp.treeView.hover()); 
      expect(await newApp.treeView.hover()); 

    });
  });
});
