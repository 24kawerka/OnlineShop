import React from 'react'
import { NavLink } from 'react-router-dom';
import { SortingButton } from '../../../Other/sortingButton/sortingButton';
import { pType } from '../../../Types/types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/cartReducer';
import s from './../../content/popular-product/popular-products.module.scss'
const ReactStars: any = require("react-rating-stars-component");


export const SearchResult = (props: any) => {
    const dispatch = useDispatch()
    const resultSearch = props.location.state.resultSearch
    const stateCart = useSelector((state: any) => state.cart.cart.map((item: any) => item.id))

    return (
        <div className='container'>
            <SortingButton />
            <div className='row'>
                {resultSearch.map((p: pType) => (
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
                            <div className={s.row__element}>
                                <NavLink to={`/product/${p.id}/new_review`}>
                                    <button className="btn btn-primary text-decoration-none text-light">
                                        write review
                                </button>
                                </NavLink>
                                <div className={s.price}>{p.price}UAH</div>
                                {stateCart.includes(p.id) ? <button className="btn btn-success">Added</button> :
                                    <button onClick={() => dispatch(addItem(p))} className='btn btn-dark'
                                    > Add to Cart</button>}
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            {/* <PaginationPage /> */}

        </div >
    )
}