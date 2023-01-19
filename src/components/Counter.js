const Counter = ({ count }) => {
  return (
    <div id="button-container" className="flex pt-10 gap-1">
      <button className="px-3 bg-black text-white">+</button>
      <input type="text" value={count} className="text-center border-black border-2 w-12"/>
      <button className="px-3 bg-black text-white">-</button>
    </div>
  );
};

export default Counter;
