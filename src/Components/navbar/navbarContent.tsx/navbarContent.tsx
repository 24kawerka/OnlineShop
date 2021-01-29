import React, { useEffect } from 'react'
import { PaginationPage } from '../../../Utils/pagination/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addItem } from '../../../redux/Cart/cartReducer'
import { AllProductThunk, ProductThunk } from '../../../redux/Utils/createThunk'
import { ProductInfoType } from '../../../Types/types'
import s from './../../Content/popular-product/popular-products.module.scss'
import { SortingButton } from '../../../Utils/sortingButton/SortingButton'
import { rootReducerType } from '../../../redux/Utils/reducer'
import cartSelector from '../../../redux/Cart/cartSelector'
import productSelector from './../../../redux/Products/productSelector'
import utilsSelector from './../../../redux/Utils/utilsSelector'

const ReactStars: any = require("react-rating-stars-component").default;


const NavbarContent = React.memo(() => {
    const dispatch = useDispatch();
    const limitProducts = useSelector(utilsSelector.getLimitProducts)
    const currentPage = useSelector(utilsSelector.getCurrentPage)
    const sortParam: any = useSelector(utilsSelector.sortParam)
    const order: any = useSelector(utilsSelector.sortOrder)
    useEffect(() => {
        dispatch(ProductThunk(currentPage, limitProducts, sortParam, order))
    }, [dispatch])
    useEffect(() => {
        dispatch(AllProductThunk())
    }, [dispatch])

    const getProducts = useSelector(productSelector.getProducts)
    let cartItems = useSelector(cartSelector.getCartItems)
    cartItems = cartItems.map((item: any) => item.id)

    return (
        <div>
            <SortingButton />
            <div className='row'>
                {getProducts.map((p: ProductInfoType) => (
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
                                {cartItems.includes(p.id) ? <button className="btn btn-success">Added</button> :
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
export { NavbarContent }