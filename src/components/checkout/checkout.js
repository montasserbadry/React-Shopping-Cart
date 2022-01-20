import React from 'react'
import "../../css/checkout/checkout.css"
import Inputs from './../Inputs/Inputs';

function Checkout(props) {
    return (
        <>
            {props.showForm && <div className='checkout-form'>
                <span className="close-icon" onClick={() => props.setShowForm(false)}>&times;</span>
                <form onSubmit={props.orderSubmit}>

                    <Inputs
                        label="Name"
                        type="text"
                        name="name"
                        onChange={props.handleChange}
                    />
                    <Inputs
                        label="Email"
                        type="email"
                        name="email"
                        onChange={props.handleChange}
                    />
                    <div>
                        <button type="submit"> Checkout</button>
                    </div>
                </form>
            </div>}
        </>
    )
}


export default Checkout;