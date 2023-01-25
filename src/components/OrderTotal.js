import CartContext from "./context/CartContext";
import { useContext } from "react";

const OrderTotal = () => {
  const { cartItems } = useContext(CartContext);
  

  return (
    <div id="total-container" className="pl-12">
      <div id="total-text" className="text-3xl font-bold">
        Order Summary
      </div>
      <div id="order-details" className="flex flex-col gap-3 italic mt-12">
        {cartItems.map((item, i) => {
            return <div key={i}>{item.quantity} - {item.name}</div>
        })}
      </div>
    </div>
  );
};

export default OrderTotal;
