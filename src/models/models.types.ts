import { Models } from "@rematch/core";
// eslint-disable-next-line import/no-cycle
import { products } from "./products";

// ---------- products types ----------
export type CategoryType = {
    id: number;
    name: string;
};

export type GalleryState = {
    categories: CategoryType[];
    currentCategoryId: number | string | undefined;
};

// ---------- TOTAL ----------
export interface RootModel extends Models<RootModel> {
    products: typeof products;
}
