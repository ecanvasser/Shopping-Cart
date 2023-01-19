import "../styles/Store.css";
import Header from "./Header";
import StoreMain from "./StoreMain";
import { StoreProvider } from "./context/StoreContext";

const Store = () => {
  return (
    <>
      <Header />
      <StoreProvider>
        <StoreMain />
      </StoreProvider>
    </>
  );
};

export default Store;
