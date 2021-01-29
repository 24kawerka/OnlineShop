import React from 'react'
import { NavLink } from 'react-router-dom';
import { SortingButton } from '../../../Utils/sortingButton/SortingButton';
import { ProductInfoType } from '../../../Types/types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/Cart/cartReducer';
import s from './../../Content/popular-product/popular-products.module.scss'
import cartSelector from './../../../redux/Cart/cartSelector'
const ReactStars: any = require("react-rating-stars-component").default;


const SearchResult = (props: any) => {
    const dispatch = useDispatch()
    const resultProducts = props.location.state.resultSearch
    let cartItems = useSelector(cartSelector.getCartItems)
    cartItems = cartItems.map((item: any) => item.id)


    return (
        <div className='container'>
            <SortingButton />
            <div className='row'>
                {resultProducts
                    .map((p: ProductInfoType) => (
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
                                    {cartItems.includes(p.id) ? <button className="btn btn-success">Added</button> :
                                        <button onClick={() => dispatch(addItem(p))} className='btn btn-dark'
                                        > Add to Cart</button>}
                                </div>
                            </div>
                        </div>
                    )
                    )}
            </div>
        </div >
    )
}
export { SearchResult }