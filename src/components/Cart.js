import Header from "./Header";
import CartList from "./CartList";
import CartContext from "./context/CartContext";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext)
  
  if (cartItems.length < 1) {
    return <EmptyCart />
  }

  return (
    <>
      <Header />
      <CartList />
    </>
  );
};

export default Cart;
