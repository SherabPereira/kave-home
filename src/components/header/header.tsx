'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FavoriteOutlineIcon from '../icons/favorite-outline-icon';
import FavoriteFullBlack from '../icons/favorite-full-black-icon';
import KaveHomeLogo from '../icons/kave-home-logo';

import styles from './header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isFavoritesRoute = pathname === '/favorites';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <KaveHomeLogo />
        </Link>
      </div>
      <div className={styles.favoriteIcon}>
        <Link href="/favorites" passHref>
          {isFavoritesRoute ? <FavoriteFullBlack /> : <FavoriteOutlineIcon />}
        </Link>
      </div>
    </header>
  );
}
