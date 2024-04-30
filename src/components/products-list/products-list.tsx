'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useProducts } from '@/context/products.context';
import { Product } from '@/types/product';

import styles from './products-list.module.css';

export default function ProductsList({
  productsData,
}: {
  productsData: Product[];
}) {
  const { favorites, toggleFavorite } = useProducts();


  return (
    <>
      {productsData.map((product) => (
        <div key={product.productSku} className={styles.productCard}>
          <Link href={`/products/${product.productSku}`}>
            <div className={styles.productImage} >
            <Image
              className={styles.imgFill}
              src={'/product-img-skeleton.svg'}
              alt={product.productName}
              layout="fill"
              objectFit="cover"
            />
            </div>
          </Link>
 
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
          <h3 className={styles.productTitle}>{product.productName.length > 30 ? product.productName.substring(0, 30) + '...' : product.productName}</h3>
          <p className={styles.productPrice}>{product.productPrice} €</p>
        </div>
      ))}
    </>
  );
}
