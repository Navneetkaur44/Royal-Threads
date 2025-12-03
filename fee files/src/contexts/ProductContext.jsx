import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  const isWishlisted = (productId) => {
    return wishlist.includes(productId);
  };

  const value = {
    wishlist,
    toggleWishlist,
    isWishlisted,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

