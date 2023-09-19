import React, { useState } from "react";

const ProductsDisplay = ({ products, setProducts }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //if the product is not already in the cart
    if (!product.inCart) {
      //we fire another function to update products
      const updatedProducts = products.map((p) =>
      //if the product clicked on is among the cycle through in the .map, then merge product to inCart
      //if not, return just the product.
        p.id === product.id ? { ...p, inCart: true } : p
      );
      //set products state to this updated products array
      setProducts(updatedProducts);
      //setting state of cart by spreading previous cart and appending product. 
      //N.B that this is done by putting a function in setCart
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
