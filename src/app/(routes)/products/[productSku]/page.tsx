'use client';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import { Product } from '@/types/product';
import { ProductsContext } from '@/context/products.context';
import { useProducts } from '@/context/products.context';
import useScreenSize from '@/hooks/use-screen-size';

import styles from './product-detail.module.css';

export default function ProductDetailPage({
  params: { productSku },
}: {
  params: { productSku: string };
}) {
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState<Product>();
  const { favorites, toggleFavorite } = useProducts();

  const isMobile = useScreenSize('s');

  useEffect(() => {
    const product = products.find(
      (product) => product.productSku === productSku
    );
    setProduct(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSku]);

  if (!product) {
    return <div>Producto no encontrado</div>;
    // oops page
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.productImageUrl}
          alt={product.productName}
          layout="fill"
          objectFit="cover"
        />
        {!isMobile && (
          <Image
            className={styles.favoriteIcon}
            onClick={() => toggleFavorite(product)}
            src={
              favorites.includes(product)
                ? '/favorite-full-red.svg'
                : '/favorite-outline.svg'
            }
            alt="Favorite"
            width={24}
            height={24}
          />
        )}
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productCollection}>{product.productCollection}</p>
        <p className={styles.productCategory}>
          {product.productCategoryHierarchy}
        </p>
        <p className={styles.productPrice}>
          {product.productPrice}
          <span className={styles.currency}>€</span>
        </p>
        <p className={styles.productName}>{product.productName}</p>
      </div>
    </div>
  );
}
