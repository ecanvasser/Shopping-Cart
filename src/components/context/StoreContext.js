import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Espresso Capsules",
      price: "$18.99",
      image: require("../../images/capsules.webp"),
      quantity: 0,
    },
    {
      name: "Miscela",
      price: "$12.99",
      image: require("../../images/miscela.webp"),
      quantity: 0,
    },
    {
      name: "Perfecto",
      price: "$12.99",
      image: require("../../images/perfect-esp.webp"),
      quantity: 0,
    },
    {
      name: "Signature Ground Espresso",
      price: "$12.99",
      image: require("../../images/pre-ground.webp"),
      quantity: 0,
    },
    {
      name: "French Roast Bundle",
      price: "$32.99",
      image: require("../../images/french-bundle.webp"),
      quantity: 0,
    },
    {
      name: "Mexico Bundle",
      price: "$32.99",
      image: require("../../images/mx-bundle.webp"),
      quantity: 0,
    },
    {
      name: "South American Bundle",
      price: "$32.99",
      image: require("../../images/sa-bundle.webp"),
      quantity: 0,
    },
    {
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
