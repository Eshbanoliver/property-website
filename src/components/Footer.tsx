import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact Us', path: '/contact' },
];

const serviceLinks = [
  'Residential Properties',
  'Commercial Properties',
  'Luxury Villas',
  'Apartments',
  'Farm Houses',
  'Rental Properties',
  'Investment Properties',
  'Plots & Land',
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>🏠</div>
              <div>
                <div className={styles.logoText}>Property<span>Dealer</span></div>
                <div className={styles.logoTagline}>Trusted Real Estate Experts</div>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Your trusted partner in finding the perfect property in Udaipur, Rajasthan. 
              With 15+ years of experience, we deliver transparent, professional real estate services.
            </p>
            {/* Social Icons */}
            <div className={styles.socials}>
              <button
                className={styles.socialBtn}
                aria-label="Facebook (coming soon)"
                disabled
                title="Coming soon"
              >
                <Facebook size={18} />
              </button>
              <button
                className={styles.socialBtn}
                aria-label="Instagram (coming soon)"
                disabled
                title="Coming soon"
              >
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={styles.colTitle}>Our Services</h3>
            <ul className={styles.linkList}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/services" className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+917894561237" className={styles.contactLink}>
                  +91 7894561237
                </a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <span className={styles.contactText}>Email coming soon</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span className={styles.contactText}>Udaipur, Rajasthan 313004</span>
              </li>
              <li className={styles.contactItem}>
                <Clock size={16} className={styles.contactIcon} />
                <span className={styles.contactText}>Mon–Sat: 9 AM – 7 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterDesc}>Get the latest property listings & market insights.</p>
              <form
                className={styles.newsletterForm}
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter subscription"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.newsletterInput}
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe to newsletter">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            ©️ Copyright 2026 | Property Dealer | All Rights Reserved
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/contact" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.dot}>·</span>
            <Link to="/contact" className={styles.bottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
