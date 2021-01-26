import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsersThunk } from '../../redux/Utils/createThunk';
import { rootReducerType } from '../../redux/Utils/reducer';
import { PreloaderFullScreen } from '../../Utils/preloader/Preloader';
import s from './Login.module.scss'




const Login = () => {
    const [numberState, SetNumber] = useState(1)
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    const state = useSelector((state: rootReducerType) => state.users.users)
    type DataType = {
        email: string,
        password: string
    }
    const onSubmit = (data: DataType, e: any) => {
        dispatch(getUsersThunk)
        const result = state.find((item: any) => item.email === data.email && item.password === data.password)
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
                            <input name="email" type="text" placeholder='email@example.com'
                                className="form-control" ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.email &&
                                <div className={s.error}>{errors.email.message}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input name="password" className="form-control" type="password" placeholder='Password'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }, minLength: {
                                        value: 8,
                                        message: 'Minimum number of symbols must be 8'
                                    }
                                })} />
                            {errors.password &&
                                <div className={s.error}>{errors.password.message}</div>}
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
export { Login }
