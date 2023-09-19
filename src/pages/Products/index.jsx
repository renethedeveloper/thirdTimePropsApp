import ProductsDisplay from "../../components/ProductsDisplay"
import { useState } from "react"
import App from "../../App"

const Products = ({products, setProducts}) => {
  return (
    <div>
        <h1>This is the Products Page!</h1>
        <ProductsDisplay products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Products;