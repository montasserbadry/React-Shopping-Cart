import React from 'react';
import "../../css/products/products.css";

 function Products(props) {
    //  console.log(props);
    return (
        <div className="pro-wrapper"> {props.products.map(product => {
           return (
            <div className='pro-item' key={product.id}>
            <img src={product.imgurl} alt={product.title} />
            <div className='pro-desc'>
            <p>{product.title}</p>
            <span>{product.price}</span>
            </div>
            <button>Add To Cart</button>
            </div>
           
            )
        })
    }
        </div>
    )
}



export default Products ;