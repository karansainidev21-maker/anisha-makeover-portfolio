import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import HDPartyMakeup from './pages/HDPartyMakeup';
import TraditionalIndian from './pages/TraditionalIndian';
import SoftMatte from './pages/SoftMatte';
import EveningGlam from './pages/EveningGlam';
import GlassSkinLook from './pages/GlassSkinLook';
import RoyalBridal from './pages/RoyalBridal';

import GlobalCanvas from './components/GlobalCanvas';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Artificial delay to show the luxury loader experience
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.2,
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
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 500);
            return;
        }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-black">
        <GlobalCanvas />
        
        <AnimatePresence mode="wait">
            {isLoading && <Loader key="loader" />}
        </AnimatePresence>
        
        <main className="relative z-10 font-sans antialiased text-white selection:bg-secondary selection:text-dark">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/royal-bridal" element={<RoyalBridal />} />
                <Route path="/glass-skin-look" element={<GlassSkinLook />} />
                <Route path="/evening-glam" element={<EveningGlam />} />
                <Route path="/soft-matte" element={<SoftMatte />} />
                <Route path="/traditional-indian" element={<TraditionalIndian />} />
                <Route path="/party-makeup" element={<HDPartyMakeup />} />
            </Routes>
            <Footer />
            
            {/* Minimalist Scroll Top */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-10 right-10 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary text-white rounded-full transition-all duration-500 z-50 flex items-center justify-center group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </main>
    </div>
  );
}

export default App;

