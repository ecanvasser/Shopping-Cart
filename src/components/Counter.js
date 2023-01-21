import { useContext } from "react";
import StoreContext from "./context/StoreContext";

const Counter = ({ id }) => {
    const { products, handleButton } = useContext(StoreContext);
  
    return (
    <div id="button-container" className="flex pt-10 gap-1">
      <button id={id} className="px-3 bg-black text-white" onClick={handleButton}>-</button>
      <input id={id} type="text" min="0" value={products[id].quantity} readOnly className="text-center border-black border-2 w-10"/>
      <button id={id} className="px-3 bg-black text-white" onClick={handleButton}>+</button>
    </div>
  );
};

export default Counter;
