import { LIMIT } from "../constants/PaginationConstant"
import { SET_CURRENT_PAGE } from "./actionTypes"

export type InitialPaginationStateType = {
    limitProducts: number,
    currentPage: number
}
const InitialPaginationState = {
    limitProducts: LIMIT,
    currentPage: 1
}

export const paginationReducer = (state = InitialPaginationState, action: any) => {
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
export const setCurrentPage = (p: number) => {
    return {
        type: SET_CURRENT_PAGE,
        p
    }


}