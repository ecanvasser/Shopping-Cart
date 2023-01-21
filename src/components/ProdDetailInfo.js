import { useContext, useState } from "react";
import { StoreProvider } from "./context/StoreContext";
import StoreContext from "./context/StoreContext";
import { CartProvider } from "./context/CartContext";
import Counter from "./Counter";
import AddToCart from "./AddToCart";

const ProdDetailInfo = ({ id }) => {
  const { products } = useContext(StoreContext);
  const [target, setTarget] = useState(products[id]);

  return (
    <div id="prod-details" className="grid grid-cols-2">
      <div id="prod-img-container" className="flex justify-center items-center">
        <img src={target.image} alt="" className="w-10/12 h-4/5" />
      </div>
      <div
        id="prod-text-container"
        className="flex flex-col items-center justify-center"
      >
        <div id="prod-text" className="flex flex-col gap-5">
          <div id="prod-name" className="font-bold text-5xl">
            {target.name}
          </div>
          <div id="prod-price">{target.price}</div>
          <StoreProvider>
            <Counter id={id} />
            <CartProvider>
              <AddToCart id={id}/>
            </CartProvider>
          </StoreProvider>
        </div>
      </div>
    </div>
  );
};

export default ProdDetailInfo;
