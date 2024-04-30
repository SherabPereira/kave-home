"use client";
import { createContext, useState, useContext } from 'react';
import { Product } from '@/types/product';
import { productsList } from '@/lib/products-list'

type ProductsContextType = {
  favorites: Product[];
  products: Product[];
  setFavorites: (product: Product[]) => void;
  toggleFavorite: (product: Product) => void;
};

export const ProductsContext = createContext<ProductsContextType>({
  favorites: [],
  products: [],
  setFavorites: (product: Product[]) => {},
  toggleFavorite: (product: Product) => {},
});

export function ProductsProviderWrapper({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [products] = useState<Product[]>(productsList);

  const toggleFavorite = (product: Product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(product)) {
        return prevFavorites.filter((productItem) => productItem.productSku !== product.productSku);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <ProductsContext.Provider value={{
      favorites,
      products,
      setFavorites,
      toggleFavorite,
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
