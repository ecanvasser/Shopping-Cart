import Header from "./Header";
import CartList from "./CartList";
import { CartProvider } from "./context/CartContext";

const Cart = () => {
  return (
    <>
      <Header />
      <CartProvider>
        <CartList />
      </CartProvider>
    </>
  );
};

export default Cart;
