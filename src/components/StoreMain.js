import { useContext } from "react";
import StoreContext from "./context/StoreContext";
import StoreCard from "./StoreCard";

const StoreMain = () => {
  const { products } = useContext(StoreContext);

  return <main className="bg-slate-100 p-8 grid grid-cols-store gap-8 content-center">
    {products.map((el) => {
        return <StoreCard product={el}/>
    })}
    </main>;
};

export default StoreMain;
