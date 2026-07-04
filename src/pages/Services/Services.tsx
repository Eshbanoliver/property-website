import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { services } from '../../data';
import styles from './Services.module.css';

export function Services() {
  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className={styles.hero} aria-label="Services hero">
        <div className={styles.heroBlob1} aria-hidden="true" />
        <div className={styles.heroBlob2} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge" style={{ margin: '0 auto 1rem' }}>
              <Briefcase size={14} />
              What We Offer
            </div>
            <h1 className={styles.heroTitle}>
              Our Property <span className="text-gradient">Services</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Comprehensive real estate solutions tailored to meet your residential, 
              commercial, and investment property needs across Udaipur.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+917894561237" className="btn btn-primary">
                <Phone size={18} />
                Call Us Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── All Services Grid ── */}
      <section className="section" aria-label="All services">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">
                <Star size={14} />
                Complete Range
              </div>
              <h2 className="section-title">All <span className="text-gradient">Property Services</span></h2>
              <p className="section-subtitle">
                From helping you find your first home to managing complex commercial transactions, 
                we're your complete real estate partner.
              </p>
            </header>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <article className={`glass-card ${styles.serviceCard}`}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <div className={styles.serviceImageWrap}>
                    <img src={service.image} alt={service.title} className={styles.serviceImage} />
                  </div>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <Link
                    to="/contact"
                    className={styles.serviceLink}
                    aria-label={`Discover more about ${service.title}`}
                  >
                    Discover more
                    <ArrowRight size={16} />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }} aria-label="Our process">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">⚙️ How We Work</div>
              <h2 className="section-title">Our Simple <span className="text-gradient">Process</span></h2>
              <p className="section-subtitle">A clear, transparent process designed to make your property journey effortless.</p>
            </header>
          </ScrollReveal>

          <div className={styles.processGrid}>
            {[
              { step: '01', icon: '📞', title: 'Initial Consultation', desc: 'Contact our team and share your property requirements, budget, and preferences.' },
              { step: '02', icon: '🔍', title: 'Property Search', desc: 'We search and shortlist verified properties that perfectly match your criteria.' },
              { step: '03', icon: '🏠', title: 'Site Visits', desc: 'Visit shortlisted properties with our expert guidance and transparent information.' },
              { step: '04', icon: '📋', title: 'Documentation', desc: 'We handle all legal paperwork and ensure a secure, hassle-free transaction.' },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className={`glass-card ${styles.processCard}`}>
                  <div className={styles.processStep}>{p.step}</div>
                  <div className={styles.processIcon}>{p.icon}</div>
                  <h3 className={styles.processTitle}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-label="Services CTA">
        <div className={styles.ctaBlob} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>🏡 Let's Get Started</div>
              <h2 className={styles.ctaTitle}>
                Need Help Finding the <span className="text-gradient">Right Property?</span>
              </h2>
              <p className={styles.ctaText}>
                Our expert consultants are ready to assist you. Contact us now for a free, 
                no-obligation consultation.
              </p>
              <div className={styles.ctaBtns}>
                <a href="tel:+917894561237" className="btn btn-accent">
                  <Phone size={18} />
                  Call: +91 7894561237
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Get Free Consultation
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
