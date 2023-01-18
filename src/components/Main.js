import "../styles/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main id="home-main">
      <div id="main-text">ESPRESSO REDEFINED</div>
      <Link to="/store" id="cta-btn">
        Shop Espresso
      </Link>
    </main>
  );
};

export default Main;
