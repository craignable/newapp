import { Locator } from "@playwright/test";

import { Atom, ParentElement } from "@n-able/atoms";

export interface IAtomClass<T extends Atom> {
  new (element: Locator): T;
  CSS_CLASS: string;
  findIn<M extends Atom>(atomClass: IAtomClass<M>, parentElement: ParentElement, index?: number): M;
}