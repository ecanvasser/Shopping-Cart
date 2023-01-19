import { useContext } from "react";
import StoreContext from "./context/StoreContext";

const StoreMain = () => {
  const { product } = useContext(StoreContext);

  return product;
};

export default StoreMain;
