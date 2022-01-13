import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/products/products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("")
  const [size, setSize] = useState("")

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

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterByOrder={handleFilterByOrder} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
