const CartItem = ({ product }) => {
  return (
    <div id="product" className="flex justify-center gap-24 mr-24">
      <img src={product.image} className="w-1/6" />
      <div id="product-info" className="pl-10">
        <div id="product-name" className="mt-10 font-bold text-xl">{product.name}</div>
        <div id="product-price">{product.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
