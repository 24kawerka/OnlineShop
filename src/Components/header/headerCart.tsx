import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux'


// Intl.NumberFormat

export const HeaderCart = () => {
    const state = useSelector((state: any) => state.cart)
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    <span>(items:{state.cart.length})</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item disabled><span> items:{state.cart.length}, cost: {state.totalPrice} UAH</span></Dropdown.Item>
                    <Dropdown.Item href="/cart">Сart</Dropdown.Item>
                    <Dropdown.Item href="/checkout">Checkout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>

    )
}