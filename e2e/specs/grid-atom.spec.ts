import { PageActions } from "@n-able/atoms";
import { test, Page, expect } from "@playwright/test";
import { NewAppOverview } from "../../src/page-objects/new-app-overview.po";


test.describe("expandedgrid >",async ()=>   {
let page:Page;
let newApp: NewAppOverview;

test.beforeAll(async ({ browser }) => {
  page = await PageActions.openNewBrowserAndTab(browser);
});

test.describe("Default State >", () => {
  test.beforeAll(async () => {
    newApp = new NewAppOverview(page);
  });

  test.only("click expander for data",async () => {
    await newApp.tennisLogo.clickIcon();
    expect(await newApp.tennisLogo.getTennisPlayerTable());
  });

});
});
