import { InitialStateCartType, pType } from "../Types/types"
import { ADD_TO_CART, DECREMENT, DELETE_FROM_CART, INCREMENT, DELETE_ALL_ITEMS } from "./actionTypes"

const InitialStateCart: InitialStateCartType = {
    cart: [],
    totalPrice: 0,
}
///
//
// style code !!!!!!!!!!!!!!!!!
//
//
export const addItem = (p: pType) => {
    return {
        type: ADD_TO_CART,
        p,
    }
}

export const deleteItem = (p: pType, index: number) => {
    return {
        type: DELETE_FROM_CART,
        p,
        index
    }
}

export const increment = (p: pType, index: number) => {
    return {
        type: INCREMENT,
        p,
        index
    }
}
export const decrement = (p: pType, index: number) => {
    return {
        type: DECREMENT,
        p,
        index
    }
}
export const deleteAllItems = () => {
    return {
        type: DELETE_ALL_ITEMS,
    }
}


type cartReducerActionType = {
    type: "ADD_TO_CART";
    p: pType;

}

type cartDeleteReducerActionType = {
    type: "DELETE_FROM_CART";
    p: pType;
    index: number

}
type incrementActionType = {
    type: "INCREMENT";
    p: pType;
    index: number

}
type decrementActionType = {
    type: "DECREMENT";
    p: pType;
    index: number

}
type deleteAllItemsActionType = {
    type: "DELETE_ALL_ITEMS";
}


type cartReducerAC = cartReducerActionType | cartDeleteReducerActionType |
    incrementActionType | decrementActionType | deleteAllItemsActionType



export const cartReducer = (state = InitialStateCart, action: cartReducerAC) => {
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

