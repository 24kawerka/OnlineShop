import { InitialStateType } from '../Types/types';
import { SET_ALL_PRODUCT } from './actionTypes';


export const InitialState: any = {
    totalCount: 0

}
export const allProductsReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_ALL_PRODUCT:
            return {
                ...state,
                totalCount: action.product.length
            };

        default: return state
    }
}
export const setAllProducts = (product: any) => {
    return {
        type: SET_ALL_PRODUCT,
        product
    }
}

