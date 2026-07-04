import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Award, Users, Star } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { coreValues, whyChooseUs } from '../../data';
import styles from './About.module.css';

export function About() {
  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className={styles.hero} aria-label="About us hero">
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
              <Shield size={14} />
              About Us
            </div>
            <h1 className={styles.heroTitle}>
              Trusted Real Estate <span className="text-gradient">Experts</span> in Udaipur
            </h1>
            <p className={styles.heroSubtitle}>
              15+ years of delivering transparent, professional, and personalized 
              real estate services to families, businesses, and investors across Rajasthan.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+917894561237" className="btn btn-primary">
                <Phone size={18} />
                Call Us Now
              </a>
              <Link to="/services" className="btn btn-outline">
                Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Company Introduction ── */}
      <section className="section" aria-label="Company introduction">
        <div className="container">
          <div className={styles.introGrid}>
            <ScrollReveal direction="left">
              <div className={styles.introImage}>
                <div className={styles.imgBox}>
                  <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem' }}>🏙️</span>
                  <h3 style={{ color: 'var(--text-title)', fontFamily: 'var(--font-display)' }}>Property Dealer</h3>
                  <p style={{ color: 'var(--text-subtitle)', fontSize: '0.9rem' }}>Udaipur, Rajasthan</p>
                </div>
                <div className={styles.introStats}>
                  {[
                    { n: '500+', l: 'Properties' },
                    { n: '250+', l: 'Clients' },
                    { n: '15+', l: 'Years' },
                  ].map(s => (
                    <div key={s.l} className={styles.introStat}>
                      <strong>{s.n}</strong>
                      <span>{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="section-badge">
                  <Award size={14} />
                  Who We Are
                </div>
                <h2 className="section-title">
                  Building Dreams, <span className="text-gradient">One Property at a Time</span>
                </h2>
                <p style={{ marginBottom: '1.2rem' }}>
                  Property Dealer was founded with a singular vision: to make real estate transactions 
                  transparent, stress-free, and rewarding for every client. Based in Udaipur, Rajasthan, 
                  we have grown into one of the region's most trusted real estate companies.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  Our dedicated team of certified real estate professionals brings extensive local market 
                  knowledge, legal expertise, and a passion for helping people find their perfect properties — 
                  whether it's a first home, a commercial space, or a lucrative investment.
                </p>
                <p>
                  We pride ourselves on going beyond just facilitating transactions. We build lasting 
                  relationships with our clients, offering end-to-end support from initial consultation 
                  to property possession and beyond.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }} aria-label="Our story">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">📖 Our Journey</div>
              <h2 className="section-title">Our <span className="text-gradient">Story</span></h2>
            </header>
          </ScrollReveal>

          <div className={styles.timeline}>
            {[
              { year: '2009', title: 'Founded in Udaipur', desc: 'Started with a small office and a big vision to transform real estate in Rajasthan.' },
              { year: '2012', title: 'First 100 Properties', desc: 'Achieved the milestone of 100+ verified property listings across Udaipur city.' },
              { year: '2016', title: 'Expanded Services', desc: 'Added commercial, investment, and documentation support services to our portfolio.' },
              { year: '2020', title: '200+ Happy Clients', desc: 'Crossed 200 happy clients and established as Udaipur\'s most trusted property dealer.' },
              { year: '2024', title: '500+ Properties & Growing', desc: 'Today we manage 500+ properties and continue serving families and investors across Rajasthan.' },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineDot} />
                  <div className={`glass-card ${styles.timelineContent}`}>
                    <h3 style={{ marginBottom: '0.4rem', fontSize: '1.1rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section" aria-label="Mission and vision">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">🎯 Our Purpose</div>
              <h2 className="section-title">Mission & <span className="text-gradient">Vision</span></h2>
            </header>
          </ScrollReveal>

          <div className="grid-2" style={{ gap: '2rem' }}>
            <ScrollReveal direction="left">
              <div className={`glass-card ${styles.purposeCard}`}>
                <div className={styles.purposeIcon}>🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To deliver transparent, trustworthy, and personalized real estate services that 
                  help every client achieve their property goals with complete confidence and peace 
                  of mind. We are committed to making real estate simple, safe, and rewarding.
                </p>
                <ul className={styles.purposeList}>
                  <li>✦ Verified & transparent property listings</li>
                  <li>✦ Complete end-to-end client support</li>
                  <li>✦ Ethical, fair, and honest dealings</li>
                  <li>✦ Best market prices guaranteed</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={`glass-card ${styles.purposeCard} ${styles.visionCard}`}>
                <div className={styles.purposeIcon}>🔭</div>
                <h3>Our Vision</h3>
                <p>
                  To become Rajasthan's most trusted and preferred real estate brand by setting 
                  new standards of service excellence, technological innovation, and sustainable 
                  property development that enriches communities and changes lives.
                </p>
                <ul className={styles.purposeList}>
                  <li>✦ Leading real estate brand in Rajasthan</li>
                  <li>✦ Tech-driven property solutions</li>
                  <li>✦ Building lasting client relationships</li>
                  <li>✦ Sustainable development focus</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
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
                <div className={`glass-card ${styles.valueCard}`}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3>{value.title}</h3>
                  <p style={{ position: 'relative', zIndex: 1 }}>{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Clients Trust Us ── */}
      <section className="section" aria-label="Why clients trust us">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">
                <Users size={14} />
                Client Trust
              </div>
              <h2 className="section-title">Why Clients <span className="text-gradient">Trust Us</span></h2>
              <p className="section-subtitle">We've earned the trust of 250+ clients through consistent excellence and integrity.</p>
            </header>
          </ScrollReveal>
          <div className={styles.trustGrid}>
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.07}>
                <div className={`glass-card ${styles.trustCard}`}>
                  <span className={styles.trustIcon}>{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p style={{ position: 'relative', zIndex: 1 }}>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-label="Contact call to action">
        <div className={styles.ctaBlob} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>
                <Star size={14} />
                Start Your Journey
              </div>
              <h2 className={styles.ctaTitle}>
                Ready to Work with <span className="text-gradient">Property Dealer?</span>
              </h2>
              <p className={styles.ctaText}>
                Contact us today for a free consultation. Let our experts guide you 
                to your perfect property.
              </p>
              <div className={styles.ctaBtns}>
                <a href="tel:+917894561237" className="btn btn-primary">
                  <Phone size={18} />
                  Call: +91 7894561237
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
    </main>
  );
}
