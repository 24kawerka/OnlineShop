import React, { useEffect } from 'react'
import { PaginationPage } from '../../../Utils/pagination/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addItem } from '../../../redux/Cart/cartReducer'
import { AllProductThunk, ProductThunk } from '../../../redux/Utils/createThunk'
import { ProductInfoType } from '../../../Types/types'
import s from './popular-products.module.scss'
import { SortingButton } from '../../../Utils/sortingButton/SortingButton'
import { rootReducerType } from '../../../redux/Utils/reducer'

const ReactStars: any = require("react-rating-stars-component").default;


const PopularProducts = React.memo(() => {
    const dispatch = useDispatch();
    const paginationState: any = useSelector((state: rootReducerType) => state.pagination)
    const sortParam: any = useSelector((state: rootReducerType) => state.sort)
    useEffect(() => {
        dispatch(ProductThunk(paginationState.currentPage, paginationState.limitProducts, sortParam.sortParam, sortParam.order))
    }, [dispatch])
    useEffect(() => {
        dispatch(AllProductThunk())
    }, [dispatch])

    const state = useSelector((state: any) => state.products.product)
    const stateCart = useSelector((state: any) => state.cart.cart.map((item: any) => item.id))

    return (
        <div>
            <div className={s.category}>POPULAR PRODUCTS</div>
            <SortingButton />
            <div className='row'>
                {state.map((p: ProductInfoType) => (
                    <div key={p.id} className='col-lg-3 col-md-3 col-sm-4 col-xs-12 mh-100' style={{ height: '500px' }} >
                        <div className={s.row__block}>
                            <img src={p.photo} alt='' width='180px' height='150px' className={s.photo} />
                            <NavLink to={`/product/${p.id}`} ><div className={s.title}>{p.title}</div></NavLink>
                            <ReactStars
                                value={p.rating}
                                activeColor={'#fad105'}
                                size={30}
                                edit={false}
                            />
                            <div>
                                <NavLink to={`/product/${p.id}/new_review`}>
                                    <button className="btn btn-primary text-decoration-none text-light">
                                        write review
                                </button>
                                </NavLink>
                                <div className={s.price}>{p.price} UAH</div>
                                {stateCart.includes(p.id) ? <button className="btn btn-success">Added</button> :
                                    <button onClick={() =>
                                        dispatch(addItem(p))
                                    } className='btn btn-dark'
                                    > Add to Cart</button>}
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            <PaginationPage />
        </div >
    )
})

export { PopularProducts }