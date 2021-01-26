import React from 'react';
import './../../App.scss'
import './header.scss'
import { SearchForm } from './search-form/Search-form';
import logo from './../../Assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { HeaderCart } from './HeaderCart';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/home'><img src={logo}
                className='logo' alt='logo' /></NavLink>
            <SearchForm />
            <div className='main-functions'>
                (+91) 012 1544 489
            <span className='main-functions__element'>Customer Support</span>
            </div>

            <Dropdown className='main-functions'>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    <span>My Account</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/account/login">Log in</Dropdown.Item>
                    <Dropdown.Item href="/account/register">Create account</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className='main-functions'>
                <NavLink to='/cart' className='link'>
                    My Cart
                    </NavLink>
                <HeaderCart />
            </div>
        </header>
    )
}
export { Header }