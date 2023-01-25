import CartQuantity from "./CartQuantity";
import { CartProvider } from "./context/CartContext";

const CartItem = ({ product }) => {
  return (
    <div id="product" className="flex justify-center gap-24 mr-24">
      <img src={product.image} alt="" className="w-1/6" />
      <div id="product-info" className="pl-10 mt-14">
        <div id="product-name" className="font-bold text-xl">{product.name}</div>
        <div id="product-price">{product.price}</div>
        <CartProvider>
            <CartQuantity id={product.id} product={product}/>
        </CartProvider>
      </div>
    </div>
  );
};

export default CartItem;
