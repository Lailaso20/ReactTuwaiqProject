import React, { useContext } from "react";
import { CartContext } from "../components/CartContext.jsx";

function Cart() {
    const { cart, removeItem } = useContext(CartContext);
  
    return (
      <div className="container mt-4">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>cart is empty</p>
        ) : (
          <div className="row">
            {cart.map((product) => (
              <div className="col-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                   
                  </div>
                </div>
                <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeItem(product)}
                    >
                      Remove from cart
                    </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Cart;