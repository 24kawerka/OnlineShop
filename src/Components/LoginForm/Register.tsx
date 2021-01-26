import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { createAccountThunk } from '../../redux/Utils/createThunk';
import { PreloaderFullScreen } from '../../Utils/preloader/Preloader';
import s from './Login.module.scss'


const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (user: any, e: any) => {
        dispatch(createAccountThunk(user))
        e.target.reset()
        setNumber(2)
    }
    const [numberState, setNumber] = useState(1)

    return (
        <div>
            <PreloaderFullScreen />
            {numberState === 1 ?
                <>
                    <h1>CREATE ACCOUNT</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3">
                        <div>
                            <h5 className="form-label">First Name</h5>
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
                            <h5 className="form-label">Last Name</h5>
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
                            <h5 className="form-label">Email</h5>
                            <input name="email" type="email" className="form-control"

                                placeholder='example@gmail.com'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required!'
                                    }
                                })} />
                            {errors.email &&
                                <div className={s.error}>{errors.email.message}</div>}
                        </div>
                        <div>
                            <h5 className="form-label">Password</h5>
                            <input name="password" type="password" className="form-control"
                                placeholder='create password'
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
                        <div className={s.button}>
                            <button type="submit" className="btn btn-primary">create account</button>
                        </div>
                    </form>
                </> : <div>Thank you for register!</div>
            }
        </div >
    )
}
export { Register }