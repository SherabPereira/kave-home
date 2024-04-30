'use client';
import { useState, useEffect } from 'react';
import { useProducts } from '@/context/products.context';
import ProductsList from '@/components/products-list/products-list';
import Pagination from '@/components/pagination/pagination';
import { Product } from '@/types/product';
import styles from './products.module.css';

const PRODUCTS_PER_PAGE = 12;

export default function ProductsPage() {
  const { products } = useProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const indexOfFirstProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfLastProduct = indexOfFirstProduct + PRODUCTS_PER_PAGE;
    setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <main>
      <div className={styles.productsHeader}>
        <h1>Productos</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.productsGrid}>
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
