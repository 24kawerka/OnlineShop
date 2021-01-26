import { SET_RESULT, SET_VALUE } from "./actionTypes"

const InitialSearchState: InitialSearchStateType = {
    resultSearch: [],
    value: ''
}
type InitialSearchStateType = {
    resultSearch: Array<Object>,
    value: null | string
}

type SearchProductActionType = SetResultType | SetValueType

type SetResultType = {
    type: typeof SET_RESULT,
    resultItems: Array<Object>,
    searchItem: string
}
type SetValueType = {
    type: typeof SET_VALUE,
    value: string
}
const searchProductReducer = (state = InitialSearchState, action: SearchProductActionType): InitialSearchStateType => {
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
const setResults = (resultItems: any, searchItem: string) => {
    return {
        type: SET_RESULT,
        resultItems,
        searchItem
    }
}
const setValue = (value: any) => {
    return {
        type: SET_VALUE,
        value
    }
}
export { searchProductReducer, setResults, setValue }
export type { InitialSearchStateType }