import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
    const [product, setProduct] = useState('test')
  
    return <StoreContext.Provider value={{
        product
    }}>{children}</StoreContext.Provider>;
};

export default StoreContext