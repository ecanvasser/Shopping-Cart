import "../styles/Header.css";
import { AiOutlineShoppingCart as Cart} from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div id="title">Espresso Emporium</div>
      <ul id="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li id="cart-icon"><Cart/></li>
      </ul>
    </header>
  );
};

export default Header;
