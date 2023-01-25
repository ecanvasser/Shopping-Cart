import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import StoreContext from "./StoreContext";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useContext(StoreContext);

  //Problem is how this is saving array. Need to check below in addItems
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }

    // if (JSON.parse(localStorage.getItem("cartItems"))) {
    //   if (Array.isArray(JSON.parse(localStorage.getItem("cartItems"))[0])) {
    //     setCartItems(JSON.parse(localStorage.getItem("cartItems"))[0]);
    //   } else {
    //     setCartItems([JSON.parse(localStorage.getItem("cartItems"))[0]]);
    //   }
    // }
  }, []);

  const addItems = (e) => {
    const clone = [...cartItems].concat(products[e.target.id]);
    localStorage.setItem("cartItems", JSON.stringify(clone));
    setCartItems(cartItems.concat(products[e.target.id]));

    // If cart already has items, find match and update quantity.
    // Else, add new item to cartItems
    // if (cartItems) {
    //   const updatedArray = cartItems.map((item) => {
    //     if (item.name === products[e.target.id].name) {
    //       console.log("item.name", item.name);
    //       console.log("products[e.target.id].name", products[e.target.id].name);

    //   let clone = cartItems.filter((i) => {
    //     return i.name === item.name;
    //   });

    // let amount = products[e.target.id].quantity;
    //   let amount = 6
    //   console.log("amount", amount);
    //   let copy = [...cartItems];
    //   copy[index] = {
    //     ...item,
    //     quantity: item.quantity + amount,
    //   };
    //   copy.splice(index, 1, copy[index])
    //       return [...cartItems,  products[e.target.id].quantity = amount ];
    //     } else {
    //       return [...cartItems, products[e.target.id]];
    //     }
    //   });
    //   localStorage.setItem("cartItems", JSON.stringify(updatedArray));
    //   setCartItems(JSON.parse(localStorage.getItem("cartItems"))[0]);
    // } else {
    //   localStorage.setItem(
    //     "cartItems",
    //     JSON.stringify([products[e.target.id]])
    //   );
    //   setCartItems([products[e.target.id]]);
    // }
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
