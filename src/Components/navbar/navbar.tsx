import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './navbar.module.scss'
import { navbarConstant } from '../../Constants/navbarConstants'

const Navbar = () => {
    return (
        <div className={s.navbar__block}>
            <ul>
                {navbarConstant.map((item: any) => {
                    return <li className={s.navbar__li} key={item.name}>
                        <NavLink to={item.link} className={s.link}>
                            {item.name}
                        </NavLink>
                    </li>
                })}
            </ul>
        </div>
    )
}
export { Navbar }

