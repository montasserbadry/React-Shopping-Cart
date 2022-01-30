import React from 'react';
import "../../css/products/products.css";
import { useState,useEffect } from "react";
import ProductModal from './ProductModal';
import {connect} from 'react-redux'
import { fetchProducts } from '../../store/action/products';

function Products(props) {
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct(false)
    }
useEffect(() =>{
    props.fetchProducts
}, [])

    return (
        // <Bounce left>
        <div className="pro-wrapper">
            {props.products && props.products.length ? props.products.map(product => (
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

            ):"loading.."
            }
            <ProductModal product={product} closeModal={closeModal} />
        </div>
        // </Bounce>
    )
}



export default connect((state) =>{
    return{
pro : state.products.Products

    }
        
    
},{ fetchProducts })(Products) ;