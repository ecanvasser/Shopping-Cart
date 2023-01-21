import { useState, useContext } from "react";
import { createContext } from "react";
import StoreContext from "./StoreContext";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useContext(StoreContext);

  const addItems = (e) => {
    setCartItems((prevCart) =>
      !prevCart.includes(products[e.target.id])
        ? cartItems.concat(products[e.target.id])
        : prevCart
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
