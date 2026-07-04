import type { Service, Testimonial, FAQ, CoreValue, WhyChooseUs, Stat, NavLink } from '../types';

// ── Navigation ─────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact Us', path: '/contact' },
];

// ── Stats ──────────────────────────────────────────────────
export const stats: Stat[] = [
  { id: 's1', value: 500, suffix: '+', label: 'Properties Listed', icon: '🏠' },
  { id: 's2', value: 250, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { id: 's3', value: 15, suffix: '+', label: 'Years Experience', icon: '📅' },
  { id: 's4', value: 100, suffix: '+', label: 'Successful Deals', icon: '🤝' },
];

// ── Services ───────────────────────────────────────────────
export const services: Service[] = [
  { id: 'sv1', icon: '🏠', title: 'Residential Properties', description: 'Find your perfect home from our wide range of residential options in prime locations across Udaipur.', color: '#6C63FF' },
  { id: 'sv2', icon: '🏢', title: 'Commercial Properties', description: 'Premium office spaces and commercial units to grow your business in strategic locations.', color: '#FF6584' },
  { id: 'sv3', icon: '🏰', title: 'Luxury Villas', description: 'Exquisite luxury villas with world-class amenities for the most discerning buyers.', color: '#FFD700' },
  { id: 'sv4', icon: '🏗️', title: 'Apartments', description: 'Modern apartments with contemporary design, security, and all necessary facilities.', color: '#43E97B' },
  { id: 'sv5', icon: '🌿', title: 'Farm Houses', description: 'Serene farm houses away from city noise, perfect for weekend retreats and eco-living.', color: '#38F9D7' },
  { id: 'sv6', icon: '🔑', title: 'Rental Properties', description: 'Curated rental listings for residential and commercial needs at competitive prices.', color: '#F093FB' },
  { id: 'sv7', icon: '📈', title: 'Investment Properties', description: 'High-yield investment properties with excellent ROI potential in growing areas.', color: '#4FACFE' },
  { id: 'sv8', icon: '🌍', title: 'Plots & Land', description: 'Strategic plots and land parcels for construction or long-term investment purposes.', color: '#43E97B' },
  { id: 'sv9', icon: '🛒', title: 'Property Buying Assistance', description: 'Expert guidance through the entire property buying journey from search to possession.', color: '#FA709A' },
  { id: 'sv10', icon: '🏷️', title: 'Property Selling Assistance', description: 'Maximize your property value with our professional selling and marketing support.', color: '#667EEA' },
  { id: 'sv11', icon: '💼', title: 'Property Consultation', description: 'Expert real estate consultation to help you make informed and profitable decisions.', color: '#F7971E' },
  { id: 'sv12', icon: '📋', title: 'Documentation Support', description: 'Complete legal and documentation assistance to ensure smooth and secure transactions.', color: '#11998E' },
];

// ── Testimonials ───────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Sharma',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    review: 'Exceptional service! Property Dealer helped us find our dream home in Udaipur within our budget. Their team was professional, transparent, and guided us throughout the entire process. Highly recommended!',
    avatar: 'RS',
    service: 'Residential Property',
  },
  {
    id: 't2',
    name: 'Priya Mehta',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    review: 'I was looking for a commercial space for my business and these experts found the perfect location. The documentation support was seamless and the deal was completed quickly. Amazing experience!',
    avatar: 'PM',
    service: 'Commercial Property',
  },
  {
    id: 't3',
    name: 'Vikram Singh',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    review: 'Bought a luxury villa through Property Dealer and the experience was outstanding. They showed us multiple options, explained every detail, and made the entire transaction transparent and stress-free.',
    avatar: 'VS',
    service: 'Luxury Villa',
  },
  {
    id: 't4',
    name: 'Anita Joshi',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    review: 'As an investor from Mumbai, I needed a reliable partner in Udaipur. Property Dealer proved to be exactly that — knowledgeable, honest, and efficient. My investment is already showing great returns!',
    avatar: 'AJ',
    service: 'Investment Property',
  },
  {
    id: 't5',
    name: 'Sunil Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    review: 'The team helped us sell our old property at the best market price within just 3 weeks. Their marketing strategy and network is incredible. Will definitely work with them again for our next property.',
    avatar: 'SP',
    service: 'Property Selling',
  },
  {
    id: 't6',
    name: 'Deepika Rathore',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    review: 'Bought a beautiful apartment through them. The consultation was detailed, the documentation was handled professionally, and we moved into our new home without any hassle. Thank you Property Dealer!',
    avatar: 'DR',
    service: 'Apartment',
  },
];

// ── FAQs ───────────────────────────────────────────────────
export const faqs: FAQ[] = [
  {
    id: 'f1',
    question: 'How do I buy a property through Property Dealer?',
    answer: 'Simply contact our team via phone or the contact form. Our expert consultants will understand your requirements, budget, and preferences, then shortlist the best matching properties for you to visit and choose from.',
  },
  {
    id: 'f2',
    question: 'Do you help with property documentation?',
    answer: 'Yes, absolutely! We provide complete documentation support including sale deed, title verification, registration, stamp duty, and all legal paperwork to ensure a smooth and secure transaction.',
  },
  {
    id: 'f3',
    question: 'Can you assist with property investments in Udaipur?',
    answer: 'We specialize in investment properties with high ROI potential. Our team analyzes market trends, growth areas, and rental yields to help you make the most profitable investment decisions.',
  },
  {
    id: 'f4',
    question: 'Are your property listings verified and genuine?',
    answer: 'Yes, every property in our portfolio undergoes thorough verification. We check legal title, ownership documents, encumbrances, and site visits before listing any property to ensure 100% authenticity.',
  },
  {
    id: 'f5',
    question: 'How can I contact your team?',
    answer: 'You can reach us by calling +91 7894561237, visiting our office in Udaipur, or filling the contact form on our website. Our team is available Monday–Saturday, 9 AM to 7 PM.',
  },
  {
    id: 'f6',
    question: 'Do you offer rental property services?',
    answer: 'Yes, we manage both residential and commercial rental properties. We help property owners find reliable tenants and help tenants find suitable rentals at fair market prices.',
  },
];

// ── Core Values ────────────────────────────────────────────
export const coreValues: CoreValue[] = [
  { id: 'cv1', icon: '🤝', title: 'Trust', description: 'Building lasting relationships through honesty and reliability in every transaction.', color: '#6C63FF' },
  { id: 'cv2', icon: '🔍', title: 'Transparency', description: 'Clear, open communication with no hidden fees or misleading information.', color: '#43E97B' },
  { id: 'cv3', icon: '⚖️', title: 'Integrity', description: 'Upholding the highest ethical standards in all our real estate dealings.', color: '#FF6584' },
  { id: 'cv4', icon: '😊', title: 'Customer Satisfaction', description: 'Putting client needs first and going above and beyond to exceed expectations.', color: '#FFD700' },
  { id: 'cv5', icon: '🏆', title: 'Professionalism', description: 'Delivering expert-level service with dedication, punctuality, and excellence.', color: '#4FACFE' },
  { id: 'cv6', icon: '⭐', title: 'Quality Service', description: 'Consistently providing superior real estate services that set us apart.', color: '#F093FB' },
];

// ── Why Choose Us ──────────────────────────────────────────
export const whyChooseUs: WhyChooseUs[] = [
  { id: 'wc1', icon: '✅', title: 'Verified Properties', description: 'Every listing is thoroughly verified for legal clarity and authenticity.' },
  { id: 'wc2', icon: '🔐', title: 'Transparent Deals', description: 'No hidden charges. All costs and terms are disclosed upfront.' },
  { id: 'wc3', icon: '🎯', title: 'Expert Guidance', description: '15+ years of local market expertise at your service.' },
  { id: 'wc4', icon: '👤', title: 'Personalized Service', description: 'Tailored property search based on your unique needs and budget.' },
  { id: 'wc5', icon: '💰', title: 'Best Market Prices', description: 'Access to exclusive deals and properties at the best prices.' },
  { id: 'wc6', icon: '⚡', title: 'Quick Documentation', description: 'Streamlined paperwork for faster, hassle-free property transactions.' },
  { id: 'wc7', icon: '👥', title: 'Experienced Team', description: 'A dedicated team of real estate professionals ready to serve you.' },
  { id: 'wc8', icon: '🔄', title: 'End-to-End Support', description: 'From search to possession, we support you at every single step.' },
];
