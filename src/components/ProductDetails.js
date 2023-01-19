import { useParams } from "react-router-dom";
import Header from "./Header";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      {id}
    </>
  );
};

export default ProductDetails;
