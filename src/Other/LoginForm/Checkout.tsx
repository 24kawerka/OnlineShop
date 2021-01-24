import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteAllItems } from '../../redux/cartReducer'
import { postCheckoutThunk } from '../../redux/createThunk'
import { PreloaderFullScreen } from '../preloader/preloader'
import s from './Login.module.scss'


export const Checkout = () => {
    const stateCart = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm()
    type userInfo = {
        firstName: string,
        tel: number,
        email: string
    }
    const onSubmit = (userInfo: userInfo, e: any) => {
        stateCart.userInfo = userInfo //useless
        
        dispatch(postCheckoutThunk(stateCart))
        dispatch(deleteAllItems())
        e.target.reset()
        alert('Thanks for your choice, our operator will call you')


    }

    return (
        <div>
            <PreloaderFullScreen />
            {stateCart.cart.length === 0 ?//selector 
                <div >
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
                                style={{ height: '40px', width: '300px' }}
                                placeholder='Your First Name'
                                ref={register({ required: true })} />
                            {errors.firstName && errors.firstName.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <div>
                            <label className="form-label">Last Name</label>
                            <input name="lastname" type="text" className="form-control"
                                style={{ height: '40px', width: '300px' }}
                                placeholder='Your Last Name'
                                ref={register({ required: true })} />
                            {errors.lastname && errors.lastname.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <div>
                            <label className="form-label">Phone number</label>
                            <input name="tel" type="tel" className="form-control"
                                placeholder='063 123 45 67'
                                style={{ height: '40px', width: '300px' }}
                                ref={register({ required: true })} />
                            {errors.tel && errors.tel.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input name="email" type="email" className="form-control"
                                style={{ height: '40px', width: '300px' }}
                                placeholder='example@gmail.com'
                                ref={register({ required: true })} />
                            {errors.email && errors.email.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <div>
                            <label className="form-label">City</label>
                            <input name="city" type="text" className="form-control"
                                placeholder='City Name  '
                                style={{ height: '40px', width: '300px' }}
                                ref={register({ required: true })} />
                            {errors.city && errors.city.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <div className={s.button}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>}
        </div>

    )
}