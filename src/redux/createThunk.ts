import axios, { AxiosResponse } from 'axios'
import { setAllProducts } from './allProductsReducer';
import { setProduct } from './productsReducer';
import { getReviews } from './reviewsReducer';
import { setResults } from './searchProductReducer';
import { getSomeProduct } from './someProductReducer';
import { toogleIsFetching } from './toogleisFetchingReducer';
import { getUsers } from './usersReducer';

//axios instance (for default url request)

export const ProductThunk = (currentPage: number, limitProducts: number, sortParam: any, order: string) =>
    async (dispatch: any) => {
        dispatch(toogleIsFetching(true))
        axios.get(`http://localhost:3001/product?_sort=${sortParam}&_order=${order}&_page=${currentPage}&_limit=${limitProducts}`)
            .then((resp: AxiosResponse<any>) => {
                dispatch(toogleIsFetching(false))
                dispatch(setProduct(resp.data))
            })
            .catch(error => {
                console.log(error);
            });
    }
export const AllProductThunk = () => async (dispatch: any) => { //await asymc
   dispatch(toogleIsFetching(true))
    axios.get(`http://localhost:3001/product`)
        .then((resp: AxiosResponse<any>) => {
            dispatch(toogleIsFetching(false))
            dispatch(setAllProducts(resp.data))
        })
        .catch(error => {
            console.log(error);
        });
}

export const getSearchProductsThunk = (searchItem: any) => async (dispatch: any) => {
    axios.get(`http://localhost:3001/product`)
        .then((resp: AxiosResponse<any>) => {
            dispatch(setResults(resp.data, searchItem))
        }).catch(error => {
            console.log(error);
        });
}
export const getReviewsThunk = async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    axios.get('http://localhost:3001/reviews')
        .then((resp: AxiosResponse<any>) => {
            dispatch(toogleIsFetching(false))
            dispatch(getReviews(resp.data))

        })
}
type UserTypeFetchData = { // UpperCase = type
    firstName: string, // camelCase
    second_name: string, 
    email: string,
    password: any,
    id: number
}
type User {
    secondName: string; //
}

type messageType = {
    name: string,
    message: string,
    rating: number,
    productId: number
}
export const createAccountThunk = (user: userType) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    axios.post<UserTypeFetchData>(`http://localhost:3001/users`, user)
        .then(dispatch(toogleIsFetching(false)))
        .catch(err => console.log(err.response.data))
}
export const postNewReviewThunk = (message: messageType) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    axios.post(`http://localhost:3001/reviews`, message)
        .then(dispatch(toogleIsFetching(false)))
        .catch(err => console.log(err.response.data))
}
export const getUsersThunk = async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    axios.get(`http://localhost:3001/users`)
        .then((resp: any) => {
            dispatch(getUsers(resp.data))
            dispatch(toogleIsFetching(false))
        })
        .catch(err => console.log(err.response.data))
}
type stateCartType = {
    cart: Array<Object>,
    totalPrice: number,
    userInfo: Object,
    id: number
}
export const postCheckoutThunk = (stateCart: stateCartType) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    axios.post(`http://localhost:3001/checkout`, stateCart)
        .then(dispatch(toogleIsFetching(false)))
        .catch(err => console.log(err.resp.data))

}
export const getSomeProductThunk = (id: number) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    axios.get(`http://localhost:3001/product/${id}`)
        .then((resp: any) => {
            dispatch(getSomeProduct(resp))
            dispatch(toogleIsFetching(false))
        })
        .catch(err => console.log(err.resp.data))
}