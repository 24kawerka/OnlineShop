import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PreloaderFullScreen } from '../../Other/preloader/preloader';
import { decrement, deleteAllItems, deleteItem, increment } from '../../redux/cartReducer';
import { pType } from '../../Types/types';
import s from './cart.module.scss'

export const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.cart)
    return (
        <div>
            <PreloaderFullScreen />
            {state.cart.length === 0 ?
                <div>
                    <div className={s.someText}>Your cart is empty!</div>
                    <NavLink to='/home'>
                        <button className="btn btn-primary">go shopping</button>
                    </NavLink>
                </div> :
                <div>
                    <div className={s.total_container}>
                        <h3 className={s.total}> Total:{state.totalPrice} grn</h3>
                        <NavLink to='/checkout'>
                            <button className="btn btn-primary"
                                style={{ marginRight: '20px', height: '35px' }}
                            >Checkout</button>
                        </NavLink>
                        <button onClick={() => dispatch(deleteAllItems())}
                            className="btn btn-danger"
                            style={{ marginRight: '20px', height: '35px' }}
                        >
                            Delete All</button>
                    </div>
                    {state.cart.map((p: pType, index: number) => (
                        <div key={p.id} className={s.container}>
                            <img src={p.photo} alt='' className={s.photoSmall} />
                            <div>
                                <NavLink to={`/product/${p.id}`} >
                                    <div className={s.title}>{p.title}</div>
                                </NavLink>
                                <div className={s.price}>{p.price} grn</div>
                                <button onClick={() => dispatch(deleteItem(p, index))}
                                    className="btn btn-primary">
                                    delete from cart
                                </button>
                                <div>
                                    {p.itemNumber === 1 ? <button className="btn btn-link"
                                        style={{ textDecoration: "none", marginRight: '10px' }}
                                    >-</button> :
                                        <button
                                            className="btn btn-link"
                                            style={{ textDecoration: "none", marginRight: '10px' }}
                                            onClick={() => dispatch(decrement(p, index))}>-</button>}
                                    <span>{p.itemNumber}</span>
                                    <button className="btn btn-link"
                                        style={{ textDecoration: "none", marginLeft: '10px' }}
                                        onClick={() => dispatch(increment(p, index))}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    )
                    )
                    }
                </div>}
        </div>
    )
}
