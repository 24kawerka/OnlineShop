import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PaginationPage } from '../../../Other/pagination/pagination'
import { PreloaderFullScreen } from '../../../Other/preloader/preloader'
import { SortingButton } from '../../../Other/sortingButton/sortingButton'
import { addItem } from '../../../redux/cartReducer'
import { ProductThunk } from '../../../redux/createThunk'
import { pType } from '../../../Types/types'
import s from './../navbar.module.scss'
//@ts-ignore
import ReactStars from "react-rating-stars-component";


export const Phones = () => {
    const dispatch = useDispatch();
    const paginationState: any = useSelector((state: any) => state.pagination)
    const sortParam: string = useSelector((state: any) => state.products.sortParam)
    useEffect(() => {
        dispatch(ProductThunk(paginationState.currentPage, paginationState.limitProducts, sortParam, 'asc'))
    }, [])
    const state = useSelector((state: any) => state.products.product)
    const stateCart = useSelector((state: any) => state.cart.cart.map((item: any) => item.id))

    return (
        <div className='container'>
            <PreloaderFullScreen />
            <SortingButton />
            <div className='row'>
                {state.map((p: pType) => (
                    <div key={p.id} className='col-lg-3 col-md-3 col-sm-4 col-xs-12'>
                        <div className={s.row__block}>
                            <img src={p.photo} alt='' width='180px' height='150px' className={s.photo} />
                            <NavLink to={`/product/${p.id}`} ><div className={s.title}>{p.title}</div></NavLink>
                            <ReactStars
                                value={p.rating}
                                activeColor={'#fad105'}
                                size={30}
                                edit={false}
                            />
                            <div className={s.row__element}>
                                <button className="btn btn-primary text-decoration-none text-light">
                                    write review
                                </button>
                                <div className={s.price}>{p.price}grn</div>
                                {stateCart.includes(p.id) ? <button className="btn btn-success">Added</button> :
                                    <button onClick={() => dispatch(addItem(p))} className='btn btn-dark'
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
}