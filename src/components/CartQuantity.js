import { useContext } from "react";
import CartContext from "./context/CartContext";

const CartQuantity = ({ quantity, id }) => {
  // Change cartItems to callback functions later on
  const { cartItems } = useContext(CartContext);

  return (
    <div id="counter" className="flex pt-10 gap-1">
      <button id={id} className="px-3 bg-black text-white">-</button>
      <input
        readOnly
        className="text-center border-black border-2 w-10"
        value={quantity}
      />
      <button id={id} className="px-3 bg-black text-white">+</button>
    </div>
  );
};

export default CartQuantity;
