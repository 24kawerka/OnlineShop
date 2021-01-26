import { SET_ALL_PRODUCT } from '../Utils/actionTypes';

type InitialStateAllProductsType = {
    totalCount: number
}

const InitialStateAllProducts: InitialStateAllProductsType = {
    totalCount: 0
}
type ActionType = {
    type: typeof SET_ALL_PRODUCT,
    product: any
}
const allProductsReducer = (state = InitialStateAllProducts, action: ActionType) => {
    switch (action.type) {
        case SET_ALL_PRODUCT:
            return {
                ...state,
                totalCount: action.product.length
            };

        default: return state
    }
}
const setAllProducts = (product: any) => {
    return {
        type: SET_ALL_PRODUCT,
        product
    }
}

export { InitialStateAllProducts, allProductsReducer, setAllProducts }
export type { InitialStateAllProductsType }