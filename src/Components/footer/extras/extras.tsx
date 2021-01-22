import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../footer.module.scss'

export const Extras = () => {
    return (

        <div className={s.footer__element}>
            <span>extras</span>
            <ul className={s.footer__ul} >
                <li className={s.footer__li}><NavLink to='/extras/news' className={s.link}>News</NavLink></li>
                <li className={s.footer__li}><NavLink to='/extras/special_product' className={s.link}>Special Product</NavLink></li>
                <li className={s.footer__li}><NavLink to='/extras/featured_product' className={s.link}>Featured Product</NavLink></li>
                <li className={s.footer__li}><NavLink to='/new_product' className={s.link}>New Product</NavLink></li>
            </ul>
        </div>
    )
}