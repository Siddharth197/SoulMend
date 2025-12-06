'use client';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactButtons from '@/components/ContactButtons';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <ContactButtons />
            </CartProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
