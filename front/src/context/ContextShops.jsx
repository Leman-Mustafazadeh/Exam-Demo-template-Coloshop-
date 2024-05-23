import React, { createContext, useEffect, useState } from "react";
import { getAll } from "../API";
export const ColorContext = createContext("");
export const BasketContext = createContext("");
export const WishlistContext = createContext("");
const ContextShops = ({ children }) => {
  const [shops, setShops] = useState([]);
  const localB = JSON.parse( localStorage.getItem("basket"))
  const [basket, setBasket] = useState(
    localB ? localB: []
  );
  const localW = JSON.parse(localStorage.getItem("wishlist"))
  const [wishlist, setWishlist] = useState(localW ? localW : []);
 
  useEffect(() => {
    getAll().then((res) => {
      setShops(res.data.data);
    });
  }, []);
  return (
    <WishlistContext.Provider value={{wishlist,setWishlist}}>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <ColorContext.Provider value={{ shops, setShops }}>
          {children}
        </ColorContext.Provider>
      </BasketContext.Provider>
    </WishlistContext.Provider>
  );
};

export default ContextShops;
