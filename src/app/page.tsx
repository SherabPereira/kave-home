'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/types/product';
import { useProducts } from '@/context/products.context';
import CategorySlider from '@/components/slider/category-slider';
import ProductsList from '@/components/products-list/products-list';
import useScreenSize from '@/hooks/use-screen-size';

import styles from './page.module.css';

const PRODUCTS_PER_PAGE_MOBILE = 6;
const PRODUCTS_PER_PAGE_DESKTOP = 9;

export default function HomePage() {
  const { products } = useProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  const isMobile = useScreenSize('s');

  useEffect(() => {
    const indexOfFirstProduct = currentPage * PRODUCTS_PER_PAGE_MOBILE;
    const indexOfLastProduct = indexOfFirstProduct + PRODUCTS_PER_PAGE_MOBILE;
    setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE_MOBILE);
  // TODO
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <main className={styles.main}>
      <section className={styles.heroImage}>
        <Image
          src={isMobile ? '/img-small.svg' : '/img-big-home.svg'}
          alt="Imagen de Cabecera"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.heroText}>
          <h1>Cuando la realidad supera la ficción.</h1>
          <h1>Trucos para estar en casa.</h1>
        </div>
      </section>
      <section className={styles.categorySlider}>
        <CategorySlider />
      </section>
      <section className={styles.productList}>
        <ProductsList
          productsData={
            isMobile
              ? currentProducts
              : products.slice(0, PRODUCTS_PER_PAGE_DESKTOP)
          }
        />
      </section>
      <section className={styles.viewAllProducts}>
        <div>
          <Link href="/products" className={styles.viewAllProductsLink}>
            Ver todos los productos
          </Link>
        </div>
      </section>
    </main>
  );
}
