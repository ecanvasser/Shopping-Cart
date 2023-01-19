import { useContext, useState, useEffect } from "react";
import StoreContext from "./context/StoreContext";

const ProdDetailInfo = ({ id }) => {
  const { products } = useContext(StoreContext);
  const [target, setTarget] = useState(products[id]);

  return (
    <div id="prod-details" className="grid grid-cols-2">
      <div id="prod-img-container" className="">
        <img src={target.image} />
      </div>
      <div id="prod-text-container" className="pt-28 pl-24 flex flex-col gap-5">
        <div id="prod-name" className="font-bold text-4xl">
          {target.name}
        </div>
        <div id="prod-price">{target.price}</div>
      </div>
    </div>
  );
};

export default ProdDetailInfo;
