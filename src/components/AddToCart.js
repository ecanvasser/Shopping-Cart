import { useContext } from "react";
import CartContext from "./context/CartContext";

const AddToCart = ({ id }) => {
  const { addItems } = useContext(CartContext);

  return (
    <button
      id={id}
      className="w-max mt-3 py-2 px-3 rounded-xl bg-black text-white"
      onClick={addItems}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
