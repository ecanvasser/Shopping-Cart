import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import StoreContext from "./StoreContext";

const CartContext = createContext({});

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();
  const { products } = useContext(StoreContext);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => total + item.subtotal, 0)
    setTotal((newTotal).toFixed(2))
  }, [cartItems])

  const addItems = (e) => {
    const clone = [...cartItems].concat(products[e.target.id]);
    localStorage.setItem("cartItems", JSON.stringify(clone));
    setCartItems(cartItems.concat({...products[e.target.id], subtotal: products[e.target.id].quantity * products[e.target.id].price}));
  };

  const incrementItem = (e) => {
    const newArray = cartItems.map((item) => {
      if (item.id === parseInt(e.target.id)) {
        return {...item, quantity: item.quantity + 1, subtotal: parseFloat(((item.quantity + 1) * item.price).toFixed(2))}
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
        return {...item, quantity: item.quantity - 1, subtotal: parseFloat(((item.quantity - 1) * item.price).toFixed(2))}
      } else {
        return item
      }
    })
    localStorage.setItem("cartItems", JSON.stringify(newArray));
    setCartItems(newArray)
  }

  const deleteItem = (e) => {
    const filteredArray = cartItems.filter(item => item.id !== parseInt(e.target.id))
    localStorage.setItem("cartItems", JSON.stringify(filteredArray));
    setCartItems(filteredArray);
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        addItems,
        incrementItem,
        decrementItem,
        deleteItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
