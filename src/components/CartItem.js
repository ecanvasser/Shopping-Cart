import CartQuantity from "./CartQuantity";
import { CiSquareRemove } from "react-icons/ci";
import { IconContext } from "react-icons";
import { useContext } from "react";
import CartContext from "./context/CartContext";

const CartItem = ({ product }) => {
  const { deleteItem } = useContext(CartContext);
  
  return (
    <div id="product" className="grid grid-cols-2 gap-14 relative">
      <div id="product-img" className="flex justify-end">
        <img src={product.image} alt="" className="w-1/2" />
      </div>
      <div id="product-info" className="flex flex-col justify-center">
        <div id="product-name" className="font-bold text-xl">
          {product.name}
        </div>
        <div id="product-price">{product.price}</div>
        <CartQuantity id={product.id} product={product} />
      </div>
      <IconContext.Provider value={{size: "1.5em"}}>
        <button className="absolute top-2/4 right-14" onClick={deleteItem}>
          <CiSquareRemove id={product.id} />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default CartItem;
