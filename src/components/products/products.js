import React from 'react';
import "../../css/products/products.css";
import { useState } from "react";
import ProductModal from './ProductModal';

function Products(props) {
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct(false)
    }
    return (
        <div className="pro-wrapper">
            {props.products.map(product => (

                <div className='pro-item' key={product.id}>
                    <button href='#' onClick={() => openModal(product)}>
                        <img src={product.imgurl} alt={product.title} />
                    </button>
                    <div className='pro-desc'>
                        <p>{product.title}</p>
                        <span>${product.price}</span>
                    </div>
                    <button onClick={() => props.addToCart(product)}>Add To Cart</button>
                </div>
            )

            )
            }
            <ProductModal product={product} closeModal={closeModal} />
        </div>
    )
}



export default Products;