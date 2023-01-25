import CartContext from "./context/CartContext";
import { useContext } from "react";

const OrderDetail = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div id="order-details" className="flex flex-col gap-3 italic mt-12">
      <div id="subtotals" className="w-9/12">
        {cartItems.map((item, i) => {
          return (
            <div key={i} className="grid grid-cols-2 items-center">
              <div>
                {item.quantity} - {item.name}
              </div>
              <div className="ml-8 text-sm">${item.subtotal}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetail;
