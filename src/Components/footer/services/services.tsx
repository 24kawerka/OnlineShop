import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../footer.module.scss'

export const Services = () => {
    return (
        <div className={s.footer__element}>
            <span>services</span>
            <ul className={s.footer__ul} >
                <li className={s.footer__li}>
                    <NavLink to='/about_us' className={s.link}>About Us</NavLink></li>
                <li className={s.footer__li}>
                    <NavLink to='/services/contact_us' className={s.link}>Contact Us</NavLink></li>
                <li className={s.footer__li}>
                    <NavLink to='/services/information' className={s.link}>Information</NavLink></li>
                <li className={s.footer__li}>
                    <NavLink to='/services/privacy_&_policy' className={s.link}>Privacy & Policy</NavLink></li>
                <li className={s.footer__li}>
                    <NavLink to='/services/terms_&_conditions' className={s.link}> Terms & Conditions</NavLink></li>
            </ul>
        </div>

    )
}


