import React, { useState } from "react";

const Cart = ({ products, setProducts }) => {
  // const [products] = useCart();
  const [cart, setCart] =useState([])
  return (
    <div>
      {/* Use a single pair of curly braces */}
      const cartProducts =()= {{products.filter((product) => {
        if (product.inCart) {
          return true;
        } else {
          return false;
        }
        
      })}}
      {cartProducts.map((product)=>{
        return(product.inCart.name)
      })}

    </div>
  );
}

export default Cart;
