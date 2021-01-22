import React from 'react'
import { NavLink } from 'react-router-dom'
import './categories.scss'

export const Categories = () => {
    return (
        <div className='categories'>
            <div className='categories__element'>
                <NavLink to='/new_product' className='link'>NEW PRODUCT</NavLink>
            </div>
            <div className='categories__element'>
                <NavLink to='/specials' className='link'>SPECIALS</NavLink>
            </div>
            <div className='categories__element'>
                <NavLink to='/best_seller' className='link'>BEST SELLER</NavLink>
            </div>
            <div className='categories__element'>
                <NavLink to='/about_us' className='link'>ABOUT US</NavLink>
            </div>
            <div className='categories__element'>
                <NavLink to='/blog' className='link'>BLOG</NavLink>
            </div>
            <div className='categories__discount'>
                20% cells for everythink
        </div>
        </div>
    )
}




