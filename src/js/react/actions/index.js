export const selectBrand = (brand) => {
    return {
        type: "BRAND_SELECTED",
        payload: brand
    }
};

export const selectCategory = (category) => {
    return {
        type: "CATEGORY_SELECTED",
        payload: category
    }
};
