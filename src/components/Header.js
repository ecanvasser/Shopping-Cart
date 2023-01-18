import { AiOutlineShoppingCart as Cart} from "react-icons/ai";
import "../index.css"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10">
      <div id="title">Espresso Emporium</div>
      <ul id="nav-links" className="flex gap-10">
        <li>Home</li>
        <li>Shop</li>
        <li id="cart-icon"><Cart/></li>
      </ul>
    </header>
  );
};

export default Header;
