import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', phone: '', email: '', subject: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500)); // Simulate API
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className={styles.hero} aria-label="Contact hero">
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
              Get in Touch
            </div>
            <h1 className={styles.heroTitle}>
              Contact <span className="text-gradient">Property Dealer</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Have a property query? Our expert team is ready to assist you. 
              Reach out and we'll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className={styles.contactCardsSection} aria-label="Contact information">
        <div className="container">
          <div className={styles.contactCards}>
            {[
              { icon: <Phone size={26} />, label: 'Call Us', value: '+91 7894561237', link: 'tel:+917894561237', color: '#6C63FF' },
              { icon: <Mail size={26} />, label: 'Email Us', value: 'Email coming soon', link: '#', color: '#FF6584' },
              { icon: <MapPin size={26} />, label: 'Visit Us', value: 'Udaipur, Rajasthan 313004', link: '#', color: '#43E97B' },
              { icon: <Clock size={26} />, label: 'Working Hours', value: 'Mon–Sat: 9 AM – 7 PM', link: '#', color: '#FFD700' },
            ].map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.08}>
                <a
                  href={card.link}
                  className={`glass-card ${styles.contactCard}`}
                  style={{ '--card-color': card.color } as React.CSSProperties}
                  aria-label={`${card.label}: ${card.value}`}
                >
                  <div className={styles.contactCardIcon}>{card.icon}</div>
                  <div className={styles.contactCardLabel}>{card.label}</div>
                  <div className={styles.contactCardValue}>{card.value}</div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="section" aria-label="Contact form and business information">
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className={`glass-card ${styles.formCard}`}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>Fill in the form and our team will get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    role="alert"
                  >
                    <CheckCircle size={48} color="#43E97B" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => { setForm(initialForm); setSubmitted(false); }}
                      style={{ marginTop: '1rem' }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Contact form">
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-subject">Subject *</label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="form-select"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        style={{ appearance: 'none' }}
                      >
                        <option value="">Select a subject</option>
                        <option value="buying">Property Buying</option>
                        <option value="selling">Property Selling</option>
                        <option value="renting">Rental Properties</option>
                        <option value="investment">Property Investment</option>
                        <option value="consultation">Property Consultation</option>
                        <option value="documentation">Documentation Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us about your property requirements, budget, and any specific needs..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitBtn}`}
                      disabled={loading}
                      aria-label="Submit contact form"
                    >
                      {loading ? (
                        <>
                          <span className={styles.spinner} aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Business Info */}
            <ScrollReveal direction="right">
              <div className={styles.infoColumn}>
                {/* Business Details */}
                <div className={`glass-card ${styles.infoCard}`}>
                  <h2 className={styles.infoTitle}>Business Information</h2>
                  <ul className={styles.infoList}>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Phone size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Phone</span>
                        <a href="tel:+917894561237" className={styles.infoValue}>+91 7894561237</a>
                      </div>
                    </li>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Mail size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Email</span>
                        <span className={styles.infoValue} style={{ color: 'var(--text-subtitle)', opacity: 0.7 }}>Coming soon</span>
                      </div>
                    </li>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><MapPin size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Address</span>
                        <span className={styles.infoValue}>Udaipur, Rajasthan 313004</span>
                      </div>
                    </li>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Clock size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Working Hours</span>
                        <span className={styles.infoValue}>Mon–Sat: 9:00 AM – 7:00 PM</span>
                        <span className={styles.infoValueSub}>Sunday: 10:00 AM – 4:00 PM</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Google Maps Placeholder */}
                <div className={styles.mapCard}>
                  <div className={styles.mapPlaceholder} role="img" aria-label="Google Maps location placeholder">
                    <div className={styles.mapIcon}>📍</div>
                    <h3>Find Us on Google Maps</h3>
                    <p>Udaipur, Rajasthan 313004</p>
                    <span className={styles.mapBadge}>Google Map Embed Coming Soon</span>
                  </div>
                </div>

                {/* Quick Call Card */}
                <div className={`glass-card ${styles.quickCallCard}`}>
                  <div className={styles.quickCallIcon}>📞</div>
                  <div>
                    <h4 className={styles.quickCallTitle}>Prefer to Talk?</h4>
                    <p className={styles.quickCallText}>Call us directly for immediate assistance.</p>
                  </div>
                  <a href="tel:+917894561237" className="btn btn-primary" style={{ flexShrink: 0 }}>
                    Call Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
