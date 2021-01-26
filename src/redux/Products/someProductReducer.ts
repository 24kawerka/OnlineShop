import { GET_SOME_PRODUCT } from "../Utils/actionTypes"

type InitialSomeProductType = {
    someProduct: null | Object
}
const InitialState: InitialSomeProductType = {
    someProduct: null
}
const getSomeProductReducer = (state = InitialState, action: any) => {
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
const getSomeProduct = (someProduct: Object) => {
    return {
        type: GET_SOME_PRODUCT,
        someProduct
    }
}
export { getSomeProductReducer, getSomeProduct }
export type { InitialSomeProductType }