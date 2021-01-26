import { AxiosResponse } from 'axios'
import { setAllProducts } from '../Products/allProductsReducer';
import { setProduct } from '../Products/productsReducer';
import { getReviews } from '../Products/reviewsReducer';
import { setResults } from './searchProductReducer';
import { getSomeProduct } from '../Products/someProductReducer';
import { toogleIsFetching } from './toogleisFetchingReducer';
import { getUsers } from '../Users/usersReducer';
import { instance } from '../../Constants/reduxConstans';

const ProductThunk = (currentPage: number, limitProducts: number, sortParam: any, order: string) =>
    async (dispatch: any) => {
        dispatch(toogleIsFetching(true))
        await instance.get(`/product?_sort=${sortParam}&_order=${order}&_page=${currentPage}&_limit=${limitProducts}`)
            .then((resp: AxiosResponse<any>) => {
                dispatch(toogleIsFetching(false))
                dispatch(setProduct(resp.data))
            })
            .catch(error => {
                console.log(error);
            });
    }
const AllProductThunk = () => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    await instance.get(`/product`)
        .then((resp: AxiosResponse<any>) => {
            dispatch(toogleIsFetching(false))
            dispatch(setAllProducts(resp.data))
        })
        .catch(error => {
            console.log(error);
        });
}
const getSearchProductsThunk = (searchItem: any) => async (dispatch: any) => {
    await instance.get(`/product`)
        .then((resp: AxiosResponse<any>) => {
            dispatch(setResults(resp.data, searchItem))
        }).catch(error => {
            console.log(error);
        });
}

const getReviewsThunk = async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    await instance.get('/reviews')
        .then((resp: AxiosResponse<any>) => {
            dispatch(toogleIsFetching(false))
            dispatch(getReviews(resp.data))
        })
}

type UserType = {
    firstName: string,
    secondName: string,
    email: string,
    password: any,
    id: number
}
type MessageType = {
    name: string,
    message: string,
    rating: number,
    productId: number
}

const createAccountThunk = (user: UserType) => async (dispatch: any) => {
    await dispatch(toogleIsFetching(true))
    instance.post(`/users`, user)
        .then(dispatch(toogleIsFetching(false)))
        .catch(err => console.log(err.response.data))
}

const postNewReviewThunk = (message: MessageType) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    await instance.post(`/reviews`, message)
        .then(dispatch(toogleIsFetching(false)))
        .catch(err => console.log(err.response.data))
}

const getUsersThunk = async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    await instance.get(`/users`)
        .then((resp: any) => {
            dispatch(getUsers(resp.data))
            dispatch(toogleIsFetching(false))
        })
        .catch(err => console.log(err.response.data))
}

type StateCartType = {
    cart: Array<Object>,
    totalPrice: number,
    userInfo: Object,
    id: number
}

const postCheckoutThunk = (stateCart: StateCartType) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    await instance.post(`/checkout`, stateCart)
        .then(dispatch(toogleIsFetching(false)))
        .catch(err => console.log(err.resp.data))

}

const getSomeProductThunk = (id: number) => async (dispatch: any) => {
    dispatch(toogleIsFetching(true))
    await instance.get(`/product/${id}`)
        .then((resp: any) => {
            dispatch(getSomeProduct(resp))
            dispatch(toogleIsFetching(false))
        })
        .catch(err => console.log(err.resp.data))
}
export {
    ProductThunk, AllProductThunk, getSearchProductsThunk, getReviewsThunk, createAccountThunk, postNewReviewThunk,
    getUsersThunk, postCheckoutThunk, getSomeProductThunk
}