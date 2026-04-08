import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import RoyalBridal from './pages/RoyalBridal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Artificial delay to show the luxury loader experience
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
        clearTimeout(timer);
    };
  }, []);

  // Scroll to top or hash on route change
  useEffect(() => {
    if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            // Delay to allow page content to render and Lenis to initialize
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 500);
            return;
        }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
        <AnimatePresence mode="wait">
            {isLoading && <Loader key="loader" />}
        </AnimatePresence>
        
        <main className="font-sans antialiased bg-white selection:bg-accent selection:text-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/royal-bridal" element={<RoyalBridal />} />
            </Routes>
            <Footer />
            
            {/* Scroll to top button */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-14 h-14 bg-accent/80 hover:bg-accent text-white rounded-full transition-all duration-300 z-50 shadow-lg flex items-center justify-center group uppercase text-[10px] font-bold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </main>
    </>
  );
}

export default App;

