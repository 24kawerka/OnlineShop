import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsersThunk } from '../../redux/createThunk';
import { PreloaderFullScreen } from '../preloader/preloader';
import s from './Login.module.scss'




export const Login = () => {
    const [numberState, SetNumber] = useState(1)
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state.users.users)
    type dataType = {
        email: string,
        password: string
    }
    const onSubmit = (data: dataType, e: any) => {
        dispatch(getUsersThunk)
        const result = state.find((item: any) => item.email === data.email && item.password === data.password);

        //SetNumber(result ? 2 : 3)
        if (result === undefined) {
            SetNumber(3)
        } else {
            SetNumber(2)
        }

    }

    return (
        <div>
            <PreloaderFullScreen />
            {(numberState === 1) ?
                <div>
                    <h1 className='form-group'>LOGIN</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3">
                        <div className='form-group'>
                            <label className="form-label">Email</label>
                            <input name="email" type="text" placeholder='email@example.com' style={{ height: '40px', width: '300px' }}
                                className="form-control" ref={register({ required: true })} />
                            {errors.password && errors.password.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input name="password" className="form-control" type="password" placeholder='Password'
                                style={{ height: '40px', width: '300px' }}
                                ref={register({ required: {
                                    ///!!!!!!!!!!!!!!!!!!!!
                                    value: true,
                                    message: 'This field is required!'
                                }, minLength: {
                                    value: 8,
                                    message: 'Your password must have more 8 symbols'
                                } })} />
                            {errors.password &&
                                <div className={s.error}>{errors.password.message}</div>}
                            {errors.password && errors.password.type === 'required' &&
                                <div className={s.error}>This field is required!</div>}
                        </div>
                        <button className="btn btn-primary" type="submit" name='submit'
                            ref={register}>Log in</button>
                        <div className={s.or_text}>or</div>
                        <div className={s.link}>
                            <NavLink to='/account/register'>Create account</NavLink>
                        </div>
                    </form>
                </div> : (numberState === 2) ?
                    <div>
                        <h1>You are log in!</h1>
                    </div> :
                    <div>
                        <h1>Login or password is incorrect, try again!</h1>
                        
                    </div>
            }


        </div >
    )
}
