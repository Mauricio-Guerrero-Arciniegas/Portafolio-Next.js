import './globals.scss';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton'; // 👈 importamos el botón

export const metadata = {
  title: 'Portafolio Mauricio Guerrero',
  description: 'Mi portafolio en Next.js 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme">
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <WhatsAppButton /> {/* 👈 visible en todas las páginas */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}