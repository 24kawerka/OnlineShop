import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PreloaderFullScreen } from '../../Utils/preloader/Preloader';
import { decrement, deleteAllItems, deleteItem, increment } from '../../redux/Cart/cartReducer';
import { ProductInfoType } from '../../Types/types';
import s from './cart.module.scss'
import cartSelector from '../../redux/Cart/cartSelector';

// folder UpperCase
const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector(cartSelector.getCart); // 
    //const state = useSelector(selectorGetCart); // 

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
                        <h3 className={s.total}> Total:{state.totalPrice} UAH</h3>
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
                    {state.cart.map((p: ProductInfoType, index: number) => (
                        <div key={p.id} className={s.container}>
                            <img src={p.photo} alt='' className={s.photoSmall} />
                            <div>
                                <NavLink to={`/product/${p.id}`} >
                                    <div className={s.title}>{p.title}</div>
                                </NavLink>
                                <div className={s.price}>{p.price} </div>
                                <button onClick={() => dispatch(deleteItem(p, index))}
                            
                                    className="btn btn-primary">
                                          {
                                    // () => dispatch(deleteItem(p, index) on the top
                                }
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
export { Cart }