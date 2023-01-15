import { CategoryType } from "./models.types";

export const CategoriesNormalizer = (data: CategoryType[]): CategoryType[] => {
    return data.map(({ id, name }) => ({
        id,
        name,
    }));
};
