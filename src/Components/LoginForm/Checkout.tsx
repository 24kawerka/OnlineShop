import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteAllItems } from '../../redux/Cart/cartReducer'
import { postCheckoutThunk } from '../../redux/Utils/createThunk'
import { PreloaderFullScreen } from '../../Utils/preloader/Preloader'
import s from './Login.module.scss'
import cartSelector from '../../redux/Cart/cartSelector'


const Checkout = () => {
    const cartItems = useSelector(cartSelector.getCartItems)
    const stateCartLength = cartItems.length

    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm()
    type userInfo = {
        firstName: string,
        tel: number,
        email: string
    }
    const onSubmit = (userInfo: userInfo, e: any) => {
        cartItems.userInfo = userInfo
        dispatch(postCheckoutThunk(cartItems))
        dispatch(deleteAllItems())
        e.target.reset()
        alert('Thanks for your choice, our operator will call you')
    }

    return (
        <div>
            <PreloaderFullScreen />
            {stateCartLength === 0 ?
                <div>
                    <div className={s.someText}>Your cart is empty!</div>
                    <NavLink to='/home'>
                        <button className="btn btn-primary">go shopping</button>
                    </NavLink>
                </div> :
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="form-label">First Name</label>
                            <input name="firstName" type="text" className="form-control"
                                placeholder='Your First Name'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.firstName &&
                                <div className={s.error}>{errors.firstName.message}</div>}
                        </div>
                        <div>
                            <label className="form-label">Last Name</label>
                            <input name="lastName" type="text" className="form-control"
                                placeholder='Your Last Name'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.lastName &&
                                <div className={s.error}>{errors.lastName.message}</div>}
                        </div>
                        <div>
                            <label className="form-label">Phone number</label>
                            <input name="tel" type="tel" className="form-control"
                                placeholder='063 123 45 67'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.tel &&
                                <div className={s.error}>{errors.tel.message}</div>}
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input name="email" type="email" className="form-control"
                                placeholder='example@gmail.com'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.email &&
                                <div className={s.error}>{errors.tel.message}</div>}
                        </div>
                        <div>
                            <label className="form-label">City</label>
                            <input name="city" type="text" className="form-control"
                                placeholder='City Name  '
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.city &&
                                <div className={s.error}>{errors.city.message}</div>}
                        </div>
                        <div className={s.button}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>}
        </div>

    )
}
export { Checkout }