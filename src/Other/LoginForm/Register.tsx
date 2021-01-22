import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { createAccountThunk } from '../../redux/createThunk';
import { PreloaderFullScreen } from '../preloader/preloader';
import s from './Login.module.scss'


export const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (user: any, e: any) => {
        dispatch(createAccountThunk(user))
        e.target.reset()

    }

    return (
        <div>
            <PreloaderFullScreen />
            <h1>CREATE ACCOUNT</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3">
                <div>
                    <h5 className="form-label">First Name</h5>
                    <input name="firstName" type="text" className="form-control"
                        placeholder='Your First Name'
                        style={{ height: '40px', width: '300px' }}
                        ref={register({ required: true })} />
                    {errors.firstName && errors.firstName.type === 'required' &&
                        <div className={s.error}>This field is required!</div>}
                </div>
                <div>
                    <h5 className="form-label">Last Name</h5>
                    <input name="lastName" type="text" className="form-control"
                        placeholder='Your Last Name'
                        style={{ height: '40px', width: '300px' }}
                        ref={register({ required: true })} />
                    {errors.lastName && errors.lastName.type === 'required' &&
                        <div className={s.error}>This field is required!</div>}
                </div>
                <div>
                    <h5 className="form-label">Email</h5>
                    <input name="email" type="email" className="form-control"
                        style={{ height: '40px', width: '300px' }}
                        placeholder='example@gmail.com'
                        ref={register({ required: true })} />
                    {errors.email && errors.email.type === 'required' &&
                        <div className={s.error}>This field is required!</div>}
                </div>
                <div>
                    <h5 className="form-label">Password</h5>
                    <input name="password" type="password" className="form-control"
                        style={{ height: '40px', width: '300px' }}
                        placeholder='create password'
                        ref={register({ required: true, minLength: 8 })} />
                    {errors.password && errors.password.type === 'minLength' &&
                        <div className={s.error}>Your password must have more 8 symbols</div>}
                    {errors.password && errors.password.type === 'required' &&
                        <div className={s.error}>This field is required!</div>}
                </div>
                <div className={s.button}>
                    <button type="submit" className="btn btn-primary">create account</button>
                </div>
            </form>
        </div >
    )
}
