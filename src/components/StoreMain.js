import { useContext } from "react";
import StoreContext from "./context/StoreContext";
import StoreCard from "./StoreCard";
import { Link } from "react-router-dom";

const StoreMain = () => {
  const { products } = useContext(StoreContext);

  return (
    <>
    <main className="bg-slate-100 p-8 grid grid-cols-store gap-8 content-center">
      {products.map((prod) => {
        return (
          <Link key={prod.id} to={"/store/" + prod.id}>
            <StoreCard product={prod} />
          </Link>
        );
      })}
    </main>
    </>
  );
};

export default StoreMain;
