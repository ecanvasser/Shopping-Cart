import "../index.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main id="home-main" className="bg-hero bg-center flex flex-col gap-5 justify-center items-center text-white">
      <div id="main-text" className="text-6xl font-extrabold">ESPRESSO REDEFINED</div>
      <Link to="/store" id="cta-btn" className="border rounded-md px-2 py-2">
        Shop Espresso
      </Link>
    </main>
  );
};

export default Main;
