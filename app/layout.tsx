import './globals.scss';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton'; 
import { Oswald, Roboto } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Portafolio Mauricio Guerrero',
  description: 'Mi portafolio en Next.js 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body className={roboto.className}>
        <ThemeProvider attribute="data-theme">
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <WhatsAppButton /> 
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}