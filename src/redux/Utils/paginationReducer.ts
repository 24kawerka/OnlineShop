import { CURRENTPAGE, LIMIT } from "../../Constants/ProductConstans"
import { SET_CURRENT_PAGE } from "./actionTypes"

type InitialPaginationStateType = {
    limitProducts: number,
    currentPage: number
}
const InitialPaginationState = {
    limitProducts: LIMIT,
    currentPage: CURRENTPAGE
}

const paginationReducer = (state = InitialPaginationState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.p
            }
        }
        default: return state
    }
}
const setCurrentPage = (p: number) => {
    return {
        type: SET_CURRENT_PAGE,
        p
    }
}
export { paginationReducer, setCurrentPage }
export type { InitialPaginationStateType }