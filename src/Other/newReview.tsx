import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postNewReviewThunk } from '../redux/createThunk';
import s from './LoginForm/Login.module.scss'
type NewReviewProps = {
    productId: string
}

export const NewReview = (props: NewReviewProps) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm()
    const productId = props.productId
    const onSubmit = (message: any, e: any) => {
        message.productId = productId
        dispatch(postNewReviewThunk(message))
        e.target.reset()

    }
    return (
        <div>
            <h1>New Review</h1>
            <h2>Your feedback is very important to us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h5>Name</h5>
                    <input className="form-control" type='text' style={{ height: '40px', width: '300px', marginBottom: '40px' }}
                        name='name' ref={register({ required: true })} />
                    {errors.message && errors.message.type === 'required' &&
                        <div className={s.error}>This field is required!</div>}
                </div>
                <div className="form-group">
                    <h5>Message</h5>
                    <textarea className="form-control" style={{ height: '100px', width: '500px', marginBottom: '40px' }}
                        name='message' ref={register({ required: true, minLength: 10 })} />
                    {errors.message && errors.message.type === 'required' &&
                        <div className={s.error}>This field is required!</div>}
                    {errors.message && errors.message.type === 'minLength' &&
                        <div className={s.error}>This field must have more than 10 symbols!</div>}
                </div>
                <div>
                    <h5>Rating</h5>
                    <select style={{ height: '40px', width: '70px', marginBottom: '40px' }}
                        className="form-control" name='rating' ref={register({ required: true })}>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    {errors.rating && errors.rating.type === 'required' &&
                        <div className={s.error}>This field is reauired!</div>}
                </div>
                <button className="btn btn-primary" type='submit'>Send</button>

            </form>
        </div>
    )
}