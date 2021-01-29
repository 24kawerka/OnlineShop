import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import cartSelector from '../../redux/Cart/cartSelector'



const HeaderCart = () => {
    const cartItems = useSelector(cartSelector.getCartItems)
    const totalPriceCart = useSelector(cartSelector.getTotalPrice)
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    <span>(items:{cartItems.length})</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item disabled><span> items:{cartItems.length}, cost: {totalPriceCart} UAH</span></Dropdown.Item>
                    <Dropdown.Item href="/cart">Сart</Dropdown.Item>
                    <Dropdown.Item href="/checkout">Checkout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>

    )
}
export { HeaderCart }