import { SET_ASC_ORDER, SET_DESC_ORDER, SET_DESC_RATING_ORDER } from './actionTypes'

type InitialSortingStateType = {
    sortParam: string,
    order: string
}
const InitialSortingState: InitialSortingStateType = {
    sortParam: 'id',
    order: 'asc'
}
const SortingReducer = (state = InitialSortingState, action: any) => {
    switch (action.type) {
        case SET_ASC_ORDER:
            return {
                sortParam: action.sortParam,
                order: 'asc'
            }
        case SET_DESC_ORDER:
            return {
                sortParam: 'price',
                order: 'desc'
            }
        case SET_DESC_RATING_ORDER:
            return {
                sortParam: 'rating',
                order: 'desc'
            }

        default: return state
    }
}
const set_asc_order = (sortParam: string) => {
    return {
        type: SET_ASC_ORDER,
        sortParam
    }
}
const set_desc_order = () => {
    return {
        type: SET_DESC_ORDER,
    }
}
const set_desc_rating_order = () => {
    return {
        type: SET_DESC_RATING_ORDER,
    }
}
export { SortingReducer, set_asc_order, set_desc_order, set_desc_rating_order }
export type { InitialSortingStateType }