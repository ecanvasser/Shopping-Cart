import { useContext } from "react";
import CartContext from "./context/CartContext";

const CartQuantity = ({ id }) => {
  const { cartItems, incrementItem, decrementItem } = useContext(CartContext);

  if (cartItems[0]) {
    return (
        <div id="counter" className="flex pt-10 gap-1">
          <button
            id={id}
            onClick={decrementItem}
            className="px-3 bg-black text-white"
          >
            -
          </button>
          <input
            readOnly
            className="text-center border-black border-2 w-10"
            value={cartItems[cartItems.findIndex(i => i.id === id)].quantity}
          />
          <button
            id={id}
            onClick={incrementItem}
            className="px-3 bg-black text-white"
          >
            +
          </button>
        </div>
      );
  }
};

export default CartQuantity;
