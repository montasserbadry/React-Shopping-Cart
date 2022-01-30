import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/products/products";
import data from "./data.json";
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")
  const [cartItems, setcartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

  const handleFilterBySize = (e) => {
    setSize(e.target.value)
    if (e.target.value === "All") {
      setProducts(products);
    }
    else {
      let productsClone = [...products]
      let newProducts = productsClone.filter(p => p.size.indexOf(e.target.value) !== -1);
      setProducts(newProducts);
    }

  }
  const handleFilterByOrder = (e) => {
    let order = e.target.value
    setSort(order)
    let productsClone = [...products]
    let newProducts = productsClone.sort(function (a, b) {
      if (order === "lowest") {
        return a.price - b.price
      }
      else if (order === "highest") {
        return b.price - a.price
      } else {
        return a.price < b.price ? 1 : -1
      }
    }
    )
    setProducts(newProducts);
  }
  const addToCart = (product) => {
    const cartItemesClone = [...cartItems];
    var isProductExist = false;
    cartItemesClone.forEach(p => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    })
    if (!isProductExist) {
      cartItemesClone.push({ ...product, qty: 1 })
    }
    setcartItems(cartItemesClone)
  }
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }
    , [cartItems]
  )

  const toRemoveCart = (product) => {
    const cartItemesClone = [...cartItems]
    setcartItems(cartItemesClone.filter(p => p.id !== product.id))
  }


  return (
    <Provider store={store}>
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <Filter
            productsNumber={products.length}
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterByOrder={handleFilterByOrder} />
        </div>
        <Cart cartItems={cartItems} addToCart={addToCart} toRemoveCart={toRemoveCart} />
      </main>
      <Footer />
    </div>
    
    </Provider>
  );
}

export default App;
