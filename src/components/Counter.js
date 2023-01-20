import { useContext } from "react";
import StoreContext from "./context/StoreContext";

const Counter = ({ id }) => {
    const { products, handleInput, handleButton } = useContext(StoreContext);
  
    return (
    <div id="button-container" className="flex pt-10 gap-1">
      <button id={id} className="px-3 bg-black text-white" onClick={handleButton}>-</button>
      <input id={id} type="text" value={products[id].quantity} onChange={handleInput} className="text-center border-black border-2 w-12"/>
      <button id={id} className="px-3 bg-black text-white" onClick={handleButton}>+</button>
    </div>
  );
};

export default Counter;
