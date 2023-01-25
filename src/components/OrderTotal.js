import OrderDetail from "./OrderDetail";

const OrderTotal = () => {

  return (
    <div id="total-container" className="pl-12">
      <div id="total-text" className="text-3xl font-bold">
        Order Summary
      </div>
      <OrderDetail />
    </div>
  );
};

export default OrderTotal;
