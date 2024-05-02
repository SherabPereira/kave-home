"use client";
import { createContext, useState, useEffect, useContext } from 'react';
import { Product } from '@/types/product';

type ProductsContextType = {
  favorites: Product[];
  products: Product[];
  setFavorites: (product: Product[]) => void;
  toggleFavorite: (product: Product) => void;
};

export const ProductsContext = createContext<ProductsContextType>({
  favorites: [],
  products: [],
  setFavorites: (product: Product[]) => Object,
  toggleFavorite: (product: Product) => Object,
});

export function ProductsProviderWrapper({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20240221');
        const data = await response.json();
        setProducts(data.results);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);


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
