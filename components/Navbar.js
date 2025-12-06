'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import LanguageModal from './LanguageModal';

export default function Navbar() {
  const { cartCount } = useCart();
  const { user, signOut } = useAuth();
  const { language, changeLanguage, t, isLoaded } = useLanguage();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    setIsMenuOpen(false); // Close menu on logout
    router.push('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <img src="/images/logo.jpg" alt="Soulmend Logo" style={{ height: '50px', width: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>SoulMend</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', letterSpacing: '1px' }}>RELIEF FOR YOUR SOUL</span>
            </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Hamburger Menu Button */}
            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>

          <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
            <Link href="/" className={styles.link} onClick={closeMenu}>{t('home')}</Link>
            <Link href="/shop" className={styles.link} onClick={closeMenu}>{t('shop')}</Link>
            <Link href="/services" className={styles.link} onClick={closeMenu}>{t('services')}</Link>
            <Link href="/about" className={styles.link} onClick={closeMenu}>{t('about')}</Link>

            {user ? (
              <>
                <Link href="/dashboard" className={styles.link} onClick={closeMenu}>{t('dashboard')}</Link>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  {t('logout')}
                </button>
              </>
            ) : (
              <Link href="/login" className={styles.link} onClick={closeMenu}>{t('login')}</Link>
            )}

            <Link href="/cart" className={styles.cartLink} onClick={closeMenu}>
              <span className={styles.cartIcon}>🛒</span>
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>

            <button
              onClick={() => setIsLangModalOpen(true)}
              style={{
                padding: '5px 10px',
                borderRadius: '4px',
                border: '1px solid white',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                marginLeft: '10px'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>
      <LanguageModal isOpen={isLangModalOpen} onClose={() => setIsLangModalOpen(false)} />
    </>
  );
}
