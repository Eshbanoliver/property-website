import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

// Lazy loaded pages for code splitting & performance
const Home = lazy(() => import('./pages/Home/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./pages/Testimonials/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./pages/Contact/Contact').then(m => ({ default: m.Contact })));

function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-dark)',
    }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '3px solid rgba(108,99,255,0.2)',
        borderTopColor: '#6C63FF',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </>
  );
}
