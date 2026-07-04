import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, TrendingUp, Shield, Clock } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { stats, services, testimonials, faqs, coreValues, whyChooseUs } from '../../data';
import { useAnimatedCounter, useInView } from '../../hooks';
import styles from './Home.module.css';

// ── Animated Counter Component ──────────────────────────────
function StatCounter({ value, suffix, label, icon }: { value: number; suffix: string; label: string; icon: string }) {
  const { ref, inView } = useInView();
  const count = useAnimatedCounter(value, 2200, inView);
  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statValue}>{count}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

// ── FAQ Item ────────────────────────────────────────────────
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = (useState as typeof import('react').useState)(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span>{question}</span>
        <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </button>
      <div
        className={styles.faqAnswer}
        id={`faq-a-${index}`}
        role="region"
        aria-labelledby={`faq-q-${index}`}
        style={{ maxHeight: open ? '300px' : '0' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

import { useState } from 'react';

// ── Main Home Component ─────────────────────────────────────
export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main>
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className={styles.hero} aria-label="Hero section">
        {/* Animated blobs */}
        <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
        <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
        <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />

        {/* Glass rings */}
        <div className={styles.ring1} aria-hidden="true" />
        <div className={styles.ring2} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.div
                className="section-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Star size={14} fill="currentColor" />
                Trusted Real Estate Experts Since 2009
              </motion.div>

              <h1 className={styles.heroTitle}>
                Find Your{' '}
                <span className="text-gradient">Perfect Property</span>
                {' '}with Trusted Real Estate Experts
              </h1>

              <p className={styles.heroSubtitle}>
                Welcome to Property Dealer — your premium real estate partner in Udaipur, Rajasthan. 
                With 15+ years of experience, we help you buy, sell, rent, and invest in properties 
                with complete transparency and expert guidance.
              </p>

              <div className={styles.heroBtns}>
                <Link to="/services" className="btn btn-primary">
                  Explore Properties
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>

              {/* Trust badges */}
              <div className={styles.trustBadges}>
                {[
                  { icon: <Shield size={14} />, text: 'Verified Properties' },
                  { icon: <TrendingUp size={14} />, text: 'Best Market Prices' },
                  { icon: <Clock size={14} />, text: 'Quick Documentation' },
                ].map((b) => (
                  <div key={b.text} className={styles.trustBadge}>
                    {b.icon}
                    {b.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className={styles.heroCard}>
                <div className={styles.heroCardHeader}>
                  <div className={styles.heroCardDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.heroCardTag}>Premium Listings</span>
                </div>
                <div className={styles.heroPropertyList}>
                  {[
                    { name: 'Luxury Villa, Udaipur', price: '₹1.2 Cr', type: '🏰', tag: 'Featured' },
                    { name: 'Modern Apartment', price: '₹45 L', type: '🏗️', tag: 'New' },
                    { name: 'Commercial Space', price: '₹80 L', type: '🏢', tag: 'Hot Deal' },
                    { name: 'Farm House', price: '₹65 L', type: '🌿', tag: 'Prime' },
                  ].map((p, i) => (
                    <motion.div
                      key={p.name}
                      className={styles.heroPropertyItem}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <span className={styles.propEmoji}>{p.type}</span>
                      <div className={styles.propInfo}>
                        <span className={styles.propName}>{p.name}</span>
                        <span className={styles.propPrice}>{p.price}</span>
                      </div>
                      <span className={styles.propTag}>{p.tag}</span>
                    </motion.div>
                  ))}
                </div>
                <div className={styles.heroCardFooter}>
                  <div className={styles.heroRating}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />)}
                    <span>4.9/5 — 250+ Reviews</span>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <motion.div
                className={styles.floatCard1}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>🏠</span>
                <div>
                  <strong>500+</strong>
                  <p>Properties</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.floatCard2}
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>😊</span>
                <div>
                  <strong>250+</strong>
                  <p>Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS / KEY METRICS
      ══════════════════════════════════════════ */}
      <section className={styles.statsSection} aria-label="Key metrics">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <StatCounter key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════════ */}
      <section className="section" aria-label="About us preview">
        <div className="container">
          <div className={styles.aboutGrid}>
            <ScrollReveal direction="left">
              <div className={styles.aboutImageWrap}>
                <div className={styles.aboutImg}>
                  <div className={styles.aboutImgInner}>
                    <span className={styles.bigEmoji}>🏙️</span>
                    <p>Udaipur's Premier</p>
                    <p>Real Estate Partner</p>
                  </div>
                </div>
                <div className={styles.aboutBadge}>
                  <span>15+</span>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="section-badge">
                  <Shield size={14} />
                  About Property Dealer
                </div>
                <h2 className="section-title">
                  Your Trusted Partner in <span className="text-gradient">Real Estate</span>
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  Established in 2009, Property Dealer has been Udaipur's most trusted real estate 
                  company. We specialize in helping families find their dream homes and investors 
                  make smart property decisions.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Our team of certified professionals offers a complete range of real estate services — 
                  from property search to documentation — ensuring every transaction is transparent, 
                  secure, and stress-free.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES (Preview 6)
      ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-card)' }} aria-label="Our services">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">
                <Star size={14} />
                What We Offer
              </div>
              <h2 className="section-title">Our Property <span className="text-gradient">Services</span></h2>
              <p className="section-subtitle">
                From residential homes to commercial spaces, we provide comprehensive real estate 
                services tailored to your needs.
              </p>
            </header>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            {services.slice(0, 6).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.07}>
                <article className="glass-card" style={{ height: '100%' }}>
                  <div className="icon-box">
                    <span style={{ fontSize: '1.8rem' }}>{service.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--text-title)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════ */}
      <section className="section" aria-label="Mission and Vision">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">🎯 Our Purpose</div>
              <h2 className="section-title">Mission & <span className="text-gradient">Vision</span></h2>
            </header>
          </ScrollReveal>
          <div className="grid-2" style={{ gap: '2rem' }}>
            <ScrollReveal direction="left" delay={0.1}>
              <div className={`glass-card ${styles.missionCard}`}>
                <div className={styles.missionIcon}>🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To deliver transparent, trustworthy, and personalized real estate services that 
                  help every client — whether buyer, seller, or investor — achieve their property 
                  goals with complete confidence and peace of mind.
                </p>
                <ul className={styles.missionList}>
                  <li>✦ Verified & transparent listings</li>
                  <li>✦ End-to-end client support</li>
                  <li>✦ Ethical and fair dealings</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className={`glass-card ${styles.visionCard}`}>
                <div className={styles.visionIcon}>🔭</div>
                <h3>Our Vision</h3>
                <p>
                  To become Rajasthan's most trusted and preferred real estate brand by setting 
                  new standards of service excellence, technological innovation, and sustainable 
                  property development for communities.
                </p>
                <ul className={styles.missionList}>
                  <li>✦ Leading real estate brand in Rajasthan</li>
                  <li>✦ Tech-driven property solutions</li>
                  <li>✦ Building lasting client relationships</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-card)' }} aria-label="Core values">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">💎 Our Foundation</div>
              <h2 className="section-title">Core <span className="text-gradient">Values</span></h2>
              <p className="section-subtitle">The principles that guide every decision we make and every relationship we build.</p>
            </header>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, i) => (
              <ScrollReveal key={value.id} delay={i * 0.08}>
                <div className={`glass-card ${styles.valueCard}`} style={{ '--value-color': value.color } as React.CSSProperties}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <div className={styles.valueLine} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="section" aria-label="Why choose us">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">⭐ Our Advantage</div>
              <h2 className="section-title">Why Choose <span className="text-gradient">Property Dealer?</span></h2>
              <p className="section-subtitle">Eight compelling reasons why thousands of clients trust us with their most important decisions.</p>
            </header>
          </ScrollReveal>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06}>
                <div className={`glass-card ${styles.whyCard}`}>
                  <span className={styles.whyIcon}>{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className={styles.ctaSection} aria-label="Call to action">
        <div className={styles.ctaBlob1} aria-hidden="true" />
        <div className={styles.ctaBlob2} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>🏡 Your Dream Awaits</div>
              <h2 className={styles.ctaTitle}>
                Ready to Find Your <span className="text-gradient">Dream Property?</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Talk to our expert consultants today. We'll help you find the perfect property that 
                matches your lifestyle, budget, and aspirations.
              </p>
              <div className={styles.ctaBtns}>
                <a href="tel:+917894561237" className="btn btn-accent">
                  <Phone size={18} />
                  Call Now: +91 7894561237
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS CAROUSEL
      ══════════════════════════════════════════ */}
      <section className="section" aria-label="Client testimonials">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">💬 What Clients Say</div>
              <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
              <p className="section-subtitle">Real stories from real clients who found their perfect property with us.</p>
            </header>
          </ScrollReveal>

          <div className={styles.testimonialCarousel}>
            <motion.div
              className={styles.testimonialTrack}
              animate={{ x: `-${activeTestimonial * (100 / 3)}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              style={{ display: 'flex', gap: '1.5rem' }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className={`glass-card ${styles.testimonialCard}`}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialAvatar}>{t.avatar}</div>
                    <div>
                      <strong style={{ color: 'var(--text-title)', display: 'block' }}>{t.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-subtitle)' }}>{t.location}</span>
                    </div>
                    <div className={styles.testimonialBadge}>{t.service}</div>
                  </div>
                  <div className="stars" style={{ marginBottom: '0.75rem' }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="var(--gold)" color="var(--gold)" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>
                    "{t.review}"
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className={styles.carouselDots} role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeTestimonial ? styles.dotActive : ''}`}
                onClick={() => setActiveTestimonial(i)}
                role="tab"
                aria-selected={i === activeTestimonial}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/testimonials" className="btn btn-primary">
              View All Reviews
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-card)' }} aria-label="Frequently asked questions">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">❓ Got Questions?</div>
              <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
              <p className="section-subtitle">Find answers to the most common questions about our property services.</p>
            </header>
          </ScrollReveal>

          <div className={styles.faqList} role="list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.id} delay={i * 0.06}>
                <FAQItem question={faq.question} answer={faq.answer} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ marginBottom: '1rem', color: 'var(--text-subtitle)' }}>
              Still have questions? We're here to help!
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
