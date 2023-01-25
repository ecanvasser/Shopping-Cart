import CartContext from "./context/CartContext";
import { useContext } from "react";

const OrderDetail = () => {
   const {cartItems} = useContext(CartContext)
  
    return (
    <div id="order-details" className="flex flex-col gap-3 italic mt-12">
      {cartItems.map((item, i) => {
        return (
          <div key={i}>
            {item.quantity} - {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetail;
