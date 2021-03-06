import React from 'react'
import "../../css/Cart/Cart.css"
import { useState } from 'react';
import Checkout from '../checkout/checkout';

function Cart(props) {
    const [showForm, setShowForm] = useState(false)

    const [value, setValue] = useState("")
    const orderSubmit = (e) => {
        e.preventDefault();

        const order = {
            name: value.name,
            email: value.email
        }
        console.log(order)
    }
    const handleChange = (e) => {
        console.log(e.target.name);
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    return (
        <div className="cart-wrapper">
            <div className="cart-title"> {props.cartItems.length === 0 ? "Cart Is Empty" : <p>
                there is {props.cartItems.length} products in cart</p>}
            </div>
            <div className='cart-items'>
                {props.cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imgurl} alt="" />
                        <div className="cart-info">
                            <div>
                                <p>{item.title}</p>
                                <p>Qyt:{item.qty}</p>
                                <p>price:${item.price}</p>
                            </div>
                            <button onClick={() => props.toRemoveCart(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {
                props.cartItems.length !== 0 && (
                    <div className='cart-footer'>
                        <div className='total'>Total :${props.cartItems.reduce((acc, p) => {
                            return acc + p.price
                        }, 0)}</div>
                        <button onClick={() => setShowForm(true)}>Select Product</button>
                    </div>
                )
            }
            <Checkout
                showForm={showForm}
                setShowForm={setShowForm}
                handleChange={handleChange}
                orderSubmit={orderSubmit} />
        </div>
    )
}




export default Cart;