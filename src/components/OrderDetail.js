import CartContext from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <>
      <div id="order-details" className="flex flex-col gap-3 mt-12">
        <div id="subtotals" className="w-9/12 italic">
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
        <div id="order-total" className=" grid grid-cols-2 mt-10 w-10/12">
          <div id="total-text" className="text-xl font-bold">
            Cart Total:
          </div>
          <div id="total-amount" className="text-xl font-bold">
            ${total}
          </div>
        </div>
        <Link to="/submitted" className="flex justify-center bg-black text-white p-2 mt-5 w-7/12">Submit Order</Link>
      </div>
    </>
  );
};

export default OrderDetail;
