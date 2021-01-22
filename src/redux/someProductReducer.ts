import { GET_SOME_PRODUCT } from "./actionTypes"

const InitialState = {
    someProduct: null
}
export const getSomeProductReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case GET_SOME_PRODUCT: {
            return {
                ...state,
                someProduct: action.someProduct.data
            }
        }
        default: return state
    }
}
export const getSomeProduct = (someProduct: Object) => {
    return {
        type: GET_SOME_PRODUCT,
        someProduct
    }
}