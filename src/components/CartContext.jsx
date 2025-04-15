import { createContext, useState } from "react";

const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };


  const removeItem = (product) => {
    setCart((thisCart) =>
      thisCart.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };