import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Home, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data';
import { useScrollY } from '../hooks';
import { useTheme } from './ThemeProvider';
import styles from './Header.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const isScrolled = scrollY > 60;
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link to="/" className={styles.logo} aria-label="Property Dealer - Home">
              <div className={styles.logoIcon}>
                <Home size={20} />
              </div>
              <span className={styles.logoText}>
                Property<span className={styles.logoAccent}>Dealer</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className={styles.navLinks} role="list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    {link.label}
                    <span className={styles.navLinkUnderline} />
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* CTA Button */}
            <a
              href="tel:+917894561237"
              className={`btn btn-primary ${styles.ctaBtn}`}
              aria-label="Call us now"
            >
              <Phone size={16} />
              Call Now
            </a>

            {/* Mobile Toggle */}
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.mobileMenuHeader}>
                <span className={styles.logoText}>
                  Property<span className={styles.logoAccent}>Dealer</span>
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <button
                    className={styles.themeToggleMobile}
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  </button>
                  <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <ul className={styles.mobileNavLinks} role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className={styles.mobileMenuFooter}>
                <a
                  href="tel:+917894561237"
                  className={`btn btn-primary`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Phone size={16} />
                  Call Now: +91 7894561237
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
