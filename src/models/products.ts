import { createModel } from "@rematch/core";
// eslint-disable-next-line import/no-cycle
import { GalleryState, RootModel } from "./models.types";

const INITIAL_GALLERY_STATES = {
    categories: [],
    currentCategoryId: undefined,
} as GalleryState;

export const products = createModel<RootModel>()({
    state: INITIAL_GALLERY_STATES,

    effects: dispatch => ({
        // async fetchCategories(): Promise<CategoryType[]> {
        //     const res = await axiosInstance.get('/categories', {params: {}})
        //     const normalizedData = CategoriesNormalizer(res.data)
        //     this.setCategories(normalizedData)
        //     this.setCurrentCategoryId(normalizedData[0].id)
        //     return (normalizedData)
        // },
    }),

    reducers: {
        // setCategories: (state, payload: CategoryType[]) => ({
        //     ...state,
        //     categories: payload,
        // }),
        // setCurrentCategoryId: (state, payload: number) => ({
        //     ...state,
        //     currentCategoryId: payload
        // }),
    },
});
