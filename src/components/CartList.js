import CartContext from "./context/CartContext";
import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";
import { useContext } from "react";

const CartList = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div id="cartList" className="grid grid-cols-[1.15fr_0.85fr] pt-16 pb-24">
      <div id="cartList-container" className="grid grid-cols-1 gap-10">
        {cartItems.map((item, index) => {
          return <CartItem key={index} product={item} />;
        })}
      </div>
      <OrderTotal />
    </div>
  );
};

export default CartList;
