import { useContext, useState, createContext } from "react";
import data from "../data";


const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
      const exist = cartItems.find(x => x.id === product.id);
      if(exist) {
        setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x ));
      } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
      }
    }

    const onRemove = ( product ) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x ));
      }
    }

    const values = {
        onAdd,
        onRemove,
        cartItems,
        setCartItems,
        products,
    };

    return (
        <BasketContext.Provider value={values} >{children}</BasketContext.Provider>
    )
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket};