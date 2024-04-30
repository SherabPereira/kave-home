'use client';
import { useState, useEffect } from 'react';

import { Product } from '@/types/product';
import { useProducts } from '@/context/products.context';
import ProductsList from '@/components/products-list/products-list';
import Pagination from '@/components/pagination/pagination';
import useScreenSize from '@/hooks/use-screen-size';

import styles from './favorites.module.css';

const PRODUCTS_PER_PAGE_DESKTOP = 12;
const PRODUCTS_PER_PAGE_MOBILE = 6;

export default function FavoritesPage() {
  const { favorites } = useProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const [ pageCount, setPageCount ] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);


  const isMobile = useScreenSize('s');
  
  useEffect(() => {
    const numberOfProductsPerPage = isMobile ? PRODUCTS_PER_PAGE_MOBILE : PRODUCTS_PER_PAGE_DESKTOP; 
    setPageCount(Math.ceil(favorites.length / numberOfProductsPerPage))
    const indexOfFirstProduct = currentPage * numberOfProductsPerPage;
    const indexOfLastProduct = indexOfFirstProduct + numberOfProductsPerPage;
    setCurrentProducts(favorites.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [favorites, currentPage, isMobile]);


  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <main>
      <div className={styles.favoritesHeader}>
        <h1>Lista de favoritos</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.favoritesGrid}>
        <ProductsList productsData={currentProducts} />
      </div>
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        currentPage={currentPage}
      />
    </main>
  );
}
