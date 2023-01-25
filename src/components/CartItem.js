import CartQuantity from "./CartQuantity";
import { CartProvider } from "./context/CartContext";

const CartItem = ({ product }) => {
  return (
    <div id="product" className="grid grid-cols-2 gap-14">
      <div id="product-img" className="flex justify-end">
        <img src={product.image} alt="" className="w-1/2" />
      </div>
      <div id="product-info" className="flex flex-col justify-center">
        <div id="product-name" className="font-bold text-xl">
          {product.name}
        </div>
        <div id="product-price">{product.price}</div>
        <CartProvider>
          <CartQuantity id={product.id} product={product} />
        </CartProvider>
      </div>
    </div>
  );
};

export default CartItem;
