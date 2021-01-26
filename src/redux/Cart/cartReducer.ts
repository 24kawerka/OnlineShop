import { InitialStateCartType, ProductInfoType } from "../../Types/types"
import { ADD_TO_CART, DECREMENT, DELETE_FROM_CART, INCREMENT, DELETE_ALL_ITEMS } from "../Utils/actionTypes"

const InitialStateCart: InitialStateCartType = {
    cart: [],
    totalPrice: 0,
}

const addItem = (p: ProductInfoType) => {
    return {
        type: ADD_TO_CART,
        p,
    }
}

const deleteItem = (p: ProductInfoType, index: number) => {
    return {
        type: DELETE_FROM_CART,
        p,
        index
    }
}

const increment = (p: ProductInfoType, index: number) => {
    return {
        type: INCREMENT,
        p,
        index
    }
}
const decrement = (p: ProductInfoType, index: number) => {
    return {
        type: DECREMENT,
        p,
        index
    }
}
const deleteAllItems = () => {
    return {
        type: DELETE_ALL_ITEMS,
    }
}


type CartReducerActionType = {
    type: "ADD_TO_CART";
    p: ProductInfoType;

}

type CartDeleteReducerActionType = {
    type: "DELETE_FROM_CART";
    p: ProductInfoType;
    index: number

}
type IncrementActionType = {
    type: "INCREMENT";
    p: ProductInfoType;
    index: number

}
type DecrementActionType = {
    type: "DECREMENT";
    p: ProductInfoType;
    index: number

}
type DeleteAllItemsActionType = {
    type: "DELETE_ALL_ITEMS";
}


type CartReducerAC = CartReducerActionType | CartDeleteReducerActionType |
    IncrementActionType | DecrementActionType | DeleteAllItemsActionType



const cartReducer = (state = InitialStateCart, action: CartReducerAC) => {
    switch (action.type) {
        case ADD_TO_CART:
            action.p.itemNumber = 1
            return {
                ...state,
                cart: [...state.cart, action.p,],
                totalPrice: state.totalPrice + Number(action.p.price),
            }

        case DELETE_FROM_CART:
            return {
                cart: [...state.cart.filter((item: any) => item.id !== action.p.id)],
                totalPrice: state.totalPrice - Number(action.p.price) * state.cart[action.index].itemNumber,
            }
        case INCREMENT:
            state.cart[action.index].itemNumber = state.cart[action.index].itemNumber + 1
            return {
                ...state,
                totalPrice: state.totalPrice + Number(action.p.price),
            }
        case DECREMENT:
            state.cart[action.index].itemNumber = state.cart[action.index].itemNumber - 1
            return {
                ...state,
                totalPrice: state.totalPrice - Number(action.p.price),
            }
        case DELETE_ALL_ITEMS:
            state.cart.length = 0
            return {
                ...state,
                totalPrice: 0
            }


        default: return state
    }
};

export { addItem, deleteItem, increment, decrement, deleteAllItems, cartReducer, }