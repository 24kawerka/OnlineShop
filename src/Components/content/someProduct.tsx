import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { PreloaderFullScreen } from '../../Other/preloader/preloader';
import { addItem } from '../../redux/cartReducer';
import { getReviewsThunk, getSomeProductThunk } from '../../redux/createThunk';
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import s from './someProduct.module.scss'

type propsType = {
    productId: number
}

export const SomeProduct = (props: propsType) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSomeProductThunk(props.productId))
    }, [])
    useEffect(() => {
        dispatch(getReviewsThunk)
    }, [])

    const someProduct = useSelector((state: any) => state.someProduct.someProduct)
    const stateCart = useSelector((state: any) => state.cart.cart.map((item: any) => item.id))
    const stateReviews = useSelector((state: any) => state.reviews.reviews)
    if (someProduct === null) {
        return null
    }
    return (

        <div>
            <PreloaderFullScreen />
            <div className={s.container}>
                <div className={s.title_block}>
                    <h3>{someProduct.title}</h3>
                    <img src={someProduct.photo} alt='' className={s.photo} />
                </div>
                
                <div className={s.info_block}>
                    <div className={s.price_info}>Price:   {someProduct.price} grn</div>
                    <ReactStars
                        value={someProduct.rating}
                        activeColor={'#fad105'}
                        size={30}
                        edit={false}
                    />
                    <div className={s.product_info}>Screen diagonal: {someProduct.screen_diagonal}</div>
                    <div className={s.product_info}>Screen resolution: {someProduct.screen_resolution}</div>
                    <div className={s.product_info}>Camera: {someProduct.camera}</div>
                    <div className={s.product_info}>Number of Cores: {someProduct.Number_of_Cores}</div>
                    <div className={s.product_info}>Inner memory: {someProduct.inner_memory}</div>
                    <div className={s.product_info}>Protection standard: {someProduct.Protection_standard}</div>
                    {stateCart.includes(someProduct.id) ? <button className="btn btn-success"
                        style={{ width: '300px', height: '100px', marginTop: '40px' }}
                    ><p className={s.button_text}>Added</p></button> :
                        <button onClick={() => dispatch(addItem(someProduct))}
                            className='btn btn-dark'
                            style={{ width: '300px', height: '100px', marginTop: '40px' }}
                        > <p className={s.button_text}>Add to Cart</p></button>}
                </div>
                <div className={s.reviews_block}>
                    <h3 className={s.reviews_title}>REVIEWS FROM USERS</h3>
                    <NavLink to={`/product/${someProduct.id}/new_review`}>
                        <button className="btn btn-primary">
                            write review
                    </button>
                    </NavLink>
                    {stateReviews.length === 0 ?
                        <p className={s.product_info}>No reviews, you can be first!</p> :
                        stateReviews.filter((item: any) => Number(item.productId) === Number(someProduct.id)).map((item: any) => (
                            <div key={item.id} className={s.review}>
                                <div className={s.user_info}>
                                    <img src='https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png'
                                        alt='' className={s.user_logo} />
                                    <h5>{item.name}</h5>
                                </div>
                                <ReactStars
                                    value={Number(item.rating)}
                                    activeColor={'#fad105'}
                                    size={30}
                                    edit={false}
                                />
                                <div className={s.user_message}>{item.message}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >

    )
}

