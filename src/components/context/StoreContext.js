import { createContext, useState, useEffect } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Espresso Capsules",
      price: "$18.99",
      image: require("../../images/capsules.webp"),
      quantity: 0,
    },
    {
      id: 1,
      name: "Miscela Beans",
      price: "$12.99",
      image: require("../../images/miscela.webp"),
      quantity: 0,
    },
    {
      id: 2,
      name: "Perfecto Beans",
      price: "$12.99",
      image: require("../../images/perfect-esp.webp"),
      quantity: 0,
    },
    {
      id: 3,
      name: "Signature Ground Espresso",
      price: "$12.99",
      image: require("../../images/pre-ground.webp"),
      quantity: 0,
    },
    {
      id: 4,
      name: "French Roast Bundle",
      price: "$32.99",
      image: require("../../images/french-bundle.webp"),
      quantity: 0,
    },
    {
      id: 5,
      name: "Mexico Bundle",
      price: "$32.99",
      image: require("../../images/mx-bundle.webp"),
      quantity: 0,
    },
    {
      id: 6,
      name: "South American Bundle",
      price: "$32.99",
      image: require("../../images/sa-bundle.webp"),
      quantity: 0,
    },
    {
      id: 7,
      name: "Christmas Bundle",
      price: "$32.99",
      image: require("../../images/xmas-bundle.webp"),
      quantity: 0,
    },
  ]);
  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('products'))) {
      setProducts(JSON.parse(localStorage.getItem('products')))
    }
  }, [])

  const handleButton = (e) => {
    let index = parseInt(e.target.id);
    if (e.target.innerText === "+") {
      const newQuantity = products.map((item) => {
        if (item.id !== index) {
          return item;
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      });
      setProducts(newQuantity);
    } else {
      const newQuantity = products.map((item) => {
        if (item.id !== index) {
          return item;
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      });
      setProducts(newQuantity);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        handleButton,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
