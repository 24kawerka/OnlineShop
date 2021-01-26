import { GET_REVIEWS, GET_USERS, SET_PRODUCT, SORT_BY } from '../redux/Utils/actionTypes'

type ProductAction = {
    type: typeof SET_PRODUCT;
    product: Array<{ id: number, photo: string, title: string, price: number }>
}
type SortByAction = {
    type: typeof SORT_BY;
    value: string
}
type ProductTypeAction = ProductAction | SortByAction

type InitialStateType = {
    product: Array<{ id: number, photo: string, title: string, price: number }>,
}
type InitialStateCartType = {
    cart: Array<{ photo: string, title: string, price: number, id: number, itemNumber: number }>,
    totalPrice: number,
}
type IdType = { productId: number }
type SomeProductType = {
    photo: string | undefined,
    title: string | undefined,
    price: string | undefined,
    screen_diagonal: string | undefined,
    screen_resolution: string | undefined,
    camera: string | undefined,
    Number_of_Cores: string | undefined,
    inner_memory: string | undefined,
    Protection_standard: string | undefined,
    reviews: Array<{ id: number, name: string, message: string, rating: number }>
}
type ProductInfoType = { photo: string, title: string, price: number, id: number, itemNumber: number, rating: number }

type ReviewsAction = {
    type: typeof GET_REVIEWS;
    reviews: Array<{ name: string, message: string, rating: string, productId: string, id: number }>
}
type ReviewsTypeAction = ReviewsAction

type InitialReviewsType = {
    reviews: Array<{ name: string, message: string, rating: string, productId: string, id: number }>
}
type InitialUsersStateType = {
    users: Array<{ firstName: string, lastName: string, email: string, password: string, id: number }>
}
type UsersActionType = {
    type: typeof GET_USERS,
    users: Array<{ firstName: string, lastName: string, email: string, password: string, id: number }>
}

export type {
    ProductTypeAction, InitialStateType, InitialStateCartType, IdType, SomeProductType, ProductInfoType,
    ReviewsTypeAction, InitialReviewsType, InitialUsersStateType, UsersActionType
}