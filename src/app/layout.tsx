import type { Metadata } from 'next';
import Header from '@/components/header/header';
import { ProductsProviderWrapper } from '@/context/products.context';

import './globals.css';

export const metadata: Metadata = {
  title: 'Kave Home',
  description: '- Tienda de muebles online',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ProductsProviderWrapper>
          <div>
            <Header/>
          </div>
          <div>{children}</div>
        </ProductsProviderWrapper>
      </body>
    </html>
  );
}
