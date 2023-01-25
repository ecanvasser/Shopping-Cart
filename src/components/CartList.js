import CartContext from "./context/CartContext";
import CartItem from "./CartItem";
import { useContext } from "react";

const CartList = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div id="cartList" className="pt-16">
      <div id="cartList-container" className="flex flex-col gap-10">
        {cartItems.map((item, index) => {
          return <CartItem key={index} product={item} />;
        })}
      </div>
    </div>
  );
};

export default CartList;
