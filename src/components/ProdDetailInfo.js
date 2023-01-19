import { useContext, useState, useEffect } from "react";
import StoreContext from "./context/StoreContext";
import Counter from "./Counter";

const ProdDetailInfo = ({ id }) => {
  const { products } = useContext(StoreContext);
  const [target, setTarget] = useState(products[id]);

  return (
    <div id="prod-details" className="grid grid-cols-2">
      <div id="prod-img-container" className="flex justify-center items-center">
        <img src={target.image} className="w-10/12 h-4/5" />
      </div>
      <div id="prod-text-container" className="flex flex-col items-center justify-center">
        <div id="prod-text" className="flex flex-col gap-5">
          <div id="prod-name" className="font-bold text-5xl">
            {target.name}
          </div>
          <div id="prod-price">{target.price}</div>
          <Counter count={target.quantity} />
          <button className="w-max mt-3 py-2 px-3 rounded-xl bg-black text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdDetailInfo;
