import { GET_REVIEWS, GET_USERS, SET_PRODUCT, SORT_BY } from '../redux/actionTypes'

// TS type & interface
type ProductAction = {
    type: typeof SET_PRODUCT;
    product: Array<{ id: number, photo: string, title: string, price: number }>
}
type SortByAction = {
    type: typeof SORT_BY;
    value: string
}
export type ProductTypeAction = ProductAction | SortByAction

export type InitialStateType = {
    product: Array<{ id: number, photo: string, title: string, price: number }>,
}
export type InitialStateCartType = {
    cart: Array<{ photo: string, title: string, price: number, id: number, itemNumber: number }>,
    totalPrice: number,
}
export type IdType = { productId: number }
export type someProductType = {
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
export type pType = { photo: string, title: string, price: number, id: number, itemNumber: number, rating: number }//strange name

type ReviewsAction = {
    type: typeof GET_REVIEWS;
    reviews: Array<{ name: string, message: string, rating: string, productId: string, id: number }>
}
export type ReviewsTypeAction = ReviewsAction

export type InitialReviewsType = {
    reviews: Array<{ name: string, message: string, rating: string, productId: string, id: number }>
}
export type InitialUsersStateType = {
    users: Array<{ firstName: string, lastName: string, email: string, password: string, id: number }>
}
export type usersActionType = {
    type: typeof GET_USERS,
    users: Array<{ firstName: string, lastName: string, email: string, password: string, id: number }>
}