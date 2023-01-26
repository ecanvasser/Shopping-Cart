import Header from "./Header";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import CartContext from "./context/CartContext";

const SubmitOrder = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    localStorage.clear();
    clearCart();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div id="submit-text" className="mt-48 font-extrabold text-4xl">
          Thank you for your order!
        </div>
        <Link
          to="/"
          className="flex justify-center bg-black text-white px-4 py-3 mt-6"
        >
          Back to home
        </Link>
      </div>
    </>
  );
};

export default SubmitOrder;
