import "../index.css";
import Header from "./Header";
import StoreMain from "./StoreMain";
import { StoreProvider } from "./context/StoreContext";

const Store = () => {
  return (
    <div id="store-main">
      <Header />
      <StoreProvider>
        <StoreMain />
      </StoreProvider>
    </div>
  );
};

export default Store;
