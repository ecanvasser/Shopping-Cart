import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10">
      <div id="title">Espresso Emporium</div>
      <ul id="nav-links" className="flex gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Shop</Link>
        </li>
        <li id="cart-icon" className="pt-1">
          <IconContext.Provider value={{size: "1.15em"}}>
            <Link to="/cart">
              <Cart />
            </Link>
          </IconContext.Provider>
        </li>
      </ul>
    </header>
  );
};

export default Header;
