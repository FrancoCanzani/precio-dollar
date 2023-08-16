import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const basierSquare = localFont({
  src: '../../public/fonts/Basier_Regular/Basier Regular Webfont/Basier-Square-regular-webfont/basiersquare-regular-webfont.woff',
  display: 'swap',
  weight: '400',
  variable: '--font-basier-square',
});
export const metadata: Metadata = {
  title: 'Valor Dolar Hoy',
  description: 'Valor de los tipos de cambio en Argentina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${basierSquare.variable} font-sans`}>{children}</body>
    </html>
  );
}
