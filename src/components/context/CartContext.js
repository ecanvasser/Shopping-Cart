import { useState, useContext } from "react";
import { createContext } from "react";
import StoreContext from "./StoreContext";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useContext(StoreContext);

  const addItems = (e) => {
    // If cart already has items, find match and update quantity.
    // Else, add new item to cartItems
    if (cartItems.length > 0) {
      const updatedArray = cartItems.map((item) => {
        if (item.name === products[e.target.id].name) {
          return {
            ...item,
            quantity: item.quantity + products[e.target.id].quantity,
          };
        }
      });
      setCartItems(updatedArray)
    } else {
      setCartItems(cartItems.concat(products[e.target.id]));
    }
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
