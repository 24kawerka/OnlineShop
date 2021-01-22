import { SET_RESULT, SET_VALUE } from "./actionTypes"

const InitialSearchState: InitialSearchStateType = {
    resultSearch: [],
    value: ''
}
type InitialSearchStateType = {
    resultSearch: Array<Object>,
    value: null | string
}

type searchProductActionType = setResultType | setValueType

type setResultType = {
    type: typeof SET_RESULT,
    resultItems: Array<Object>,
    searchItem: string
}
type setValueType = {
    type: typeof SET_VALUE,
    value: string
}
export const searchProductReducer = (state = InitialSearchState, action: searchProductActionType): InitialSearchStateType => {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                resultSearch: action.resultItems.filter((item: any) => item.title.toLowerCase().includes(action.searchItem.toLowerCase()))
            }

        case SET_VALUE:
            return {
                ...state,
                value: action.value
            }




        default: return state
    }
}
export const setResults = (resultItems: any, searchItem: string) => {
    return {
        type: SET_RESULT,
        resultItems,
        searchItem
    }
}
export const setValue = (value: any) => {
    return {
        type: SET_VALUE,
        value
    }
}