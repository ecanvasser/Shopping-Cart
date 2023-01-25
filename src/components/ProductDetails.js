import { useParams } from "react-router-dom";
import Header from "./Header";
import ProdDetailInfo from "./ProdDetailInfo";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div id="prod-container" className="grid grid-rows-[1fr_100vh]">
      <Header />
      <ProdDetailInfo id={id} />
    </div>
  );
};

export default ProductDetails;
