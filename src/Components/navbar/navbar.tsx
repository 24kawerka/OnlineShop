import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './navbar.module.scss'

export const Navbar = () => {
    return (<div className={s.navbar__block}>
        <ul>
            <li className={s.navbar__li}><NavLink to='/home' className={s.link}>Home</NavLink></li>
            <li className={s.navbar__li}><NavLink to='/catalog' className={s.link}>Catalog</NavLink></li>
            <li className={s.navbar__li}><NavLink to='/phones' className={s.link}>Phones</NavLink></li>
            <li className={s.navbar__li}><NavLink to='/games' className={s.link}>Games</NavLink></li>
            <li className={s.navbar__li}><NavLink to='/devices' className={s.link}>Devices</NavLink></li>
            <li className={s.navbar__li}><NavLink to='/laptops' className={s.link}>Laptops</NavLink></li>
        </ul>
    </div>
    )
}

