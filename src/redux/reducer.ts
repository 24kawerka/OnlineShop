import { combineReducers } from "redux";
import { ProductsReducer } from './productsReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartReducer } from "./cartReducer";
import { ReviewsReducer } from "./reviewsReducer";
import { usersReducer } from "./usersReducer";
import { ToogleisFetchingReducer } from "./toogleisFetchingReducer";
import { paginationReducer } from "./paginationReducer";
import { allProductsReducer } from "./allProductsReducer";
import { SortingReducer } from "./sortingReducer";
import { searchProductReducer } from "./searchProductReducer";
import { getSomeProductReducer } from "./someProductReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'cart', 'reviews', 'users']
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
    someProduct:getSomeProductReducer
})
export default persistReducer(persistConfig, rootReducer);
