import { InitialStateType, ProductTypeAction } from '../Types/types';
import { SET_PRODUCT } from './actionTypes';


export const InitialState: InitialStateType = {
    product: [],
}
export const ProductsReducer = (state = InitialState, action: ProductTypeAction): InitialStateType => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product.map(p => p),
            };
        default: return state
    }
}
export const setProduct = (product: ProductTypeAction) => {
    return {
        type: SET_PRODUCT,
        product,
    }
}
