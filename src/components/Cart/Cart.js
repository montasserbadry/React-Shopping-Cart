import React from 'react'
import "../../css/Cart/Cart.css"

 function Cart(props) {
    return (
        <div className="cart-wrapper">
            <div className="cart-title"> {props.cartItems.length === 0 ? "Cart Is Empty" : <p>
         there is {props.cartItems.length} products in cart
            </p>}
            </div>
            <div className='cart-items'>
           {props.cartItems.map(item => (
               <div className="cart-item" key={item.id}>
               <img src={item.imgurl} alt="" />
               <div classNname="cart-info">
               <div>
               <p>{item.title}</p>
               <p>Qyt:{item.qty}</p>
               <p>price:${item.price}</p>
               </div>
               <button    onClick={() => props.toRemoveCart(item)}>
               Remove
               </button>
               </div>
               
               
               
               
               
               
               </div>
               ))}

            </div>
        </div>
    )
}




export default Cart ;