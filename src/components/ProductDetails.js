import { useParams } from "react-router-dom";
import Header from "./Header";
import { StoreProvider } from "./context/StoreContext";
import ProdDetailInfo from "./ProdDetailInfo";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <StoreProvider>
      <div id="prod-container" className="grid grid-rows-[1fr_100vh]">
        <Header />
        <ProdDetailInfo id={id} />
      </div>
    </StoreProvider>
  );
};

export default ProductDetails;
