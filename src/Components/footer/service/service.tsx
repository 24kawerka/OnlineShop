import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../footer.module.scss'

export const Service = () => {
    return (
        <div className={s.footer__element}>
            <span>service</span>
            <ul className={s.footer__ul} >
                <li className={s.footer__li}><NavLink to='/service/wishlist' className={s.link}>Wishlist</NavLink></li>
                <li className={s.footer__li}><NavLink to='/service/search' className={s.link}>Search</NavLink></li>
                <li className={s.footer__li}><NavLink to='/service/all_colections' className={s.link}>All Collections</NavLink></li>
            </ul>
        </div>
    )
}