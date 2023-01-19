import { createContext, useState } from "react";
import uniqid from "uniqid";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: uniqid(),
      name: "Espresso Capsules",
      price: "$18.99",
      image: require("../../images/capsules.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "Miscela",
      price: "$12.99",
      image: require("../../images/miscela.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "Perfecto",
      price: "$12.99",
      image: require("../../images/perfect-esp.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "Signature Ground Espresso",
      price: "$12.99",
      image: require("../../images/pre-ground.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "French Roast Bundle",
      price: "$32.99",
      image: require("../../images/french-bundle.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "Mexico Bundle",
      price: "$32.99",
      image: require("../../images/mx-bundle.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "South American Bundle",
      price: "$32.99",
      image: require("../../images/sa-bundle.webp"),
      quantity: 0,
    },
    {
      id: uniqid(),
      name: "Christmas Bundle",
      price: "$32.99",
      image: require("../../images/xmas-bundle.webp"),
      quantity: 0,
    },
  ]);

  return (
    <StoreContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
