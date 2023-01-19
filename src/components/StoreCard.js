const StoreCard = ({ product }) => {
  return (
    <div id="card-container" className="bg-white p-5 rounded-2xl flex flex-col items-center">
      <img src={product.image} alt="" />
      <div id="card-name">{product.name}</div>
      <div id="card-price">{product.price}</div>
      <button>Add To Cart</button>
    </div>
  );
};

export default StoreCard;
