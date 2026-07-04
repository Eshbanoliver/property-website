import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { testimonials } from '../../data';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className={styles.hero} aria-label="Testimonials hero">
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
              <MessageSquare size={14} />
              Client Reviews
            </div>
            <h1 className={styles.heroTitle}>
              What Our <span className="text-gradient">Clients Say</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Real stories from real clients who trusted us with their most important 
              property decisions. Their success is our greatest achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Average Rating Section ── */}
      <section className={styles.ratingSection} aria-label="Average rating">
        <div className="container">
          <ScrollReveal>
            <div className={styles.ratingCard}>
              <div className={styles.ratingScore}>
                <span className={styles.ratingNumber}>{avgRating}</span>
                <div className="stars" style={{ gap: '4px' }}>
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={28} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <span className={styles.ratingLabel}>Average Rating</span>
              </div>
              <div className={styles.ratingDivider} />
              <div className={styles.ratingStats}>
                {[
                  { label: 'Total Reviews', value: `${testimonials.length}+` },
                  { label: 'Happy Clients', value: '250+' },
                  { label: 'Satisfaction Rate', value: '99%' },
                ].map(s => (
                  <div key={s.label} className={styles.ratingStat}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Review Cards ── */}
      <section className="section" aria-label="Client reviews">
        <div className="container">
          <ScrollReveal>
            <header className="section-header">
              <div className="section-badge">💬 All Reviews</div>
              <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
              <p className="section-subtitle">250+ satisfied clients across Udaipur, Rajasthan and beyond.</p>
            </header>
          </ScrollReveal>

          <div className={styles.reviewsGrid} role="list">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.08}>
                <article
                  className={`glass-card ${styles.reviewCard}`}
                  role="listitem"
                  aria-label={`Review by ${t.name}`}
                >
                  <div className={styles.quoteIcon} aria-hidden="true">"</div>
                  <p className={styles.reviewText}>"{t.review}"</p>

                  <div className={styles.reviewFooter}>
                    <div className={styles.reviewerInfo}>
                      <div
                        className={styles.avatar}
                        aria-label={`${t.name} avatar`}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <strong className={styles.reviewerName}>{t.name}</strong>
                        <span className={styles.reviewerLocation}>{t.location}</span>
                      </div>
                    </div>
                    <div className={styles.reviewMeta}>
                      <div className="stars">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={si} size={14} fill="#FFD700" color="#FFD700" />
                        ))}
                      </div>
                      <span className={styles.serviceTag}>{t.service}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Testimonial Placeholder ── */}
      <section className="section" style={{ background: 'rgba(108,99,255,0.03)' }} aria-label="Share your experience">
        <div className="container">
          <ScrollReveal>
            <div className={styles.shareSection}>
              <div className={styles.shareIcon}>🌟</div>
              <h2 className={styles.shareTitle}>
                Happy with Our <span className="text-gradient">Service?</span>
              </h2>
              <p className={styles.shareText}>
                We'd love to hear from you! Share your experience and help others 
                make the right property decisions.
              </p>
              <div className={styles.shareBtns}>
                <a href="tel:+917894561237" className="btn btn-primary">
                  <Phone size={18} />
                  Call to Share Feedback
                </a>
                <a
                  href="https://wa.me/917894561237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Share on WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-label="Testimonials CTA">
        <div className={styles.ctaBlob} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>🏡 Join Our Happy Clients</div>
              <h2 className={styles.ctaTitle}>
                Ready to Write Your <span className="text-gradient">Success Story?</span>
              </h2>
              <p className={styles.ctaText}>
                Join 250+ happy clients who found their perfect property through Property Dealer. 
                Let us make your real estate journey smooth and rewarding.
              </p>
              <div className={styles.ctaBtns}>
                <a href="tel:+917894561237" className="btn btn-accent">
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
