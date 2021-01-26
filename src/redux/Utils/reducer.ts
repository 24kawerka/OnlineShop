import { combineReducers } from "redux";
import { ProductsReducer } from '../Products/productsReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartReducer } from "../Cart/cartReducer";
import { ReviewsReducer } from "../Products/reviewsReducer";
import { usersReducer } from "../Users/usersReducer";
import { ToogleisFetchingReducer, InitialIsFetchingStateType } from "./toogleisFetchingReducer";
import { InitialPaginationStateType, paginationReducer } from "./paginationReducer";
import { allProductsReducer, InitialStateAllProductsType } from "../Products/allProductsReducer";
import { SortingReducer, InitialSortingStateType } from "./sortingReducer";
import { searchProductReducer, InitialSearchStateType } from "./searchProductReducer";
import { getSomeProductReducer, InitialSomeProductType } from "../Products/someProductReducer";
import { InitialStateType, InitialStateCartType, InitialReviewsType, InitialUsersStateType } from './../../Types/types'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'cart', 'reviews', 'users']
}

export type rootReducerType = {
    products: InitialStateType,
    cart: InitialStateCartType,
    reviews: InitialReviewsType,
    users: InitialUsersStateType,
    toogleIsFetching: InitialIsFetchingStateType,
    pagination: InitialPaginationStateType,
    allProducts: InitialStateAllProductsType,
    sort: InitialSortingStateType,
    searchProduct: InitialSearchStateType,
    someProduct: InitialSomeProductType
}
const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: cartReducer,
    reviews: ReviewsReducer,
    users: usersReducer,
    toogleIsFetching: ToogleisFetchingReducer,
    pagination: paginationReducer,
    allProducts: allProductsReducer,
    sort: SortingReducer,
    searchProduct: searchProductReducer,
    someProduct: getSomeProductReducer
})
export default persistReducer(persistConfig, rootReducer);
