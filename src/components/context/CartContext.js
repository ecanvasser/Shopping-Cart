import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import StoreContext from "./StoreContext";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useContext(StoreContext);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  const addItems = (e) => {
    const clone = [...cartItems].concat(products[e.target.id]);
    localStorage.setItem("cartItems", JSON.stringify(clone));
    setCartItems(cartItems.concat(products[e.target.id]));
  };

  const incrementItem = (e) => {
    const newArray = cartItems.map((item) => {
      if (item.id === parseInt(e.target.id)) {
        return {...item, quantity: item.quantity + 1}
      } else {
        return item
      }
    })
    localStorage.setItem("cartItems", JSON.stringify(newArray));
    setCartItems(newArray)
  }

  const decrementItem = (e) => {
    const newArray = cartItems.map((item) => {
      if (item.id === parseInt(e.target.id)) {
        return {...item, quantity: item.quantity - 1}
      } else {
        return item
      }
    })
    localStorage.setItem("cartItems", JSON.stringify(newArray));
    setCartItems(newArray)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItems,
        incrementItem,
        decrementItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
