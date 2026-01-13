import React from 'react'
import { useSelector } from "react-redux";

const AddToCart = () => {
  const { AddtoCart } = useSelector((state) => state.Addproducts);

  console.log("Cart Items:", AddtoCart);

  return (
    <div>
      <h2>Add To Cart Items</h2>

      {AddtoCart && AddtoCart.length > 0 ? (
        AddtoCart.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <img src={item.image} alt={item.title} width="100" />
          </div>
        ))
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default AddToCart;
