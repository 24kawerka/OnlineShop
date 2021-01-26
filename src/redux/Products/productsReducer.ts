import { InitialStateType, ProductTypeAction } from '../../Types/types';
import { SET_PRODUCT } from '../Utils/actionTypes';


const InitialState: InitialStateType = {
    product: [],
}
const ProductsReducer = (state = InitialState, action: ProductTypeAction): InitialStateType => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product.map(p => p),
            };
        default: return state
    }
}
const setProduct = (product: ProductTypeAction) => {
    return {
        type: SET_PRODUCT,
        product,
    }
}

export { InitialState, ProductsReducer, setProduct }